import React, { useCallback, useState } from "react";
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
import Authenticate from "./user/pages/Authenticate/Authenticate/Authenticate";
import SignUp from "./user/pages/Authenticate/SignUp/SignUp";
import { UserContext } from "./shared/context/user-context/user-context";

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
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/login">
            <Authenticate />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/:userId/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/places/new">
            <NewPlace />
          </Route>
          <Route path="/places/:placeId">
            <UpdatePlace />
          </Route>

          {/* redirects back to home page when users adds anything after "/" */}
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
    </UserContext.Provider>
  );
};
export default App;
