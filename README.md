# Test Task for VVDEV

This is a simple web application built using JavaScript and Express.js. The application serves a static HTML file for the home page, provides information on the `/about` route, and handles undefined routes with a custom message.

## Endpoints

### GET /

- **Description**: Serves the `index.html` file located in the `/public` directory.
- **Response**: The content of the `index.html` file.

### GET /about

- **Description**: Returns a simple text message.
- **Response**: Plain text.

### All other routes

- **Description**: Handles all undefined routes.
- **Response**: `"Страница не найдена"` (Page not found).

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/malymalcev/Test-Expressjs.git
   cd Test-Expressjs
   

2. Install dependencies:

   
   npm install
   

### Running the Application

Start the application using the following command:


npm start


The application will be running on http://localhost:3000.

### Directory Structure


├── public
│   └── index.html
├── app.js
├── package.json
├── package-lock.json
└── README.md
