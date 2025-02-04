# Thrive Landing

A marketing website for Thrive Point Group—showcasing our consulting services, venture investments, and team information.

## Overview

Thrive Website is designed to give visitors an engaging introduction to Thrive Point Group. The site highlights our areas of expertise, including:

- **Consulting & Advisory:** Learn about our strategic advisory and embedded CTO services.
- **Companies:** Discover our portfolio companies and projects.
- **Fund:** Explore our investment philosophy and current portfolio.
- **About:** Get to know our founder and team background.

Built with modern technologies like Next.js and Tailwind CSS, the site is optimized for performance, SEO, and responsiveness across devices.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/thrive-website.git
   cd thrive-website
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the Development Server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open your browser at [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

### Production Build

1. **Build the Project:**

   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Start the Production Server:**

   ```bash
   npm start
   # or
   yarn start
   ```

### Using Docker

You can also deploy the site with Docker:

```bash
docker build -t thrive-website .
docker run -p 3000:3000 thrive-website
```

## Pages

- **/**: Home – A brief introduction to Thrive.
- **/about**: About – Background information on our founder and team.
- **/consulting-advisory**: Consulting & Advisory – Details on our consulting services.
- **/companies**: Companies – Showcases our portfolio companies and projects.
- **/fund**: Fund – Information about our investment fund and portfolio.

## Technologies Used

- **Next.js:** React framework for server-rendered and static websites.
- **React:** For building interactive user interfaces.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
- **Lucide React:** Icon library for modern, scalable icons.
- **Docker:** Containerization for easy deployment and scalability.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For inquiries or more information, please reach out via email at [carl@thrivepointgroup.com](mailto:carl@thrivepointgroup.com).