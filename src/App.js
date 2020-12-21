import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AuthFirstPage from "./Components/AuthFirstPage/AuthFirstPage"

import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import Project from './Components/Project/Project';
import TechNewsPage from './Components/TechNewsPage/TechNewsPage';
import GroupsList from './Components/GroupsList';
import UsersListInGroup from './Components/UsersListInGroup';
import RegPage from './Components/RegPage/RegPage';

import EditProfile from './Components/EditProfile/Profile';
import YanMap from './Components/Map/Map';
import Footer from './Components/Footer/Footer';
// import Footer from './Components/Footer/Footer';



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
            <RegPage />
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
          <Route path="/students_list_in_group">
            <UsersListInGroup />
          </Route>
          <Route path="/Home">
            <HomePage />
          </Route>
          <Route path="/Edit">
            <EditProfile />
          </Route>
          <Route path="/Map">
            <YanMap />
          </Route>
          {/* <Route path="/">
            <Redirect to="/" />
          </Route> */}
        </Switch>
      </BrowserRouter>
      {/* <Footer /> */}
    </>);
}

export default App;
