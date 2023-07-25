class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<style>
.navbar-brand {
    font-size: 36px;
    color: #344e41;
}

.navbar-brand:hover {
    color: #588157;
    text-shadow: 2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3);
}

nav {
    background-color: #ccd5ae;
    font-weight: bold;
    font-size: 24px;
    border-bottom: 1px solid #588157;
}

.collapse ul {
    margin-right: 150px;
}

/* navbar option bottom line */
nav ul span {
    position: relative;
    font-size: 26px;
    color: #344e41;
    margin-left: 15px;
}

nav ul span::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 3px;
    background: #588157;
    border-radius: 5px;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .5s;
}

nav ul span:hover::after {
    transform: scaleX(1);
    transform-origin: left;
}

/* -------------------------- */

.login-btn {
    position: absolute;
    top: 12px;
    right: 5px;
    color: #fff;
    background-color: #344e41;
    font-size: 26px;
    font-weight: 800;
}

.login-btn:hover {
    color: #fff;
    background-color: #588157;
    box-shadow: 7px 7px 7px -5px #000000;
}

/* browser-width under 991px */
@media screen and (max-width: 991px) {

    .navbar-brand {
        position: relative;
        float: left;
        left: -8%;
    }

    /* navbar option bottom line */
    nav ul span {
        position: relative;
        font-size: 26px;
        color: #344e41;
    }

    nav ul span::after {
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 100%;
        height: 3px;
        background: #588157;
        border-radius: 5px;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform .5s;
    }

    nav ul span:hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }
}

</style>

    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <a class="navbar-brand mx-auto" href="index.html">Let's Camp</a>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link active" href="/Pricing.html"><span>Pricing</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/FAQ.html"><span>FAQs</span></a>
                        </li>
                        <li class="nav-item" id="nav-faq">
                            <a class="nav-link active" href="/Contact.html"><span>Contact</span></a>
                        </li>
                    </ul>
                </div>

                <a class="btn btn-lg login-btn" href="/Login.html">Join us</a>
            </div>
        </nav>
    </header>
`;
  }
}

customElements.define("header-component", Header);
