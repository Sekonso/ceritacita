import { LitElement, html, css } from "lit";

class ProfileView extends LitElement {
  constructor() {
    super();
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }

    h1,
    p {
      text-align: center;
      max-width: 680px;
      line-height: 2;
    }

    img {
      height: 125px;
      width: 125px;
      border: 5px solid #007bff;
      border-radius: 50%;
    }
  `;

  render() {
    return html`
      <h1>Profil Pengembang</h1>
      <img src="https://avatars.githubusercontent.com/u/84219085?v=4" alt="Dev profile image" />
      <p>
        Nama saya Adriansyah, saya adalah seorang mahasiswa Teknik Informatika di Universitas
        Pamulang. Pada proyek ini, saya membuat aplikasi website yang bernama "CeritaCita" untuk
        berbagi cerita antar pengguna. Aplikasi ini dibuat untuk menyelesaikan salah satu syarat
        untuk lulus dari kelas Dicoding "Belajar tools front-end intermediate"
      </p>
    `;
  }
}

customElements.define("profile-view", ProfileView);
