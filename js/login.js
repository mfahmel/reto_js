import { createNavbar } from "./navbar.js";

let token = localStorage.getItem("token");
token
  ? window.open(`../index.html`, "_self") : null;

document.getElementById("login-button").addEventListener("click", () => {
    localStorage.setItem("token", "kesesto");

    window.open("../index.html", "_self");
});


document.getElementById("nav-wrapper").innerHTML = createNavbar(token);
