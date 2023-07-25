class topBtn extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
    html {
        scroll-behavior: smooth;
    }

    .to-top {
        background: white;
        position: fixed;
        bottom: 16px;
        right: 32px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        color: #1f1f1f;
        text-decoration: none;
        opacity: 0;
        pointer-events: none;
        transition: all .4s;
        border: 2px solid #1f1f1f;
    }

    .to-top.active {
        bottom: 32px;
        pointer-events: auto;
        opacity: 1;
    }

    a:hover {
        color: #588157;
    }
</style>
<a href="#top" class="to-top">
    <ion-icon name="chevron-up-outline"></ion-icon>
</a>
    `;
  }
}

customElements.define("top-btn", topBtn);
