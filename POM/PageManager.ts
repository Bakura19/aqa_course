import { Page } from "@playwright/test";
import { NavigationMenu } from "./NavigationMenu";
import { SearchModal } from "./SearchModak";

export class PageManager {
    page: Page;
    navigationMenu;
    searchModal;

    constructor(page) {
        this.page = page;
        this.navigationMenu = new NavigationMenu(page);
        this.searchModal = new SearchModal(page);
    }
}