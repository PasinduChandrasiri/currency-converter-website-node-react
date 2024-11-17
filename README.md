# Currency Converter Website (Node.js + React)

Welcome to my **Currency Converter Website** project! This is a web application built using the **MERN stack** (React, Express, Node.js) with an integration of the **Open Exchange Rates API** for real-time currency data.

## 📌 Project Overview
This project is a fully functional currency converter tool that allows users to convert between different currencies using real-time exchange rates. It is built with a React frontend and a Node.js backend, with API calls to fetch the exchange rates.

## 🚀 Technologies Used

### Frontend:
- **React.js** – for building the dynamic user interface.
- **Tailwind CSS** – for responsive and customizable styling.
- **Axios** – for making HTTP requests to the backend.

### Backend:
- **Node.js** – JavaScript runtime for building the server-side application.
- **Express.js** – for handling the backend routes and API calls.
- **CORS** – to handle cross-origin resource sharing.
- **dotenv** – for managing environment variables securely.
- **Nodemon** – for automatically restarting the server during development.

### API:
- **Open Exchange Rates API** – provides real-time currency conversion rates. You can get an API key by registering at [Open Exchange Rates](https://openexchangerates.org/).

## 🌍 How to Run the Project Locally

### Prerequisites:
- Node.js (version 14 or higher)
- npm or yarn (for managing packages)

### Steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/PasinduChandrasiri/currency-converter-website-node-react.git
   ```

2. Navigate to the project directory:
   ```bash
   cd currency-converter-website-node-react
   ```

3. Install dependencies for the backend:
   ```bash
   cd server
   npm install
   ```

4. Create a `.env` file in the `server` directory and add your **Open Exchange Rates API key**:
   ```bash
   OPEN_EXCHANGE_API_KEY=your_api_key_here
   ```

5. Start the backend server:
   ```bash
   npm run dev
   ```

6. Navigate to the `client` directory and install frontend dependencies:
   ```bash
   cd ../client
   npm install
   ```

7. Start the React development server:
   ```bash
   npm start
   ```

8. Open your browser and go to `http://localhost:3000` to see the application in action!

## 🛠️ Features:
- Real-time currency conversion using the **Open Exchange Rates API**.
- Responsive frontend design with **Tailwind CSS**.
- User-friendly UI built with **React.js**.
- API testing and seamless integration with **Axios**.
- Error handling and data validation for smooth user experience.

## 🔧 Future Improvements:
- Add user authentication to save favorite currencies.
- Implement currency converter history.
- Improve error handling and add loading spinners for better UX.
- Allow users to switch between different languages or currencies for UI.

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments:
- **Open Exchange Rates** for providing free and reliable currency data.
- **React.js** and **Node.js** for making the development process fun and straightforward!

---

Feel free to reach out if you have any questions or suggestions!
