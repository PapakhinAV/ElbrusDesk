import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AuthFirstPage from "./Components/AuthFirstPage/AuthFirstPage"
import SignUp from "./Components/SignUp/SignUp"
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import Project from './Components/Project/Project';
import TechNewsPage from './Components/TechNewsPage/TechNewsPage';
import GroupsList from './Components/GroupsList';
import UsersListInGroup from './Components/UsersListInGroup';



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
          <Route path="/TechNews">
            <TechNewsPage />
          </Route>
          <Route path="/Project">
            <Project />
          </Route>
          <Route path="/groupslist">
            <GroupsList />
          </Route>
          <Route path="/students_list_in_group/:id">
            <UsersListInGroup />
          </Route>
          <Route path="/Home/:id">
            <HomePage />
          </Route>
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>);
}

export default App;
