import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Transactions from "./pages/transactions";
import Services from "./pages/services";
import About from "./pages/about";
import Profile from "./pages/profile";
import Freelancer from "./pages/freelancer";
import CategoryDetail from "./pages/CategoryDetail";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Signin /> },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/transactions",
    element: (
      <PrivateRoute>
        <Transactions />
      </PrivateRoute>
    ),
  },
  {
    path: "/about",
    element: (
      <PrivateRoute>
        <About />
      </PrivateRoute>
    ),
  },
  {
    path: "/services",
    element: (
      <PrivateRoute>
        <Services />
      </PrivateRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
  {
    path: "/freelancer/:freelancerId",
    element: (
      <PrivateRoute>
        <Freelancer />
      </PrivateRoute>
    ),
  },
]);
