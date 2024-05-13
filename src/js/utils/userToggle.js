import Session from "./session";

const UserToggle = {
  addHandler() {
    document.querySelector("user-toggler").username = Session.getUserName();

    document.querySelector("#logoutBtn").addEventListener("click", () => {
      Session.destroyUserName();
      Session.destroyUserToken();
      window.location.href = "/auth/login.html";
    });
  },
};

export default UserToggle;
