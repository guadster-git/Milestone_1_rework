class MyNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<section id="navbar_sticky">
        <div class="position-relative">
            <div class="box">
            <nav class="d-flex justify-content-between py-4">
            <div class="d-flex ps-0">
            <a href="index.html"><img src="assets/pictures/CSN_Wortbildmarke_RZ.svg" alt=""
        class="banner_height img-fluid"></a>
    </div>
        <div class="d-flex justify-content-between text-uppercase " id="dropdown_enabler">
            <ul class="d-flex justify-content-between align-items-center" id="navbar_items">
                <li><h3 class="my-auto me-5 py-1 navbar_heading position-relative" id="conferencing"><a
                    href="conferencing.html">CSN <span class="font_bold">Conferencing</span></a></h3></li>
                <li><h3 class="my-auto me-5  py-1 navbar_heading position-relative"
                        id="online"><a
                    href="online-beratung.html">CSN <span class="font_bold">Online Beratung</span></a></h3>
                </li>
                <li><h3 class="font_bold my-auto py-1 navbar_heading position-relative" id="warum"><a
                    href="warum.html">Warum CSN</a></h3></li>
            </ul>
        </div>
        <div class="d-flex my-auto align-items-center text-uppercase" id="icon_section_navbar">
            <div class="d-flex flex-column  pe-5 icon">
                <div class="mx-auto icons_height icon_jump" >
                    <a href="Kontakt.html"><i data-feather="mail"></i></a>
                </div>
                <p class="mx-auto no_padding_bot font_navbar font_medium"><a href="Kontakt.html">Kontakt</a></p>
            </div>
            <div class="d-flex flex-column align-content-center pe-5 icon" id="suche">
                <div class="mx-auto icons_height icon_jump">
                    <i data-feather="search"></i>
                </div>
                <p class="mx-auto no_padding_bot font_navbar font_medium">Suche</p>
            </div>
            <div class="d-flex flex-column align-content-center icon">
                <div class="mx-auto icons_height icon_jump">
                    <i data-feather="globe"></i>
                </div>
                <p class="mx-auto no_padding_bot font_navbar font_medium">Deutsch</p>
            </div>
        </div>

        <!-- Mobile Menu Hamburger -->
        <div class="align-items-center" id="hamburger">
            <button id="hamburger_button"><img src="assets/pictures/hamburger.svg" alt=""></button>
        </div>
    </nav>
    </div>
        <div id="dropdown_bar">
            <div class="hide bg-white" id="dropdown_conferencing">
                <div class="box border-top d-flex justify-content-center py-3">
                    <h3 class="mx-5 dropdown_font"><a href="conferencing.html#produkte">Enthaltene Produkte</a></h3>
                    <h3 class="mx-5 dropdown_font"><a href="conferencing.html#bereiche">Einsatzbereiche</a></h3>
                    <h3 class="mx-5 dropdown_font"><a href="conferencing.html#branchen">Branchen</a></h3>
                    <h3 class="mx-5 dropdown_font"><a href="conferencing.html#highlights">Unsere Highlights</a></h3>
                    <h3 class="mx-5 dropdown_font"><a href="conferencing.html#features">Präsentations-Features</a></h3>
                </div>
            </div>
            <div class="hide bg-white" id="dropdown_online">
                <div class="box border-top d-flex justify-content-center py-3 ">
                    <h3 class="mx-5 dropdown_font"><a href="online-beratung.html#trend">Trend zur Realität</a></h3>
                    <h3 class="mx-5 dropdown_font"><a href="online-beratung.html#highlights">Unsere Highlights</a></h3>
                    <h3 class="mx-5 dropdown_font"><a href="online-beratung.html#features">Weitere Features</a></h3>
                    <h3 class="mx-5 dropdown_font"><a href="online-beratung.html#branchen">Branchen</a></h3>
                    <h3 class="mx-5 dropdown_font"><a href="online-beratung.html#sicherheit">Sicherheit</a></h3>
                </div>
            </div>
            <div class="hide bg-white" id="dropdown_warum">
                <div class="box border-top d-flex justify-content-center py-3">
                    <h3 class="mx-5 dropdown_font"><a href="warum.html#kriterien">Entscheidungskriterien</a></h3>
                    <h3 class="mx-5 dropdown_font"><a href="warum.html#sicherheit">Sicherheit & Service</a></h3>
                    <h3 class="mx-5 dropdown_font"><a href="warum.html#umwelt">Umwelt & Effizienz</a></h3>
                    <h3 class="mx-5 dropdown_font"><a href="warum.html#leitlinien">CSN Leitlinien</a></h3>
                </div>
            </div>
            <div class="hide bg-white" id="dropdown_suche">
                <div class="box border-top d-flex justify-content-end py-3 dropdown_font">
                    <div class="input-group search_bar w-25">
                        <input type="text" class="form-control" placeholder="Suche" aria-label="Recipient's username"
                               aria-describedby="basic-addon2">
                            <button class="search_button d-flex align-items-center"><img src="assets/pictures/search.svg"
                                                                                         alt=""></button>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </section>`
    }
}

customElements.define('my-navbar', MyNavbar);

class MyTopbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<section id="navbar" class="d-flex justify-content-end">
    <div class="bg-primary py-2 box_navbar_top">
        <div class="box-right d-flex justify-content-between box-right ps-lg-3 text-uppercase text-white">
            <div class="">
                <span class="font_navbar font-regular me-3">Haben wir Ihr Interesse geweckt?</span>
                <span class="font_navbar font_bold arrow_after">Kostenlos testen</span>
            </div>

            <div class="">
                <span class="font_navbar font-regular me-3">Bereits registriert?</span>
                <span class="font_navbar font_bold arrow_after">Login</span>
            </div>

        </div>
    </div>
</section>
`
    }
}

