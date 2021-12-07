import React from "react";
import { useEffect, useState } from "react";
import { PageAPI } from "../data/api/pages";

export const AllPages = () => {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    (async () => {
      const getPages = await PageAPI.getAllPages();
      console.log(getPages.data);
      setPages(getPages.data);
    })();
  }, []);
  return (
    <div>
      {pages.map((e) => {
        return (
          <div key={e._id}>
            <h3>{e.title}</h3>
          </div>
        );
      })}
    </div>
  );
};
