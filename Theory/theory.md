```js

0. React 사용 이유

-> 초기 로딩속도는 느리지만 일단 한 번 받아오면 사용자 interaction이 매우 빠름

1. next.js

-> 써야할 순간 : SSR 필요, codeSplitting 필요(거의 대부분의 B2C 서비스)
-> 안써도 될 순간 : admin page 등 => SPA 로 충분

* 특징

1) 첫 loading, 새로고침, a태그를 통한 주소 변경 => loading 발생 : 백엔드에서 완성된 html을 주기 때문
2) 그 이후엔 => loading 발생 x
3) 무조건 pages폴더가 존재해야함, pages폴더 안에 있는 파일들을 next가 자동으로 코드스플리팅 된 컴포넌트로 만들어준다. 또한 react, react-dom 설치하면 하면 되고 import할 필요 없게된다.
4) pages 폴더에 파일을 만들기만 하면 page 라우팅 알아서 해준다!(Dynamic Routing) pages 파일은 소문자로 작성하고 내부 코드는 대문자 시작 + 카멜케이스 & 폴더 구성 후 폴더 안에 파일 만들면 depth 2 이상 가능
5) 개발모드에선 조금 느리다. 하지만 배포모드로 빌드하면 빨라짐 (로딩속도)

* 사용
- npm i next@9
- pages폴더 생성


2. propTypes

당신의 앱이 커짐에 따라 타입 확인을 통하면 많은 버그를(bug) 잡을 수 있습니다. 특정 애플리케이션에서는 전체 애플리케이션의 타입 확인을 위하여 Flow 또는 TypeScript와 같은 JavaScript 도구(Extensions)를 사용할 수 있습니다. 당신이 이러한 것들을 사용하지 않더라도 React는 내장된 타입 확인 기능들을 가지고 있습니다. 컴포넌트의 props에 타입 확인을 하려면 다음과 같이 특별한 프로퍼티인 propTypes를 선언할 수 있습니다.

* propTypes로 컴포넌트에 전달되는 props의 타입검사를 할 수 있다.
-> 더불어 default 값도 설정할 수 있음.




3. 공통 컴포넌트 설계

1) 모든 page에서 공통 pages/_app.jsx 에 작성

2) 특정 컴포넌트들에서 공통 components/...Layout.jsx 에 작성

******
-> 페이지를 이동해도 몇몇 화면은 그대로인 프로젝트는 공통 레이아웃을 써야함

3) head를 수정하고싶을 땐 Head "next/head"임포트 시켜서 사용


4. antd 반응형

1) Row, Col
2) xs:모바일 sm:태블릿 md:작은 데스크탑
3) gutter : 컬럼간 간격(padding으로 들어감)

* antd Form의 onFinish는 e.preventDefault() 자동으로 적용되어 있음


5. 최적화

- 특정 컴포넌트에 props로 넘기는 "함수"는 useCallback 꼭 써주자

*** 스타일 리렌더링
-> 태그나 컴포넌트에 스타일링을 할 때 style={{}} 이런식을 객체를 주면 안된다. 왜냐면 객체는 항상 주소값이 다르므로 react에 의해 다르게 인식된다. 즉 리렌더링이 계속 된다. 성능에 영향 감

** 리액트에서 리렌더링 -> return 안에 있는 것이 모두 다시 리렌더링 되는 것이 아니라 변경된 부분만 리렌더링 되는 것이다. 잊지말것. 또한 리렌더링과 실제 화면 그리는 것은 다름 실제 화면 그리는 것은 뭔가 변경이 있을 때 가상 DOM => 실제 DOM 까지 그리는 것을 뜻함.

=> return 안에 있는 코드를 가상 DOM 이라고 생각하자.



6. 컴포넌트 설계

* 어떤 컴포넌트를 설계할 때 잘게 쪼개서 하는 것보단 일단 큼직하게 나눠서 코딩하는 것이 좋음
(가상의 컴포넌트 작성) -> 가상의 컴포넌트 작성 후 해당 컴포넌트를 상세히 작성.

***** presenter - container 구조는 presenter의 깊이가 깊을수록 props로 전달하는 부담이 큼. 일단 presenter 컴포넌트에서 모두 처리하는 식으로 하고 코드가 100 줄이 넘어가면 쪼개는 식으로

*** 비슷한데 데이터가 다른 컴포넌트는 ? -> props 갯수가 많아지면 아예 다른 컴포넌트로 하고 props가 별로 없으면 같은 컴포넌튼데 props로 분리하는 식으로 만들면 된다.(2~3 개 정도)



7. 커스텀 훅 사용하기

** form을 구성하는 전형적인 코드는 ex) id, setId, onChangeId등의 요소가 필요한데 input마다 모두 있으면 중복이 매우 많음.

-> 커스텀 useInput 훅

const useInput = (initialValue = null) => {
    const [value, setValue] = useState(initialValue);
    const handler = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    return [value, handler];
};

export default useInput;


8. checkbox
-> e.target.checkd 으로 다뤄야 함 + state value는 boolean으로.


8.5 비밀번호 및 약관동의 체크 스킬 다시 보기


9. next + redux 편하게 해줄 수 있는 next-redux-wrapper 라이브러리 사용.
* next에서는 기존 Provider, store 부분이 안들어간다 위 라이브러리가 알아서 해줌


10. 컴포넌트의 역할 -> 화면 그리기. 데이터까지(데이터 요청) 다루면 너무 일이 많다. 데이터는 리덕스에서 다루자


11. redux 불변성
{} === {} // false
const a = {}
const b = a;
a === b // true

return { => 객체를 새로 만듦 왜? : 변경 내역이 추적된다. prev와 next(새로만든 것) 객체가 있어야 비교를 할 수 있으니까. 직접 바꾸면 비교할 대상이 겹쳐버리기 때문에 사라진 것과 같다
    ...state, ==> 이거는 ? 메모리를 아끼기 위해 사용 (모든게 기록으로 남아있기 때문)
    name:action.data,
}

*
const nest = { a : "c"};
const prev = { b : nest};
const next = {...prev};

prev.b === next.b // true

prev === next // false

==> 참조는 그대로 유지. 메모리를 절약할 수 있음.

* next-redux-wrapper 필요




12. 배열안에 JSX 넣으려면 꼭 key 필요



13. redux-saga

-> redux-saga, next-redux-saga(withReduxSaga로 래핑) 패키지 필요

// saga effects

<rootSaga/>
* all
-> 배열을 받고 배열의 요소들을 한 번에 실행 시켜줌

* fork (비동기 함수 실행)
-> 함수를 실행

<watcher/>
* put
-> dispatch

* call (동기 함수 실행)
-> api 비동기 처리

<saga/>
* take
-> 액션 호출 대기


**** yield 를 쓰는 이유? -> 테스팅에 매우 용이함

take : 일회용
takeEvery : 모든 요청 받음
takeLastest : 가장 마지막 것만 실행


**** 보통은 takeLatest 쓴다.
여기서 주의할 것은 만약 클릭을 두 번해서 요청이 두 번 드갔으면 takeLatest의 경우
첫번째 응답이 사라짐. 따라서 응답 하나만 받을 수 있다. 하지만 요청은 사라지지 않아 두 개가 모두
전달 됨. 따라서 서버 측에서 이를 적절히 처리해야 한다.

* throttle을 사용한다면 요청 또한 적절히 없앨 수 있음.
yield throttle(..., addPost, 2000); -> 2초 안에 단 한 번만 요청 가능.

-> 근데 보통 특수한 경우 아니면 잘 안 씀(서버에서 처리하는 것이 좋다. - 중복된 데이터 처리)


* delay -> 서버 구축하기 전 비동기 테스트용으로 쓸만함.

```
