import axios from "axios";

export const API = {
  methods: {
    async fetchData(url) {
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        console.error("API Fetch Error:", error);
        throw error;
      }
    },
  },
};
