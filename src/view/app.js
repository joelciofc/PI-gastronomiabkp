import renderLoginPage from "./pages/login.js";
import renderRegisterPage from "./pages/register.js";

const app = document.querySelector('#root');

const res = await fetch('/interface-config');
const interfaceConfig = await res.json();

const tagLink = document.createElement('link');
tagLink.rel = 'stylesheet';
tagLink.href = interfaceConfig.urlComplete;
document.head.appendChild(tagLink);

app.replaceChildren(renderRegisterPage());