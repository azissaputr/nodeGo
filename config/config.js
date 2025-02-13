const CONFIG = {
  API_BASE_URL: "https://nodego.ai",
  CHECK_IP_URL: "https://api.bigdatacloud.net/data/client-ip",
  PING_INTERVAL: 10000,
  UI: {
    GRID: {
      ROWS: 8,
      COLS: 12,
    },
    TABLE: {
      COLUMN_WIDTH: [20, 15, 15, 20, 40],
    },
  },
  API: {
    TIMEOUT: 10000,
    MAX_RETRIES: 3,
    RETRY_DELAY: 5000,
  },
};

module.exports = CONFIG;
