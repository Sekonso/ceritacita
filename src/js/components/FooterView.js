import { LitElement, html, css } from "lit";

class FooterView extends LitElement {
  constructor() {
    super();
  }

  static styles = css`
    :host {
      text-align: center;
    }

    a {
      display: block;
      text-decoration: none;
      color: #6c757d;
    }
    a:hover {
      color: black;
    }

    p {
      padding-top: 1rem;
      color: #6c757d;
      border-top: 1px solid #6c757d;
    }
  `;

  render() {
    return html`
      <a href="https://github.com/Sekonso" target="_blank">Github/Sekonso</a>
      <p>© 2024 Dicoding, Belajar tools front-end intermediate</p>
    `;
  }
}

customElements.define("footer-view", FooterView);
