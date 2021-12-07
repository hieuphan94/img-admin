import API from "./api";

export const PageAPI = {
  getPage: async (url) => {
    try {
      return await API.get("/page/" + url);
    } catch (error) {
      console.log(error);
    }
  },
  createPage: async (data, token) => {
    try {
      return await API.post("/page/", data, {
        headers: {
          "x-auth-token": token,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },

  updatePage: async (id, data, token) => {
    try {
      return await API.put("/page/" + id, data, {
        headers: {
          "x-auth-token": token,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },

  getAllPages: async () => {
    try {
      return await API.get("/page/list");
    } catch (error) {
      console.log(error);
    }
  },
};
