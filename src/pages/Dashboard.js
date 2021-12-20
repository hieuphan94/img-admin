import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import { Footer } from "../components/base/Footer";
import { SideBar } from "../components/base/SideBar";
import { ErrorAccess } from "./ErrorAccess";
import { constants, urls } from "../utils/index";
import { CreatePage } from "./CreatePage";
import { CreateTour } from "./CreateTour";
import { AllPages } from "./AllPages";
import { PageAPI } from "../data/api/pages";
import { EditPage } from "./EditPage";
import { AllTours } from "./AllTours";

export const Dashboard = () => {
  const [token, setToken] = useState("");
  const [pages, setPages] = useState([]);
  const [tours, setTours] = useState([]);
  let { path } = useRouteMatch();
  useEffect(() => {
    let getToken = localStorage.getItem(constants.base.token);
    if (getToken !== null || getToken !== undefined) {
      setToken(getToken);
    }
    (async () => {
      const getPages = await PageAPI.getAllPages();
      setPages(getPages.data);
    })();
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
              {pages.map((e) => {
                return (
                  <Route key={e._id} path={urls.dashboard.path + "/" + e.slug}>
                    <EditPage key={e._id} item={e} />
                  </Route>
                );
              })}
              <Route path={urls.allPages.path}>
                <AllPages />
              </Route>
              <Route path={urls.allTours.path}>
                <AllTours />
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
