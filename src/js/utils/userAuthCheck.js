import Session from "./session";
import UserToggle from "./userToggle";

const UserAuthCheck = {
  async checkLoginState() {
    const userToken = Session.getUserToken();
    const isUserSignedIn = Boolean(userToken);
    const isUserOnAuthPage = Boolean(this._isUserOnAuthPage());

    if (isUserSignedIn) {
      if (isUserOnAuthPage) {
        window.location.href = "/";
      }

      UserToggle.addHandler();
      return;
    }

    if (!isUserOnAuthPage) {
      window.location.href = "/auth/login.html";
    }
  },

  _isUserOnAuthPage() {
    const authPage = ["login.html", "register.html"];
    return authPage.filter((item) => window.location.pathname.endsWith(item)).length;
  },
};

export default UserAuthCheck;
