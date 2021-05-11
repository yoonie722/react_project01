import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//<App /> 은 컴포넌트(component)이다.
//컴포넌트는 html을 반환하는 함수다.
//javscript와 html 사이의 이러한 조합을 JSX라고 한다.
//jsx라는 것은 React에서만 쓰이는 유일한 개념이다.