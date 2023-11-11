# TripKoFE
<div>
<img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white">
</div>

## 프로젝트 소개

한국을 여행하는 외국인들을 위한 여행지 추천, 예약, 리뷰 서비스입니다.
음식정보 및 관광지 정보를 제공하고, 관광지에 대한 리뷰를 작성할 수 있습니다.
위시리스트 기능을 통해 관심있는 여행지를 저장할 수 있습니다.

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
REACT_APP_API_URL=http://localhost:3000
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
