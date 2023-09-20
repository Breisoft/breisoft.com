# Breisoft.com - Your Premier Coding Agency

Welcome to the official repository for breisoft.com! Our platform, powered by a React frontend and a Django backend, showcases the capabilities and accomplishments of our coding agency.

## Features

- **Landing Page**: The first touchpoint for our visitors, providing a quick overview of what we offer.
- **About Us Page**: Dive deep into our history, values, and the team that makes everything possible.
- **Live Chat**: Need to get in touch? Use our live chat powered by Tidio for real-time assistance.
- **Portfolio Page**: Explore our body of work. With interactive code widgets, you can view and interact with our portfolio in real-time.
- **Django Backend**: Ensures smooth loading of portfolios and other dynamic content, providing a seamless experience.

## Technology Stack

- **React**: For our frontend rendering and interactions.
- **Django**: Backend framework to manage data and APIs.
- **Nginx**: Used as a reverse proxy to route requests. Routes `/` to React and `/api/*` to Django.
- **Docker**: Ensures consistent environment and deployments.

## Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/breisoft.com.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd breisoft.com
   ```

3. **Build the Docker containers**:

   ```bash
   docker-compose build
   ```

4. **Run the Docker containers**:
   ```bash
   docker-compose up
   ```

> Note: The above Docker commands assume you have Docker and Docker Compose installed on your machine.

## Contributing

We appreciate all contributions. Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
