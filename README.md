# Vite와 React를 사용한 프로젝트

이 프로젝트는 Vite와 TypeScript, 그리고 다양한 최신 도구와 라이브러리를 사용하여 구축된 React 애플리케이션입니다. 이 문서에서는 프로젝트 설정, 실행 방법, 폴더 구조, 코딩 표준, Git 커밋 정책 등을 다룹니다.

## 목차

- [시작하기](#시작하기)
- [프로젝트 구조](#프로젝트-구조)
- [스크립트](#스크립트)
- [코딩 표준](#코딩-표준)
- [Git 커밋 정책](#git-커밋-정책)
- [테스트](#테스트)
- [환경 변수](#환경-변수)
- [라이선스](#라이선스)

## 시작하기

### 필수 조건

다음 소프트웨어가 설치되어 있어야 합니다:

- Node.js (>= 14.x)
- npm (>= 6.x) 또는 yarn (>= 1.x)

### 설치

1. 리포지토리를 클론합니다:

   ```sh
   git clone https://github.com/yoo-sg/vite-action.git
   cd vite-action
   ```

2. 의존성을 설치합니다:
   ```sh
   npm install
   # 또는
   yarn install
   ```

### 애플리케이션 실행

개발 서버를 시작하려면 다음 명령어를 실행합니다:

```sh
npm run dev
# 또는
yarn dev
```

애플리케이션은 `http://localhost:5173`에서 확인할 수 있습니다.

## 프로젝트 구조

프로젝트는 코드를 체계적으로 유지하고 관리하기 위해 표준 구조를 따릅니다:

```
react-ts/
├── public/                   # 정적 파일
├── src/                      # 소스 파일
│   ├── apis/                 # API 핸들러
│   ├── assets/               # 애셋 (이미지, 폰트 등)
│   ├── components/           # 컴포넌트
│   │   ├── common/           # 재사용 가능한 공통 컴포넌트
│   │   ├── auth/             # 사용자 인증 관련 모듈
│   │   ├── layout/           # 공통 레이아웃 관련 모듈
│   │   ├── /                 # 각 화면별 섹션 컴포넌트 (스타일 로직 관리)
│   ├── hooks/                # 커스텀 훅
│   ├── pages/                # 페이지 컴포넌트 (비즈니스 로직 관리)
│   │   ├── hooks/            # 화면 내 공통 비즈니스 로직 커스텀 훅 (API 호출 로직 등)
│   ├── store/                # Zustand 스토어
│   ├── styles/               # 글로벌 스타일
│   ├── utils/                # 유틸리티 함수
│   │   ├── schema/           # 유효성 검사 스키마
│   │   ├── store/            # 전역상태 스토어 (Zustand)
│   ├── main.tsx             # 엔트리 포인트
├── tests/                    # 테스트 파일
├── .eslintrc.js              # ESLint 설정
├── jest.config.js            # Jest 설정
├── package.json              # 프로젝트 메타데이터 및 의존성
├── postcss.config.js         # PostCSS 설정
├── tailwind.config.js        # Tailwind CSS 설정
├── tsconfig.json             # TypeScript 설정
├── vite.config.ts            # Vite 설정
```

## 스크립트

`package.json`에 정의된 스크립트는 다음과 같습니다:

- `dev`: 개발 서버를 시작합니다.
- `build`: 프로젝트를 프로덕션용으로 빌드합니다.
- `lint`: ESLint를 실행하여 린트 오류를 검사합니다.
- `preview`: 프로덕션 빌드를 미리 봅니다.
- `test`: Jest를 사용하여 유닛 테스트를 실행합니다.
- `e2e-test`: Playwright를 사용하여 E2E 테스트를 실행합니다.

## 코딩 표준

### TypeScript

- TypeScript [스타일 가이드](https://typescriptlang.org/)를 따릅니다.
- 가능한 한 엄격한 타입을 사용합니다.

### ESLint와 Prettier

- 린팅을 위해 ESLint를 사용합니다. 설정은 `.eslintrc.cjs`에 있습니다.
- 코드 포매팅을 위해 Prettier를 사용합니다. 설정은 `.prettierrc`에 있습니다.

### 커밋 메시지

커밋 메시지는 [Conventional Commits](https://www.conventionalcommits.org/ko/v1.0.0/) 규격을 따릅니다:

- `feat`: 새로운 기능 추가.
- `fix`: 버그 수정.
- `docs`: 문서만 변경.
- `style`: 코드 의미에 영향을 주지 않는 변경사항 (포맷팅 등).
- `refactor`: 버그 수정이나 기능 추가가 아닌 코드 변경.
- `perf`: 성능을 향상시키는 코드 변경.
- `test`: 누락된 테스트 추가 또는 기존 테스트 수정.
- `chore`: 빌드 프로세스 또는 도구 및 라이브러리 변경 (문서 생성 등).

### Git 커밋 정책

- 의미 있는 커밋 메시지를 사용합니다.
- 각 커밋은 하나의 논리적인 변경 사항을 나타내야 합니다.
- 기능, 핫픽스, 기타 중요한 변경 사항은 브랜치를 사용하여 작업합니다.
- 깨끗한 기록을 유지하기 위해 브랜치를 병합하기 전에 리베이스합니다.

## 테스트

### 유닛 테스트

Jest를 사용하여 유닛 테스트를 수행합니다. 테스트 파일은 `tests` 디렉토리에 있습니다. 테스트를 실행하려면 다음 명령어를 사용합니다:

```sh
npm run test
# 또는
yarn test
```

### E2E 테스트

Playwright를 사용하여 E2E 테스트를 수행합니다. 테스트 파일은 `tests` 디렉토리에 있습니다. E2E 테스트를 실행하려면 다음 명령어를 사용합니다:

```sh
npm run e2e-test
# 또는
yarn e2e-test
```

## 환경 변수

프로젝트 루트에 `.env` 파일을 생성하여 환경 변수를 정의합니다. 예시:

```
VITE_API_URL=https://api.example.com
```

## 라이선스

이 프로젝트는 MIT 라이선스에 따라 라이선스가 부여됩니다.
