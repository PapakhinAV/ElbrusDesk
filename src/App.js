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
import EditProfile from './Components/EditProfile';
import Wall from './Components/Wall/Wall';
import YanMap from './Components/Map/Map';
import Footer from './Components/Footer/Footer';
import AdminPage from './Components/AdminPage/AdminPage';

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
          <Route path="/Home/:id">
            <HomePage />
          </Route>
          <Route path="/SignUp">
            <RegPage />
          </Route>
          <Route path="/SignUp">
            <RegPage />
          </Route>
          <Route path="/AdminPage">
            <AdminPage />
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
          <Route exact path="/Edit/:id">
            <EditProfile />
          </Route>
          <Route path="/Map">
            <YanMap />
          </Route>
          <Route path="/postlist">
            <Wall />
          </Route>
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <Footer /> */}
    </>);
}

export default App;
