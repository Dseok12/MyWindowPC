# React-Router-dom 학습

1. npm i react-router-dom 실행.
2. main.jsx에 import { BrowserRouter } from 'react-router-dom';을 실행.
3. main.jsx에 <App/>을 <BrowserRouter></BrowserRouter>로 감싼다. (아래와 같이 실행)
---
  ```javascript
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  ```
---
4. App.jsx에 import { Routes, Route } from "react-router-dom";을 실행.
5. <Routes></Routes>안에 <Route />를 넣는다. 단, <Routes></Routes>안에는 <Route />만 넣을 수 있다.
6. <Route />의 속성으로는 path와 element가 있는데, path는 말 그대로 경로를 설정해주는 놈이다. element는 path의 경로로 들어갔을 때 보여줘야할 컴포넌트를 넣는다. (아래의 예시)
---
```javascript
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/new' element={<New />} />
  <Route path='/diary' element={<Diary />} />
  <Route path='*' element={<Notfound />} />
</Routes>
```
---