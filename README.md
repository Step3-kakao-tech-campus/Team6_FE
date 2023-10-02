# TripKoFE

## 전달 사항

> 특정 수정이 저에게만 영향을 미친다면, 과감하게 수정했습니다.
>
> 그러나 아래의 5번과 같이 유정님에게도 영향을 끼치며, 이것이 뭔가 의아하다거나, 불편하다거나, 불필요하다거나 하는 경우에는 의견을 주시면 감사하겠습니다.
>
> 비전공자이기 때문에 자신감이 없을 수 있습니다. 하지만, 저 역시 프론트앤드를 비슷한 시점에 시작했기에 크게 나을 것이 없을 수 있습니다. 너무 겸손할 필요 없이 자유롭게 의견을 주시면 감사하겠습니다.


1. 최대한 분리할 수 있도록 디렉터리 구조가 변경되었습니다. 좀 더 합리적인 구조가 있을 수 있다면 제안해 주세요
2. `index.css`에 tailwind macro가 추가되었습니다. tailwind macro를 사용하면 공통적인 css를 적용할 수 있습니다. 적용은 `src/components/layout/organisms/BottomNavBar`를 참고해 주세요.
3. 모든 단위는 `rem`으로 통일하였습니다. `px`는 사용하지 않습니다. `rem`은 `html`의 `font-size`를 기준으로 합니다. 이는 기기별로 통일된 레이아웃을 볼 수 있도록 돕습니다. 미처 적용되지 않은 곳은 수정해 주세요 `1rem`은 `16px`입니다.
4. calender는 wrapper만 구현해 두었습니다. `react-datepicker`라는 라이브러리를 발견했습니다. 사용할 수 있을까요?
5. mocking의 response-body를 api 명세에 맞게 수정해야 할 것 같습니다. 이는 많은 코드들을 수정하는 shotgun surgery를 유발할 수 있습니다. 후순위로 미루고 나중에 한 번에 처리할 지, 아니면 바로 처리할 지를 고민해야 합니다.


## 디렉터리 구조

```
TripKoFE
├── README.md
├── package.json
├── public
├── src 
│   ├── components
│   │   ├── common
│   │   ├── layouts
│   │   ├── pages
│   ├── hooks
│   ├── mocks
│   │   ├── datas
│   ├── services
│   ├── utils

```
`src` : 전체적인 소스코드가 들어있습니다.

`components` : 컴포넌트들이 들어있습니다.

`components/common` : 공통으로 사용되는 컴포넌트들이 들어있습니다.

`components/layouts` : 레이아웃별로 사용되는 컴포넌트들이 들어있습니다.

`components/pages` : 페이지별로 사용되는 컴포넌트가 들어있습니다.

`hooks` : 커스텀 훅이 들어있습니다.

`mocks` : mocking 관련 파일이 들어있습니다.

`mocks/data` : mocking data가 들어있습니다.

`services` : api 관련 파일이 들어있습니다.

`utils` : 공통으로 사용되는 함수들이 들어있습니다.

## TODO

1. px -> rem

2. festival page