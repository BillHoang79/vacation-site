import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.menuIcon = $(".site-header__menu-icon");
        this.events();
    }

    events() {
        this.menuIcon.clickI(this.toggleTheMenu);
    }

    toggleTheMenu() {
        console.log("icon was clicked");
    }
}

export default MobileMenu;