# core/design-systems 분석 및 타입 안정성 전략

이 문서는 `core/design-systems` 디렉토리의 구조와 코드에 담긴 타입 안정성 확보 전략을 종합적으로 분석하고 설명합니다. 이 디자인 시스템은 TypeScript의 고급 기능을 적극적으로 활용하여 매우 높은 수준의 개발 경험(DX)과 안정성을 제공합니다.

## 1. 핵심 전략: 역할 분리를 통한 타입 안정성

디자인 시스템의 각 컴포넌트는 `*.type.ts`와 `*.const.ts` 파일을 통해 역할과 책임을 명확히 분리하여 타입 안정성을 확보합니다.

-   **명시적인 Prop 타입 정의 (`*.type.ts`):** 모든 컴포넌트는 MUI의 기본 타입을 확장한 자신만의 Prop 타입을 명시적으로 정의합니다. 이를 통해 컴포넌트의 API를 명확히 하고 잘못된 사용을 방지합니다.
-   **토큰 기반 스타일링 (`*.const.ts`):** `variant`, `color` 등 디자인과 관련된 Prop들은 문자열 리터럴 대신, `as const`로 선언된 상수(토큰) 객체의 키값을 사용하도록 강제하여 오타나 잘못된 값의 사용을 원천적으로 차단합니다.

## 2. MUI Prop 타입 확장의 원리

단순히 타입을 `&`로 연결하는 것을 넘어, MUI의 정교한 타입 아키텍처를 활용하여 유연성과 안정성을 모두 확보합니다.

### 가. 핵심 유틸리티 타입

| 유틸리티                 | 핵심 기능                                                              | 주요 사용 용도                                                                                   |
| :----------------------- | :--------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- |
| **`OverridableComponent`** | `component` prop을 통한 다형성(Polymorphism) 지원 및 MUI 시스템 통합     | 커스텀 컴포넌트가 MUI의 핵심 기능(`sx` 등)을 상속하고, 렌더링 요소를 동적으로 변경할 수 있게 만들 때 |
| **`TypeMap`**            | 컴포넌트의 타입 정보(props, defaultComponent)를 담는 명세서              | `OverridableComponent`에 커스텀 prop 타입을 정확하게 주입하여 타입 시스템에 알릴 때                |
| **제네릭 `Props`**       | `component` prop에 따라 prop 타입을 동적으로 확장                        | MUI의 다형성을 유지하면서 커스텀 prop을 타입-안전하게 추가(확장)할 때                            |

### 나. 동작 원리

```typescript
// core/design-systems/components/button/button.type.ts

// 1. Mui의 기본 타입과 유틸리티를 import
import { ButtonProps as MuiButtonProps, ButtonTypeMap as MuiButtonTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

// 2. Mui의 제네릭 Props를 확장하여 커스텀 Props 타입을 정의
//    (MUI의 다형성을 그대로 계승)
export type ButtonProps<C extends React.ElementType> = MuiButtonProps<C> & {
  inactivated?: boolean;
  // ... other custom props
};

// 3. 확장된 Props를 사용하는 컴포넌트 타입을 정의
//    - MuiButtonTypeMap에 확장된 ButtonProps를 주입하여 새로운 TypeMap을 만듦
//    - 이를 OverridableComponent에 전달하여 최종 컴포넌트 타입을 완성
export type ButtonComponent = OverridableComponent<MuiButtonTypeMap<ButtonProps>>;
```

이러한 구조 덕분에 `ButtonComponent`는 **시맨틱 동작을 위한 `component` prop**을 받으면서도, **기존 MUI Button의 모든 prop**과 **새로운 커스텀 prop**을 전부 받을 수 있는 정교하게 확장된 타입이 됩니다.

## 3. 모듈 보강(Module Augmentation)을 통한 전역 타입 확장

개별 컴포넌트의 타입을 정의하는 것을 넘어, 애플리케이션의 기반이 되는 **디자인 토큰(테마) 자체를 타입-안전하게 만드는** 고수준 전략입니다.

### 가. 전역 테마(Theme) 확장

`*.mui-type.d.ts` 파일에서 `declare module` 키워드를 사용하여 MUI의 기존 타입 정의를 "보강"합니다.

```typescript
// core/design-systems/theme/palette/palette.mui-type.d.ts
import { PaletteColor } from '@mui/material/styles'; // 실제 코드에서는 import 불필요

// 'PaletteColor'는 '@mui/material/styles' 모듈 내부에 이미 정의되어 있음

declare module '@mui/material/styles' {
  // 이 블록 안은 '@mui/material/styles' 모듈의 내부와 동일한 범위(scope)를 가짐
  // 따라서 Palette, PaletteOptions, PaletteColor 등을 import 없이 사용 가능

  // 기존 Palette 인터페이스를 확장하여 커스텀 색상을 추가
  interface Palette {
    white: PaletteColor;
    black: PaletteColor;
    gray: PaletteColor;
  }

  // createTheme에 사용될 PaletteOptions도 함께 확장
  interface PaletteOptions {
    white?: PaletteColorOptions;
    black?: PaletteColorOptions;
    gray?: PaletteColorOptions;
  }
}
```

이를 통해 프로젝트 어디서든 `theme.palette.gray`와 같이 커스텀 테마 값을 타입 에러 없이 안전하게 사용하고, 자동 완성의 이점을 누릴 수 있습니다.

### 나. 특정 컴포넌트의 Prop 옵션 확장

모듈 보강은 특정 컴포넌트의 `props`가 받을 수 있는 값의 목록을 커스터마이징하는 데에도 사용됩니다.

```typescript
// 예시: Button의 color prop 확장
declare module '@mui/material/Button' {
  // ButtonPropsColorOverrides는 MUI Button 모듈 내부에 이미 존재하는
  // "확장을 위한 공식적인 통로" 역할을 하는 인터페이스임.
  interface ButtonPropsColorOverrides {
    'augment/gray/800': true;
    'white': true;
    // ... 프로젝트의 모든 커스텀 색상을 true로 매핑
  }
}
```

이 코드는 `Button` 컴포넌트의 `color` prop이 받을 수 있는 값의 목록을 MUI의 기본값(`'primary'`, `'secondary'`)에서 프로젝트의 커스텀 색상 팔레트로 대체(또는 확장)하여, 개발자가 의도된 색상만 사용하도록 강제하는 역할을 합니다.
