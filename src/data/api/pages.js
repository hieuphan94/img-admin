import API from "./api";

export const TourAPI = {
  getTour: async (url) => {
    try {
      return await API.get("/page/" + url);
    } catch (error) {
      console.log(error);
    }
  },
  getAllTour: async () => {
    try {
      return await API.get("/page/list");
    } catch (error) {
      console.log(error);
    }
  },
};
