import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainContainer from './Components/MainContainer/MainContainer.tsx';
import BlankPage from './Components/BlankPage/BlankPage.tsx';
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainContainer} />
            <Route path="/vendors" component={MainContainer} />
            <Route path="/home" component={BlankPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