customElements.define('my-topbar', MyTopbar);

class MyCookie extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<div class="overlay" id="overlay">
    <div class="cookie position-fixed d-flex justify-content-between">
        <div class=" d-flex flex-column overflow-hidden justify-content-between font_medium">
            <div class="d-flex">
                <span>Wir verwenden Cookies, um unsere Website und unseren Service für Sie zu Optimieren.</span>
            </div>

            <div>
                <div class="form-check form-switch my-3 d-flex">
                    <input class="form-check-input shadow-none width_cookie me-3 my-auto" type="checkbox"
                           id="flexSwitchCheckChecked" checked>
                    <label class="form-check-label my-auto" for="flexSwitchCheckChecked">Funktionale Cookies</label>
                </div>
                <div class="form-check form-switch my-3 d-flex">
                    <input class="form-check-input shadow-none width_cookie me-3 my-auto" type="checkbox" checked>
                    <label class="form-check-label my-auto">Statistische Cookies</label>
                </div>
                <div class="form-check form-switch my-3 d-flex">
                    <input class="form-check-input shadow-none width_cookie me-3 my-auto" type="checkbox">
                    <label class="form-check-label my-auto">Marketing Cookies</label>
                </div>
            </div>
            <div class="d-flex flex-column">
                <button type="button" class="button_cookie accept_all my-3 text-uppercase" id="all_cookies">Ausgewählte
                    Cookies zulassen
                </button>
                <button type="button" class="button_cookie accept_functional text-uppercase" id="functional_cookies">Nur
                    funktionale Cookies zulassen
                </button>
            </div>
        </div>
    </div>

