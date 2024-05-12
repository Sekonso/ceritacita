import { html } from "lit";
import { msg, updateWhenLocaleChanges } from "@lit/localize";
import { allLocales } from "../../../generated/locale-codes";
import { getLocale, setLocaleFromUrl } from "../../localization";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";

class LanguageSelect extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="btn-group">
        <button
          type="button"
          class="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          ${msg(`Bahasa`)}
        </button>
        <ul class="dropdown-menu">
          ${allLocales.map((locale) => {
            return html`
              <li>
                <a class="dropdown-item" href="#" @click=${this._changedLocale}> ${locale} </a>
              </li>
            `;
          })}
        </ul>
      </div>
    `;
  }

  _changedLocale(event) {
    const newLocale = event.target.innerText;

    if (newLocale !== getLocale()) {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", newLocale);

      window.history.pushState(null, "", url.toString());
      setLocaleFromUrl();
    }
  }
}

customElements.define("language-select", LanguageSelect);
