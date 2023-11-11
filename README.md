# TripKoFE

한국이 <span style="color:#FF8A00">**처음**</span>이라도, 한국어를 <span style="color:#FF8A00">**몰라도**</span>

<span style="color:#FF8A00">**제약없이**</span> 즐기는 한국 로컬여행

## 필수 첨부자료

### 팀 내 배포 링크 

- 배포 중인 인스턴스 주소 모음

### 최신 ERD 이미지

- 

### 코딩에 대한 간략한 소개

- 컴포넌트 재사용성

컴포넌트 설계가 미숙하여 완벽한 컴포넌트 재사용성을 갖추지는 못했으나, 가능한 내에서 최대한 구현하혔습니다. 가장 인상적인 것은 축제와 식당 예약에 공통적으로 사용되는 Calendar입니다.

축제와 식당 예약은 서로 다른 제약조건(축제는 기간, 식당은 정기휴일)을 가지고 있지만, 하나의 컴포넌트에서 각 제약조건을 만족할 수 있도록 구성되었습니다.

![image](https://github.com/Step3-kakao-tech-campus/Team6_FE/assets/82745129/a2415925-e02d-4d92-ad63-9b3ed8495d37)

- 아기자기한 UI 디자인

역량에 비해 너무 많은 작업량으로 인해 기능 구현에 급급했습니다. 하지만 그런 와중에도 최대한 아름다운 UI를 구성하려 했습니다.

예약을 하고 발급받은 티켓과 확인도장의 느낌으로 구성한 예약 내역 페이지의 ReservationCard들이 대표적입니다.

![image](https://github.com/Step3-kakao-tech-campus/Team6_FE/assets/82745129/165a9f3c-5a4d-4941-a508-4e46f29ee7d0)


- 

## 서비스 소개

#### 1️⃣다양한 관광 정보 제공

- 현지인들에게 인기 있는 장소를 구석구석 수록
- 한국어와 문화를 몰라도 만족스러운 여행 경험 선사할 수 있는 정확하고 자세한 정보를 영어로 제공

#### 2️⃣한국 음식 검색 기능

- 오번역을 포함한 검색이 가능 
- 음식의 재료 및 제조 과정 등 정확하고 자세한 정보 제공
- 검색한 음식을 이용할 수 있는 관련 식당정보 제공

#### 3️⃣예약하기

- 예약 대행 서비스
- 의사소통의 어려움 없이 간편하게 식당, 축제 예약

#### 4️⃣사용자 편의 기능

- 찜하기 기능
- 리뷰 작성 및 관리
- 프로필 수정

## 개발 환경

### 💡BackEnd

- #### Language & Framework

    <img src="https://img.shields.io/badge/Java-007396?style=flat&logo=OpenJDK&logoColor=white" height="29"/> 
    <img src="https://img.shields.io/badge/springBoot-6DB33F?style=for-the-badge&logo=springBoot&logoColor=white" height="29"/> 

- #### DataBase
    <img src="https://img.shields.io/badge/Redis-DC382D?style=flat&logo=redis&logoColor=white" height="29"/> 
    <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white" height="29"/> 

- #### Image Storage
    <img src="https://img.shields.io/badge/Amazon S3-569A31?style=flat&logo=amazons3&logoColor=white" height="29"/>

### 💡FrontEnd

- #### Language & Framework
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white" height="29"/>
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white" height="29"/>
    <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white" height="29"/>
    <img src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white" height="29"/>

## 구성도

![구성도](%ED%94%84%EB%A0%88%EC%A0%A0%ED%85%8C%EC%9D%B4%EC%85%981.png)

## 프로젝트 설치

`node v16.16.0` 환경에서 개발되었습니다. [nodejs](https://nodejs.org/ko)를 설치해주세요.

### 1. 프로젝트 클론

이 프로젝트를 클론합니다.

```bash
git clone <해당 프로젝트 url>
```

### 2. 프로젝트 의존성 설치

이 프로젝트를 설치합니다.

```bash
npm install
```

### 3. 환경변수 설정

루트 디렉터리에 `.env` 파일을 생성하여 아래와 같이 api요청을 보낼 주소를 설정합니다. 환경변수를 설정하지 않으면 mock 데이터를 사용합니다.

```bash
REACT_APP_API_URL=http://localhost:3000 <-- api주소를 입력해야 함
```

`.env` 파일을 열어서 환경변수를 설정합니다.

### 4. 프로젝트 실행

이 프로젝트를 실행합니다.

```bash
npm run start
```

## 참여자 목록

### 부산대 6조 FE

| 이름                                 | 역할                                         |
|------------------------------------|--------------------------------------------|
| [박유정](https://github.com/udadai)   | 관광지 검색, 음식 검색 페이지, 위시리스트, 마이페이지 그와 관련된 기능들 |
| [박동진](https://github.com/minmunui) | 상세, 예약, 리뷰, 메인 페이지, 그와 관련된 기능들             |

## 디렉터리 구조

```
TripKoFE
├── README.md       
├── package.json        프로젝트 의존성 및 스크립트
├── public              정적 파일
├── k8s                 k8s 설정 파일
├── prettier.config.js  prettier 설정 파일
├── tailwind.config.js  tailwind 설정 파일
├── src 
│   ├── components      전체적인 컴포넌트
│   ├── hooks           커스텀 훅
│   ├── mocks           mocking을 이용한 테스트용 코드
│   │   ├── datas       mocking에 사용되는 데이터
│   ├── apis            api 호출을 위한 코드
│   ├── utils           유틸리티 코드
│   ├── store           redux store

```
