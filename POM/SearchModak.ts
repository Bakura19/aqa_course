import { BasePage } from "./BasePage";

export class SearchModal extends BasePage {
    constructor(page) {
        super(page)
    }

    Containers = {
        MainContainer: this.page.locator('[class*="Search-Modal"]')
    };

    InputFields = {
        SearchDocs: this.Containers.MainContainer.locator('[id="docsearch-input"]')
    }
    
}