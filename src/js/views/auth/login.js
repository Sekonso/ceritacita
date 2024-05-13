import Auth from "../../network/auth";
import Session from "../../utils/session";

const Login = {
  async init() {
    this._initEventListener();
  },

  async _initEventListener() {
    const loginForm = document.querySelector("#loginForm");

    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      loginForm.classList.add("was-validated");

      if (loginForm.checkValidity()) {
        await this._sendLoginData();
      }
    });
  },

  async _sendLoginData() {
    const loginView = document.querySelector("login-view");

    try {
      loginView.renderMode = "loading";
      const data = this._getFormdata();

      const res = await Auth.login(data);

      console.log(res);
      loginView.renderMode = "success";
      Session.setUserToken(res.data.loginResult.token);
      Session.setUserName(res.data.loginResult.name);
      window.location.href = "/";
    } catch (error) {
      loginView.renderMode = "error";
      loginView.errorMessage = error;
    }
  },

  _getFormdata() {
    const emailInput = document.querySelector("#emailInput");
    const passwordInput = document.querySelector("#passwordInput");

    return {
      email: emailInput.value,
      password: passwordInput.value,
    };
  },
};

export default Login;
