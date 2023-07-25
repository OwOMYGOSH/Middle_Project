class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
        footer {
            position: absolute;
            background-color: #181818;
            height: auto;
            width: 100%;
            padding-top: 10px;
            color: #fff;
        }
        
        .footer-content {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            flex-direction: column;
            word-spacing: 2px;
        }
        
        .footer-content h3 {
            font-size: 2rem;
            font-weight: 400;
            text-transform: capitalize;
            line-height: 2rem;
        }
        
        .footer-content p {
            max-width: 500px;
            margin: 3px auto;
            font-size: 16px;
        }
        
        .socials {
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 5px 0;
        }
        
        .socials li {
            margin: 0 20px;
        }
        
        .socials li a {
            text-decoration: none;
            color: #fff;
            font-size: 1.5rem;
            transition: color .4s ease;
        }
        
        .socials li a.facebook:hover {
            color: 	#3b5998;
        }

        .socials li a.twitter:hover {
            color: #1da1f2;
        }
        
        .socials li a.youtube:hover {
            color: #ff0000;
        }
        
        .socials li a.instagram:hover {
            color: #c13584;
        }
        
        .socials li a.linkedin:hover {
            color: #0077b5;
        }

        .footer-bottom {
            background-color: #000;
            width: 100%;
            padding: 2px 0;
            text-align: center;
        }
        
        .footer-bottom p {
            top: 10px;
            position: relative;
            font-size: 14px;
            word-spacing: 3px;
            text-transform: capitalize;
        }
        
        .footer-bottom span {
            text-transform: uppercase;
            opacity: .6;
            font-weight: 200;
        }
        </style>
          
        <footer>
        <div class="footer-content">
            <h3>Let's Camp</h3>
            <p>Follow us on social media to get more information!</p>
            <ul class="socials">
                <li><a class="facebook" href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
                <li><a class="twitter" href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
                <li><a class="youtube" href="#"><ion-icon name="logo-youtube"></ion-icon></a></li>
                <li><a class="instagram" href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
                <li><a class="linkedin" href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>&copy;2023 Copyright Let's Camp. Designed by <span>OMYGOSH</span></p>
        </div>
        </footer>
        `;
    }
};

customElements.define('footer-component', Footer);