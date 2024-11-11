# Thrive Website

Marketing website for Thrive Point Group, featuring our consulting services, venture investments, and team information.

## Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

## Deployment

Build and start:
```bash
npm run build
npm start
```

Or using Docker:
```bash
docker build -t thrive-site .
docker run -p 3000:3000 thrive-site
```

## Pages

- `/` - Homepage
- `/consulting` - Consulting services
- `/ventures` - Venture investments
- `/about` - Team and company information
- `/projects` - Projects built by thrive