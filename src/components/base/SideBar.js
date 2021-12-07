import React from "react";
import { Link } from "react-router-dom";
import { constants, urls } from "../../utils/index";
import { useHistory } from "react-router-dom";

export const SideBar = () => {
  let history = useHistory();
  const handleLogOut = () => {
    localStorage.removeItem(constants.base.token);
    history.push(urls.login.path);
  };
  return (
    <div className="mx-auto w-56 bg-main-superDark h-screen">
      <div className="welcome bg-white hover:bg-black">
        <h3 className="p-3">
          <Link to={urls.dashboard.path} className="text-white">
            <img src={urls.imgLogo.path} alt={urls.imgLogo.title} />
          </Link>
        </h3>
      </div>
      <nav>
        {/* PAGE */}
        <ul className="nav-pages bg-main-light">
          <li className="p-3 hover:bg-main-dark">
            <Link to={urls.allPages.path}>All Pages</Link>
          </li>
          <li className="p-3 hover:bg-main-dark">
            <Link to={urls.createPage.path}>Create Page</Link>
          </li>
        </ul>
        {/* TOUR */}
        <ul className="nav-tours bg-main">
          <li className="p-3 hover:bg-main-dark">
            <Link to={urls.allTours.path}>All Tour</Link>
          </li>
          <li className="p-3 hover:bg-main-dark">
            <Link to={urls.createTour.path}>Create Tour</Link>
          </li>
        </ul>
        {/* MEDIA */}
        <ul className="nav-media bg-main-light">
          <li className="p-3">
            <a href="/">Media</a>
          </li>
        </ul>
        <button
          className="text-white bg-black w-full p-3 text-left"
          onClick={handleLogOut}
        >
          {urls.login.titleLogOut}
        </button>
      </nav>
    </div>
  );
};
