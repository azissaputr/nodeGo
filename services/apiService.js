const axios = require("axios");
const CONFIG = require("../config/config");

class ApiService {
  async checkIp() {
    try {
      const response = await axios.get(CONFIG.CHECK_IP_URL, {
        timeout: CONFIG.API.TIMEOUT,
      });
      return response.data;
    } catch (error) {
      throw new Error(`IP check failed: ${error.message}`);
    }
  }

  async getUserInfo(token) {
    try {
      const response = await axios.get(`${CONFIG.API_BASE_URL}/api/user/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        timeout: CONFIG.API.TIMEOUT,
      });
      return response.data;
    } catch (error) {
      throw new Error(`User info failed: ${error.message}`);
    }
  }

  async doPing(token) {
    try {
      const response = await axios.post(
        `${CONFIG.API_BASE_URL}/api/user/nodes/ping`,
        { type: "extension" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          timeout: CONFIG.API.TIMEOUT,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(`Ping failed: ${error.message}`);
    }
  }
}

module.exports = new ApiService();
