import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainContainer from './Components/MainContainer/MainContainer.tsx';
import BlankPage from './Components/BlankPage/BlankPage.tsx';

function App() {
  return (
    <div className="App">
      {/* <MainContainer /> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route path="/vendors" component={MainContainer} />
          <Route path="/home" component={BlankPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
