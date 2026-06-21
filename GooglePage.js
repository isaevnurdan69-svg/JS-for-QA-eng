class GooglePage {
    constructor(page) {
        this.page = page;
        this.searchInput = page.locator('textarea[name="q"]');
        this.searchButton = page.locator('input[name="btnK"]').first();
    }

    async open() {
        await this.page.goto('https://google.com/');
    }

    async search(text) {
        await this.searchInput.fill(text);
        await this.searchButton.click();
    }
}

module.exports = GooglePage;