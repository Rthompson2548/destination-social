import React, {  useCallback, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace/UpdatePlace";
import LoginSignup from "./user/pages/Authenticate/LoginSignup/LoginSignup";
import SignUp from "./user/pages/Authenticate/SignUp/SignUp";
import { UserContext } from "./shared/user-context/user-context";


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  /** const callBackSyntax = useCallBack(function(params) => 
   * {action(s)}, 
   * [dependencies]) 
  */
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/places/:placeId">
          <UpdatePlace />
        </Route>
        <Route path="/places/new">
            <NewPlace />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
            <Users />
        </Route>
        <Route path="/login">
          <LoginSignup />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Redirect to="/login" />
      </Switch>
   )
    
  }

  return (
    <UserContext.Provider
      /** app will change user login status anytime `value` changes */
      value={{
      isLoggedIn: isLoggedIn,
      login: login,
      logout: logout
    }}>
      <Router>
      <MainNavigation />
      <main>

         {routes}
      </main>
    </Router>
    </UserContext.Provider>
  );
};
export default App;
