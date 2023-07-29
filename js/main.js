import { createNavbar } from "./navbar.js";

let token = localStorage.getItem("token");
!token
  ? window.open(`../views/login.html`, "_self") : null;




document.getElementById("nav-wrapper").innerHTML = createNavbar(token);