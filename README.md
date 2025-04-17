# 🧩 Tracker SDK

> **실시간 사용자 행동 분석 SDK**  
> 간단한 설치와 초기화만으로 방문자 데이터를 실시간으로 수집하고, Tracker Dashboard 에서 시각화하여 확인할 수 있습니다.

---

## 📺 기능 시연

### PC 화면

<p>
<img src="https://github.com/user-attachments/assets/40407000-c101-49b0-9a94-87f034d03cca" width="70%" alt="pc"/>
</p>

### Mobile 화면

<p>
<img src="https://github.com/user-attachments/assets/db4376df-b7fe-41bb-b0b7-717d01b89d08" width="30%" alt="mobile"/>
<p>
---

## 인증 및 데이터 흐름

![auth_data](https://github.com/user-attachments/assets/1456bf4b-6f3d-4488-b378-61680a3de8aa)

---

## 🍀 배포 링크 (SDK)

- [SDK](https://www.npmjs.com/package/tracker-sdk-nemo?activeTab=readme)
- [Dashboard](https://tracker-dashboard.site/login)
- [Server](https://tracker-server.site) _(서버 상태에 따라 접근이 제한될 수 있습니다.)_

---

## 📦 패키지 설치

```bash
npm install tracker-sdk-nemo
```

---

## 🛠️ 요구 사항

- 브라우저 환경 필수
- Node.js (서버 사이드) 환경은 지원하지 않음

---

## 💡 주요 기능

- 실시간 사용자 수 집계
- 방문자 국가 통계, 언어 통계, 해상도 분석 통계
- 이탈자 페이지 위치 통계
- 재방문률
- 총 방문자 통계, 실제 방문자 통계
- 유입 경로 통계
- 장치 종류 통계, 운영체제 종류 통계, 브라우저 종류 통계
- 날짜별 방문 페이지 통계, 날짜별 실제 방문자 수 및 총 방문자 수 통계
- API Key 기반 트래킹 구분
- 단일 init() 호출로 간편 초기화

---

## 🚀 사용법

### React

1. TrackerWrapper 컴포넌트 생성

```tsx
import { useEffect } from 'react';
import { tracker } from 'tracker-sdk-nemo';

export const TrackerWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    tracker.init('YOUR_API_KEY'); // Dashboard 에서 발급받은 API Key 입력
  }, []);

  return <>{children}</>;
};
```

2. App 컴포넌트에 적용

```tsx
import { TrackerWrapper } from './TrackerWrapper';

function App() {
  return (
    <TrackerWrapper>
      <YourMainComponent />
    </TrackerWrapper>
  );
}
```

### Next

- Next.js 13 이상에서는 "클라이언트 컴포넌트" (`'use client'`) 에서 사용해야 합니다.

```tsx
'use client';

import { useEffect } from 'react';
import { tracker } from 'tracker-sdk-nemo';

export const TrackerWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    tracker.init('YOUR_API_KEY'); // Dashboard 에서 발급받은 API Key 입력
  }, []);

  return <>{children}</>;
};
```

### Vue

```html
<script setup>
  import { onMounted } from 'vue';
  import { tracker } from 'tracker-sdk-nemo';

  onMounted(() => {
    tracker.init('YOUR_API_KEY'); // Dashboard 에서 발급받은 API Key 입력
  });
</script>
```

### Angular

```typescript
import { Component, OnInit } from '@angular/core';
import { tracker } from 'tracker-sdk-nemo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  ngOnInit() {
    tracker.init('YOUR_API_KEY'); // Dashboard 에서 발급받은 API Key 입력
  }
}
```
