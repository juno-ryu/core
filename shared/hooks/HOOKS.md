# `core/shared/hooks` 코드 분석 보고서

`core/shared/hooks` 디렉토리는 React 애플리케이션의 상태 및 사이드 이펙트 관련 로직을 **재사용 가능한 함수(커스텀 훅)** 형태로 분리하여 관리하는 핵심적인 공간입니다. 이는 함수형 컴포넌트의 로직을 모듈화하고, 컴포넌트 자체는 UI 렌더링에만 집중할 수 있도록 돕는 현대적인 React 개발의 핵심 패턴입니다.

이 디렉토리의 주된 목적은 **상태 로직의 추상화**, **컴포넌트와 로직의 분리**, 그리고 **애플리케이션의 예측 가능성 및 테스트 용이성 향상**에 있습니다.

### 1. 개발자의 의도 및 핵심 전략

-   **로직의 재사용 및 추상화:** `useDebounced`, `useLocalStorage`와 같이 여러 컴포넌트에서 반복적으로 사용될 수 있는 상태 관리 로직이나 브라우저 API 관련 로직을 커스텀 훅으로 만들어 제공합니다. 이를 통해 개발자는 매번 동일한 로직을 작성할 필요 없이, 필요한 훅을 호출하기만 하면 됩니다.
-   **관심사 분리 (SoC):** 컴포넌트의 JSX 코드(무엇을 그릴 것인가)와 상태 관리 및 비동기 처리 로직(어떻게 동작할 것인가)을 명확하게 분리합니다. 이는 컴포넌트의 가독성을 높이고, 각 부분의 복잡도를 낮춰 유지보수를 용이하게 합니다.
-   **캡슐화:** 복잡한 로직의 내부 구현을 훅 안에 숨깁니다. 예를 들어, `useFetch` 훅은 내부적으로 `fetch` API 호출, 로딩 상태, 에러 상태, 응답 데이터 상태를 모두 관리하고, 외부에는 이 상태들과 재요청 함수 등 필요한 인터페이스만 노출합니다.

### 2. 디렉토리 구조와 역할

-   **`data/` (데이터 페칭 및 관리):**
    -   **역할:** `useFetch`, `useMutation` 등 서버와의 데이터 통신과 관련된 비동기 로직을 처리하는 훅을 관리합니다.
    -   **의도:** API 통신 시 반드시 필요한 로딩(loading), 에러(error), 데이터(data) 상태를 하나의 훅에서 일관된 방식으로 관리하도록 강제합니다. 이는 애플리케이션 전체의 비동기 처리 방식을 표준화하고, 로딩 UI나 에러 UI를 표시하는 로직을 매우 단순하게 만들어줍니다. `react-query`나 `SWR`과 같은 데이터 페칭 라이브러리의 핵심 기능을 경량으로 직접 구현한 것으로 보입니다.

-   **`effect/` (사이드 이펙트 및 브라우저 API):**
    -   **역할:** `useEffect`를 기반으로 특정 사이드 이펙트를 관리하거나, 브라우저의 `localStorage`, `dialog` 등과 상호작용하는 로직을 추상화합니다.
    -   **의도:** `useLocalStorage`는 `useState`와 유사한 인터페이스를 제공하면서 내부적으로 데이터를 로컬 스토리지에 동기화하는 복잡한 로직을 숨깁니다. `useDialog`는 전역 상태와 연동하여 애플리케이션 어디서든 다이얼로그를 쉽게 열고 닫을 수 있는 함수를 제공할 가능성이 높습니다.

-   **`display/` 및 `device/` (UI 상태 및 반응형 처리):**
    -   **역할:** `useStepper`(여러 단계의 UI 제어), `useDropdown`(드롭다운 메뉴의 열림/닫힘 상태 관리), `useResponsive`(브라우저 창 크기에 따른 분기 처리) 등 UI의 특정 상태나 디바이스 환경과 관련된 로직을 관리합니다.
    -   **의도:** 복잡한 UI 컴포넌트가 가질 수 있는 상태 로직(예: 스텝, 열림/닫힘, 현재 화면 크기)을 컴포넌트로부터 분리하여, 로직은 훅에서, UI는 컴포넌트에서 처리하도록 역할을 나눕니다. 이는 컴포넌트를 더 "멍청하게(dumb)" 만들어 테스트와 재사용을 용이하게 합니다.

-   **`upload/` (업로드 로직 분리):**
    -   **역할:** `useThumbnailUpload`, `useAssetUpload` 등 파일 업로드와 관련된 상태(업로드 진행률, 파일 목록, 에러 상태 등)와 로직(파일 유효성 검사, 서버 전송)을 관리합니다.
    -   **의도:** `core/shared/components/upload`의 업로드 컴포넌트들과 1:1로 매칭될 가능성이 높습니다. UI와 상태 로직을 분리하는 "Headless" 컴포넌트 패턴을 적용한 것으로, 동일한 업로드 로직(훅)에 다른 UI(컴포넌트)를 쉽게 결합할 수 있도록 유연성을 제공합니다.

### 결론

`core/shared/hooks` 디렉토리는 이 프로젝트가 매우 성숙한 React 개발 패턴을 따르고 있음을 보여주는 강력한 증거입니다. 개발자는 커스텀 훅을 통해 **상태 로직을 체계적으로 분리하고 재사용**함으로써, 컴포넌트의 복잡도를 낮추고 애플리케이션의 전체적인 코드 품질, 테스트 용이성, 유지보수성을 크게 향상시켰습니다. 이는 단순히 기능을 구현하는 것을 넘어, 확장 가능하고 안정적인 소프트웨어를 구축하려는 깊은 고민의 결과물입니다.
