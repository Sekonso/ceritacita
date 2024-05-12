import { html } from "lit";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";

class ToastMessage extends LitWithoutShadowDom {
  constructor() {
    super();
  }

  render() {
    return html`
      <div
        class="toast align-items-center text-bg-primary border-0"
        id="toastMessage"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="d-flex">
          <div class="toast-body">Hello, world! This is a toast message.</div>
          <button
            type="button"
            class="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
    `;
  }
}

customElements.define("toat-message", ToastMessage);
