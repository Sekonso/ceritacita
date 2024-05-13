import Auth from "../../network/auth";

const Register = {
  async init() {
    this._initEventListener();
  },

  async _initEventListener() {
    const registerForm = document.querySelector("#registerForm");

    registerForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      registerForm.classList.add("was-validated");

      if (registerForm.checkValidity()) {
        await this._sendRegisterData();
      }
    });
  },

  async _sendRegisterData() {
    const registerView = document.querySelector("register-view");

    try {
      registerView.renderMode = "loading";
      const data = this._getFormdata();

      const res = await Auth.register(data);

      console.log(res);
      registerView.renderMode = "success";

      window.location.href = "/auth/login.html";
    } catch (error) {
      console.error(error);
      registerView.renderMode = "error";
      registerView.errorMessage = error;
    }
  },

  _getFormdata() {
    const nameInput = document.querySelector("#nameInput");
    const emailInput = document.querySelector("#emailInput");
    const passwordInput = document.querySelector("#passwordInput");

    return {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };
  },
};

export default Register;