</div>
`
    }
}

customElements.define('my-cookie', MyCookie);


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<section class="bg-primary position-relative overflow-hidden">
    <div class="box py-5 my-5 ">
       
        <h4 class="text-white text-center font_medium" style="font-size: 30px;">Nehmen Sie Kontakt mit uns auf und
            sprechen Sie mit einem unserer Experten.</h4>
        <div class="row justify-content-between align-content-center d-flex text-white pt-5">
            <div class="col-12 col-lg-4 d-flex flex-column pt-3">
                <div class="height-contact d-flex justify-content-center">
                    <img src="assets/pictures/phone.svg" alt="" class="align-self-center">
                </div>
                <p class="text-center pt-3 footer_heading font_light">+49 (0) 211. 730 634 – 0</p>
                <img src="assets/pictures/line_white.png" alt="" class="align-self-center pt-2">
            </div>
            <div class="col-12 col-lg-4 d-flex flex-column pt-3">
                <div class="height-contact d-flex justify-content-center">
                    <img src="assets/pictures/contact.svg" alt="" class="align-self-center">
                </div>
                <p class="text-center pt-3 footer_heading font_light">Zum Kontaktformular</p>
                <img src="assets/pictures/line_white.png" alt="" class="align-self-center pt-2">
            </div>
            <div class="col-12 col-lg-4 d-flex flex-column pt-3">
                <div class="height-contact d-flex justify-content-center">
                    <img src="assets/pictures/mail.svg" alt="" class="align-self-center">
                </div>
                <p class="text-center pt-3 footer_heading font_light">info@csn-gmbh.de</p>
                <img src="assets/pictures/line_white.png" alt="" class="align-self-center pt-2">
            </div>
        </div>
    </div>
</section>

<!---Footer DONE --->

<section class="bg-secondary position-relative overflow-hidden">
    <img src="/assets/pictures/footer_globe.svg" alt="" class="footer_globe position-absolute">
    <div class="box position-relative" id="footer">
        <div class="row py-5 no_gutter_x ">
            <div class="col-md-3 col-sm-12 d-flex justify-content-start align-content-center  ">
                <img src="assets/pictures/CSN_Wortbildmarke_weiß_RZ.svg" alt="" class="align-self-start banner_height">
            </div>
            <div class="col-md-6 col-sm-12 d-flex justify-content-center align-content-center text-white my-auto  ">
                <span class="align-middle text-uppercase font_light" style="font-size: 16px;">© 2021 CSN Communication Service Network GmbH</span>
            </div>
            <div class="col-md-3 d-flex justify-content-between ">
                <button class="button blue_full_button">Kostenlos Testen</button>
                <div class="flex-column my-auto justify-content-end icon">
                    <div class="d-flex justify-content-center pb-2 icon_jump" style="color: white">
                        <i data-feather="globe"></i>
                    </div>
                    <span class="text-white no_padding_bot text-uppercase mx-auto font_medium font_navbar">Deutsch</span>
                </div>
            </div>
        </div>
        <div class="row py-5 top_border no_gutter_x">
            <div class="col-xl-3 col-lg-4 col-6 text-white ps-0">
                <p class="text-uppercase pb-2 font_bold primary">Csn Conferencing</p>
                <div class="font_light">
                    <p class="font_medium footer_list">Enthaltene Produkte</p>
                    <p class="font_light footer_list">Telefonkonferenzen</p>
                    <p class="font_light footer_list">Webinare & Online Training</p>
                    <p class="font_light footer_list">Webkonferenzen</p>
                    <p class="font_light footer_list">Videokonferenzen</p>
                    <p class="font_light footer_list">Operatorgestützte Konferenzen</p>
                </div>

                <div class="font_light pt-4">
                    <p class="font_medium footer_list">Einsatzbereiche</p>
                    <p class="font_light footer_list">Marketing & Vertrieb</p>
                    <p class="font_light footer_list">Schulung & Training</p>
                    <p class="font_light footer_list">Business-Konferenzen</p>
                    <p class="font_light footer_list">Investor Relations Konferenzen</p>
                    <p class="font_light footer_list">Recruiting</p>
                </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-6 text-white">
                <p class="text-uppercase pb-2 font_bold primary">Csn Online-Beratung</p>
                <div class="font_light">
                    <p class="font_medium footer_list">Produkt-Features</p>
                    <p class="font_light footer_list">Video-Beratung</p>
                    <p class="font_light footer_list">Text- und Videochat</p>
                    <p class="font_light footer_list">Digitale Unterschrift</p>
                    <p class="font_light footer_list">Dateifreigabe & Mediathek</p>
                    <p class="font_light footer_list">Umfragen</p>
                </div>

                <div class="font_light pt-4">
                    <p class="font_medium footer_list">Branchen</p>
                    <p class="font_light footer_list">Versicherungen & Makler</p>
                    <p class="font_light footer_list">Banken & Immobilien</p>
                    <p class="font_light footer_list">Einzelhandel / Onlineshops</p>
                    <p class="font_light footer_list">Gesundheitswesen</p>
                    <p class="font_light footer_list">Telekommunikation</p>
                </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-6 text-white">
                <p class="text-uppercase pb-2 font_bold primary">Warum CSN</p>
                <div class="font_light">
                    <p class="font_medium footer_list">Highlights</p>
                    <p class="font_light footer_list">20 Jahre Markterfahrung</p>
                    <p class="font_light footer_list">Modernste Webtechnologien</p>
                    <p class="font_light footer_list">Inhouse Kundenservice</p>
                    <p class="font_light footer_list">Kostenlose Schulung & Beratung</p>
                    <p class="font_light footer_list">Premium Operatorservicen</p>
                </div>

                <div class="font_light pt-4">
                    <p class="font_medium footer_list">Über uns</p>
                    <p class="font_light footer_list">Unsere Vision</p>
                    <p class="font_light footer_list">CSN Leitlinien</p>
                    <p class="font_light footer_list">Made and hosted in Germany</p>
                    <p class="font_light footer_list">zertifiziert und sicher</p>
                    <p class="font_light footer_list">DSGVO-, BDSG- und TKG-konform</p>
                </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-6 d-flex flex-column justify-content-between text-white mt-lg-5">
                <div>
                    <p class="text-uppercase primary pb-2 font_bold">Service Menü</p>
                    <div class="font_light">
                        <p class="font_light footer_list special_child"><a href="Impressum.html">Impressum</a></p>
                        <p class="font_light footer_list"><a href="Datenschutz.html">Datenschutzerklärung</a></p>
                        <p class="font_light footer_list">Haftungsausschluss</p>
                        <p class="font_light footer_list"><a href="AGB.html">Allgemeine Geschäftsbedingungen</a></p>
                        <p class="font_light footer_list"><a href="Kontakt.html">Kontakt</a></p>
                    </div>
                </div>
                <div class="mt-xl-0 mt-5">
                    <div class="font_light pb-3">
                        <p class="font_medium text-uppercase">Folgen Sie uns Bei</p>
                        <div class="row pe-5">
                            <div class="col-3 social_media_row">
                                <a href="#"><img src="assets/pictures/facebook_hover.svg" alt=""
                                                 class="social_media_hover"></a>
                                <img src="assets/pictures/facebook.png" alt="" class="social_media">
                            </div>
                            <div class="col-3 social_media_row">
                                <a href="#"><img src="assets/pictures/twitter_hover.svg" alt=""
                                                 class="social_media_hover"></a>
                                <img src="assets/pictures/twitter.png" alt="" class="social_media">
                            </div>
                            <div class="col-3 social_media_row">
                                <a href="#"><img src="assets/pictures/instagram_hover.svg" alt=""
                                                 class="social_media_hover"></a>
                                <img src="assets/pictures/instagram.png" alt="" class="social_media">
                            </div>
                            <div class="col-3 social_media_row">
                                <a href="#"><img src="assets/pictures/youtube_hover.svg" alt=""
                                                 class="social_media_hover"></a>
                                <img src="assets/pictures/youtube.png" alt="" class="social_media">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a href="#navbar" class="footer_anchor position-absolute"><img src="assets/pictures/to_top_arrow.svg"
                                                                                  alt=""></a>
</section>
`
    }
}

customElements.define('my-footer', MyFooter);

class MyMobileNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<section id="mobile-menu" class=" section_mobile_menu">
    <nav class="container_mobile_nav d-flex flex-row position-absolute" id="mobile_container">
        <div class="grey_sidebar pt-4 d-flex justify-content-center align-items-start">
            <button id="closing_button"><img src="assets/pictures/menu_close.svg" alt="" class="align-self-start">
            </button>
        </div>
        <div class="main_navigation_mobile">
            <div class="navigation_inner_box">
                <div class="d-flex justify-content-between my-4">
                    <div class="d-flex col-auto">
                        <div class="d-flex align-items-center">
                            <i data-feather="globe" class="me-2"></i>
                            <span class="font_medium">DE</span>
                        </div>
                    </div>

                    <div class="d-flex col-auto">
                        <div class="d-flex align-items-center">
                            <i data-feather="mail" class="me-2"></i>
                            <span class="font_medium">Kontakt</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mobile_search_container">
                <div class="navigation_inner_box d-flex w-100 py-4">
                    <div class="d-flex w-100 mobile_search_bar" style="height: 35px;">
                        <div class="mobile_search_input_container">
                            <input type="search" placeholder="Suche ..." class="mobile_search_input"
                                   id="mobile-search-input"/>
                        </div>
                        <div class="mobile_search_icon d-flex justify-content-end pe-3">
                            <button class="search_button d-flex align-items-center" id="mobile_search_button"><i
                                    data-feather="search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="navigation_inner_box py-3">
                <ul class="mobile_nav_items">
                    <li><a href="" class="font_bold">Startseite</a></li>
                    <li><a href="">CSN <span class="font_bold">Conferencing</span></a></li>
                    <li><a href="">CSN <span class="font_bold">Online Beratung</span></a></li>
                    <li><a href="" class="font_bold">Warum CSN</a></li>
                </ul>
            </div>
        </div>
    </nav>
</section>

`
    }
}

customElements.define('my-mobile_nav', MyMobileNavbar);