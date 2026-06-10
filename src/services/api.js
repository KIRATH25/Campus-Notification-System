import axios from "axios";

const BASE_URL =
  "http://localhost:5000";

export const getNotifications =
  async () => {
    try {
      const response =
        await axios.get(
          `${BASE_URL}/notifications`
        );

      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };