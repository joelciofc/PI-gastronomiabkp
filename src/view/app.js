import renderLoginPage from "./pages/login.js";

const app = document.querySelector('#root');
app.replaceChildren(renderLoginPage());