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
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Route path="/places/:placeId" exact>
          <UpdatePlace />
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
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/login" exact>
          <LoginSignup />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Redirect to="/login" exact />
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
      {/* nav bar */}
      <MainNavigation />
        <main>
          {/* displays all components to be shown when user is logged in */}
         {routes}
        </main>
    </Router>
    </UserContext.Provider>
  );
};
export default App;
