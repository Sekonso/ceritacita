// Import our custom CSS
import "../sass/main.scss";

// Import bootstrap
import * as bootstrap from "bootstrap";

// Import components
import "./components/index";

// Import pages logic{
import Dashboard from "./views/dashboard";
import Register from "./views/auth/register";
import Login from "./views/auth/login";
import Profile from "./views/pages/profile";
import Add from "./views/pages/add";

// Utilities
import "./utils/firebase";
import UserAuthCheck from "./utils/userAuthCheck";

const routes = {
  "/": Dashboard,
  "/auth/register.html": Register,
  "/auth/login.html": Login,
  "/pages/profile.html": Profile,
  "/pages/add.html": Add,
};

const detectRoute = () => routes[window.location.pathname];

const initPages = () => {
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");

  if (header && main && footer) {
    main.style.minHeight = `calc(100vh - ${header.clientHeight + footer.clientHeight}px)`;
  }
};

window.addEventListener("DOMContentLoaded", async () => {
  UserAuthCheck.checkLoginState();
  initPages();

  const route = detectRoute();
  route.init();
});
