# Core 모듈 가이드라인

## 저장소 클론 및 설정

`codebase`를 통한 프로젝트 구성 후, 아래 `core` 저장소를 클론하세요.

`codebase`의 `package.json`내부에 workspaces를 구성하여 사용하세요.

```bash
git clone https://github.com/juno-ryu/core.git
```

`package.json`에 다음과 같이 `workspaces` 설정을 추가합니다.

```json:package.json
{
  "private": true,
  "workspaces": [
    "core"
  ]
}
```

---

## Core 관련 가이드라인

### 라이브러리 사용

- **Icons**: 아이콘은 `core/design-systems/components/design-icon`의 아이콘을 우선적으로 사용합니다. 적합한 아이콘이 없을 경우 `lucide-react`를 사용합니다.
- **UI Components**: UI 컴포넌트는 `core/design-systems`의 컴포넌트를 우선적으로 사용합니다. 적합한 컴포넌트가 없을 경우 `@mui/material`를 사용합니다.

### 디렉토리 구조

- **`core/design-systems`**: 디자인 시스템 컴포넌트 및 유틸리티
- **`core/shared`**: 공유 컴포넌트, 훅, 서비스
- **`core/utils`**: 공통 유틸리티 함수

### 코드 스타일

- `core/design-systems`의 컴포넌트를 사용하고, 정의된 베리언트, 토큰, 색상 팔레트를 따릅니다.
- `core/design-systems/theme/palette/palette.const.ts` 파일에 색상 팔렛트가 정의 되어 있습니다.
- `core/design-systems/theme/breakpoint/breakpoint.const.ts` 파일에 브레이크 포인트 설정 관련 내용이 정의되어 있습니다.
- `core/design-systems/components/typography/typography.const.ts` 파일에 타이포 그래피 관련 variant token 들이 정의 되어 있습니다.
