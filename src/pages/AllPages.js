import React from "react";
import { useEffect, useState } from "react";
import { PageAPI } from "../data/api/pages";
// import Parser from "html-react-parser";
import { urls } from "../utils/index";
import { Link } from "react-router-dom";

export const AllPages = () => {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    (async () => {
      const getPages = await PageAPI.getAllPages();
      setPages(getPages.data);
    })();
  }, []);
  return (
    <div className="container mx-auto py-5 px-40">
      <h3 className="text-center text-2xl py-3">All Page</h3>
      {pages.map((e) => {
        return (
          <div
            className="flex justify-between items-center w-full shadow-md rounded-md p-4"
            key={e._id}
          >
            <h3>{e.title}</h3>
            <button className="bg-main p-2 rounded-md text-white">
              <Link to={urls.dashboard.path + "/" + e.slug}>Edit</Link>
            </button>
          </div>
        );
      })}
    </div>
  );
};
