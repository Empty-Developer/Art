# Art

Art is a full-stack marketplace application for buying and selling artwork. It connects artists who want to list and sell their pieces with buyers looking to discover and purchase art, providing the core functionality of a digital art marketplace in a single application.

## Overview

The platform is split into two independent parts that work together:

- A **backend** service responsible for business logic, data storage, and exposing an API that the client consumes.
- A **frontend** client responsible for the user-facing experience: browsing artwork, viewing listings, and handling the buying and selling flow.

This separation allows each part of the application to be developed, tested, and deployed independently.

## Technology Stack

### Backend

- **Node.js** as the JavaScript runtime powering the server.
- **Express** as the web framework used to build the REST API, handle routing, and manage middleware.

### Frontend

- **Vue** as the framework used to build the client-side user interface and manage component state and rendering.

### Tooling

- **Trunk** for coordinated linting and formatting checks across the codebase.
- **VS Code** workspace configuration included for a consistent development setup.

## Project Structure

```
Art/
  backend/     Node.js and Express API, business logic, and data layer
  frontend/    Vue application and client-side UI
  .trunk/      Linting and formatting configuration
  .vscode/     Editor configuration
  LICENSE
  README.md
```

## Core Functionality

- Listing artwork for sale, including details such as title, description, price, and images.
- Browsing and discovering available artwork.
- Viewing individual artwork listings in detail.
- Handling the purchase flow between buyers and sellers.

## Getting Started

### Prerequisites

- Node.js installed locally
- A package manager such as npm or yarn

### Backend Setup

```
cd backend
npm install
npm run start
```

### Frontend Setup

```
cd frontend
npm install
npm run dev
```

By default, the frontend will run in development mode and communicate with the backend API. Refer to the environment configuration in each folder for details on connecting the two services (API base URL, ports, and any required credentials).

## Contributing

Contributions are welcome. If you would like to make a change:

1. Fork the repository.
2. Create a new branch for your change.
3. Make your changes in the relevant `backend` or `frontend` folder.
4. Commit your changes with a clear message.
5. Open a pull request describing what was changed and why.

## License

This project is licensed under the MIT License. See `LICENSE` for details.
