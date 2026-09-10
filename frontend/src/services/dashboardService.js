import api from "./api";
import { API_ENDPOINTS } from "../constants/api";

const dashboardService = {
  getDashboard: async () => {
    const response = await api.get(API_ENDPOINTS.DASHBOARD);
    return response.data;
  },
};

export default dashboardService;
