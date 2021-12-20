import API from "./api";

export const TourAPI = {
  getTour: async (url) => {
    try {
      return await API.get("/tour/" + url);
    } catch (error) {
      console.log(error);
    }
  },
  createTour: async (data, token) => {
    try {
      return await API.post("/tour/", data, {
        headers: {
          "x-auth-token": token,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },

  updateTour: async (id, data, token) => {
    try {
      return await API.put("/tour/" + id, data, {
        headers: {
          "x-auth-token": token,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },

  getAllTours: async () => {
    try {
      return await API.get("/tour/list");
    } catch (error) {
      console.log(error);
    }
  },
};
