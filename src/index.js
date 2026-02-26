import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Initialize Firebase first - MUST be before other imports
import "./Utils/firebase";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./Store/appStore";
import Body from "./Components/Body/Body";
import AllProduct from "./Components/Products/AllProduct";
import LoginPage from "./Components/Login/loginPage";

const appRouter = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/products", element: <AllProduct /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
