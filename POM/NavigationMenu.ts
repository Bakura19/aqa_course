import { BasePage } from "./BasePage";

export class NavigationMenu extends BasePage {
    constructor(page) {
        super(page)
    }

    Containers = {
        MainContainer: this.page.locator('[class*="navbar navbar"]')
    };

    Buttons = {
        Playwright: this.Containers.MainContainer.locator('"Playwright"'),
        Docs: this.Containers.MainContainer.locator('"Docs"'),
        API: this.Containers.MainContainer.locator('"API"'),
        Community: this.Containers.MainContainer.locator('"Community"'),

    };

    Dropdown = {
        NodeJs: this.Containers.MainContainer.locator('"Node.js"')
    };

    InputFields = {
        Search: this.Containers.MainContainer.locator('"Search"')
    };
    
}