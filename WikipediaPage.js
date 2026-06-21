class WikipediaPage {
    constructor (page) {
        this.page = page
        this.searchInput = page.locator('input[name="search"]').first();
        this.searchButton = page.locator('button:has-text("Найти")').first();
    }
    async open() {
        await this.page.goto('https://ru.wikipedia.org/');
    }
    async search(text) {
        await this.searchInput.fill(text);
        await this.searchButton.click();
    }
}

module.exports = WikipediaPage;