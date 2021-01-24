import React, { useEffect } from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Header from "./Header";
//import routes from "./routes";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import SurveyNew from "./pages/SurveyNew";

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(actions.fetchUser());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
          {/* {routes.map((route, index) => (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))} */}

          <Route exact path="/">
            {auth ? <Redirect to="/surveys" /> : Landing}
          </Route>
          <Route exact path="/surveys" component={Dashboard} />
          <Route exact path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
