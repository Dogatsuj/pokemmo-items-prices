export class Item {

    name: { [key: string]: string };
    description: { [key: string]: string };
    price: number;
    listings: number;
    quantity: number;

    constructor(
        name: { [key: string]: string },
        description: { [key: string]: string },
        price: number,
        listings: number,
        quantity: number
    ) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.listings = listings;
        this.quantity = quantity;
    }

    /**
     * @param lang Language code (e.g., "en", "fr")
     * @returns Localized name of the item. Falls back to English if the requested language is not available.
     */
    getName(lang: string): string {
        return this.name[lang] || this.name["en"] || "";
    }

    /**
     * @param lang Language code (e.g., "en", "fr")
     * @returns Localized description of the item. Falls back to English if the requested language is not available.
     */
    getDescription(lang: string): string {
        return this.description[lang] || this.description["en"] || "";
    }
}
