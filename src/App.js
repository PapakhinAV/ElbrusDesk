import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AuthFirstPage from "./Components/AuthFirstPage/AuthFirstPage"
import SignUp from "./Components/SignUp/SignUp"
import Header from './Components/Header/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <AuthFirstPage />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route >
            <Redirect to='/' />
          </Route>
        </Switch>
      </BrowserRouter>
    </>);
}

export default App;
