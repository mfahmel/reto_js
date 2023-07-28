let token = localStorage.getItem("token");
console.log(token);
token
  ? window.open(`../index.html`, "_self") : null;

document.getElementById("login-button").addEventListener("click", () => {
    localStorage.setItem("token", "kesesto");

    window.open("../index.html", "_self");
});