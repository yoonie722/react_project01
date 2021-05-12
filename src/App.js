import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

//(실제로 BrowerRouter 사용률이 훨씬 높다. 다만 우리가 자료를 배포하고 있는 gh-pages에는 BrowserRouter를 사용하면 에러가 발생한다고 하니 HashRouter를 사용하겠다.

function App() {
  return (
		<HashRouter>
			<Navigation />
			<Route path="/" exact={true} component={Home} />
			<Route path="/about" component={About} />
			<Route path="/movie/" component={Detail} />
		</HashRouter>
	)
}
export default App;
