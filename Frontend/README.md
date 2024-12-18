# UberSatyajit Frontend
This project is the frontend for the UberSatyajit application, built using React and Vite. It provides a user-friendly interface for both users and captains to interact with the Uber service.
## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)
## Features
- User authentication (login and signup)
- Captain registration and login
- Ride management for users and captains
## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **Tailwind CSS**: A utility-first CSS framework for styling.
## Project Structure
```bash
yourproject/
├── src/                     # Source files
│   ├── components/          # Reusable components
│   ├── pages/               # Page components
│   ├── App.jsx              # Main application component
│   └── index.js             # Entry point
├── public/                  # Static files
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation
```

## File Descriptions

### `public/index.html`
- **Purpose**: The main HTML file that serves as the entry point for the application.
- **Key Features**:
  - Contains the root div where the React app is rendered.
  - Links to the main CSS and JavaScript files.

### `src/index.css`
- **Purpose**: Contains global styles for the application.
- **Key Features**:
  - Uses Tailwind CSS directives to include base styles, components, and utilities.

### `src/main.jsx`
- **Purpose**: The entry point of the application where React is rendered.
- **Key Features**:
  - Wraps the application in context providers for user and captain data.
  - Sets up routing with `BrowserRouter`.

### `src/App.jsx`
- **Purpose**: The root component that sets up routing and global state.
- **Key Features**:
  - Defines routes for different pages (e.g., Home, User Login, Captain Login).
  - Uses `UserProtectWrapper` and `CaptainProtectWrapper` for protected routes.

### `src/components/`
- **Purpose**: Contains reusable React components.
- **Key Components**:
  - `Button.jsx`: A customizable button component.
  - `Header.jsx`: Displays the header of the application with navigation links.
  - `ConfirmRide.jsx`: Component for confirming a ride.
  - `FinishRide.jsx`: Component for finishing a ride.
  - `LocationSearchPanel.jsx`: Displays a list of locations for the user to select.
  - `VehiclePanel.jsx`: Allows users to choose a vehicle for their ride.
  - `WaitingForDriver.jsx`: Displays a message while waiting for the driver.
  - `RidePopUp.jsx`: Shows a popup for new ride notifications.

### `src/context/`
- **Purpose**: Contains context files for managing global state.
- **Key Files**:
  - `UserContext.jsx`: Provides context for managing user-related data.
  - `CaptainContext.jsx`: Provides context for managing captain-related data.

### `src/pages/`
- **Purpose**: Contains page components for different routes.
- **Key Pages**:
  - `Home.jsx`: The main home page of the application.
  - `UserLogin.jsx`: The login page for users.
  - `UserSignup.jsx`: The signup page for users.
  - `CaptainLogin.jsx`: The login page for captains.
  - `CaptainSignup.jsx`: The signup page for captains.
  - `CaptainHome.jsx`: The home page for captains.
  - `Riding.jsx`: Displays ride details for users.
  - `CaptainRiding.jsx`: Displays ride details for captains.


### Description of Key Files and Folders

- **public/**: Contains static files that are served directly to the client.
  - `index.html`: The main HTML file that serves as the entry point for the application.

- **src/**: Contains all the source code for the application.
  - **components/**: Contains reusable React components.
    - `CaptainDetails.jsx`: Displays information about the captain.
    - `ConfirmRide.jsx`: Component for confirming a ride.
    - `FinishRide.jsx`: Component for completing a ride.
  - **context/**: Contains context files for managing global state.
    - `CaptainContext.jsx`: Provides context for managing captain-related data.
    - `UserContext.jsx`: Provides context for managing user-related data.
  - **pages/**: Contains page components for different routes.
    - `Home.jsx`: The main home page of the application.
    - `UserLogin.jsx`: The login page for users.
  - `App.jsx`: The root component that sets up routing and context providers.
  - `index.css`: Contains global styles for the application.
  - `main.jsx`: The entry point of the application where React is rendered.

- **package.json**: Contains project metadata, scripts, and dependencies.

- **tailwind.config.js**: Configuration file for Tailwind CSS.

- **vite.config.js**: Configuration file for Vite, the build tool used in this project.

---

This format provides a clear and organized way to present the project structure and file descriptions in your `README.md`. Adjust the descriptions as necessary to fit your specific project details!

---


## Final Answer





This project is the frontend for the UberSatyajit application, built using React and Vite. It provides a user-friendly interface for both users and captains to interact with the Uber service.



## Features

- User authentication (login and signup)
- Captain registration and login
- Ride management for users and captains
- Responsive design with Tailwind CSS
- Context API for state management
- API integration for user and captain functionalities



## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SatyajitShinde0333/Uber_OG.git
   cd Uber_OG/Frontend