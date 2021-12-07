import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { Footer } from "../components/base/Footer";
import { SideBar } from "../components/base/SideBar";
import { ErrorAccess } from "./ErrorAccess";
import { constants, urls } from "../utils/index";
import { CreatePage } from "./CreatePage";
import { CreateTour } from "./CreateTour";

export const Dashboard = () => {
  const [token, setToken] = useState("");
  let { path, url } = useRouteMatch();
  console.log(path);
  useEffect(() => {
    let getToken = localStorage.getItem(constants.base.token);
    if (getToken !== null || getToken !== undefined) {
      setToken(getToken);
    }
  }, []);
  if (token !== null && token !== undefined) {
    return (
      <div className="w-full">
        <div className="main flex">
          <SideBar />
          <div className="container mx-auto">
            <h3 className="p-3 bg-black text-white">HEADER</h3>
            <Switch>
              <Route exact path={path}></Route>
              <Route path={urls.createPage.path}>
                <CreatePage />
              </Route>
              <Route path={urls.createTour.path}>
                <CreateTour />
              </Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    return <ErrorAccess />;
  }
};
