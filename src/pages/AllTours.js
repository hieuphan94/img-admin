import React from "react";
import { useEffect, useState } from "react";
import { TourAPI } from "../data/api/tours";
import { urls } from "../utils/index";
import { Link } from "react-router-dom";

export const AllTours = () => {
  const imgTravelUrl = "http://imagetravel.vn/";
  const [tours, setTours] = useState([]);
  useEffect(() => {
    (async () => {
      const getTours = await TourAPI.getAllTours();
      setTours(getTours.data);
    })();
  }, []);
  return (
    <div className="container mx-auto py-5 px-40">
      <h3 className="text-center text-2xl py-3">All Tours</h3>
      {tours.map((e) => {
        return (
          <div
            className="flex justify-around items-center w-full shadow-md rounded-md p-4"
            key={e._id}
          >
            <h3>{e.title}</h3>
            <h3>{e.category}</h3>
            <button className="bg-main p-2 rounded-md text-white">
              <a href={imgTravelUrl + e.slug}>View</a>
            </button>
          </div>
        );
      })}
    </div>
  );
};
