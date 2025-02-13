# NodeGo Bot

A Node.js automation tool for NodeGo service that helps manage automatic ping to maintain node uptime.

## Features

- Beautiful terminal UI using blessed and blessed-contrib
- Automatic ping at configurable intervals
- Multiple account support
- Error handling with retry mechanism
- Real-time status and log updates

## Prerequisites

- Node.js v14 or higher
- An active NodeGo account
- NodeGo browser extension installed

## Installation

1. Clone this repository

```bash
git clone https://codeberg.org/Galkurta/NodeGo-BOT.git
cd NodeGo-BOT
```

2. Install dependencies

```bash
npm install
```

## Getting Started

### 1. Register NodeGo Account

Sign up for [NodeGo](https://app.nodego.ai/r/NODED0DE837FE787)

### 2. Get Authentication Token

1. Install NodeGo browser extension
2. Right-click on the extension icon and select "Inspect popup"
3. Go to the Network tab in DevTools
4. Find the JWT token in the request headers
5. Copy the entire Bearer token

### 3. Configure the Bot

1. Edit `data.txt` file in the project root
2. Paste your authentication token in the file
3. You can add multiple tokens (one per line) if you have multiple accounts

Example `data.txt`:

```
eyJhbGciOiJIUzI1NiIs...token1...
eyJhbGciOiJIUzI1NiIs...token2...
```

### 4. Run the Bot

```bash
node main.js
```

## Configuration

You can modify various settings in `config/config.js`:

- `PING_INTERVAL`: Time between pings in milliseconds (default: 10000)
- `API.TIMEOUT`: API request timeout in milliseconds (default: 10000)
- `API.MAX_RETRIES`: Number of retry attempts for failed requests (default: 3)
- `API.RETRY_DELAY`: Delay between retries in milliseconds (default: 5000)

## Project Structure

```
project/
├── config/
│   └── config.js         # Configuration settings
├── services/
│   ├── apiService.js     # API interaction handlers
│   └── fileService.js    # File operations
├── ui/
│   ├── bannerBox.js      # UI banner component
│   ├── dashboard.js      # Status dashboard component
│   └── logBox.js         # Log display component
├── utils/
│   └── logger.js         # Logging utility
└── main.js              # Main application entry
```

## Controls

- `q` or `Esc` or `Ctrl+C`: Exit the application
- Mouse wheel: Scroll through logs

## Contributing

Feel free to open issues or submit pull requests.

## Disclaimer

This tool is for educational purposes only. Use at your own risk and make sure to comply with NodeGo's terms of service.
