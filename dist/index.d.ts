declare class Item {
    name: {
        [key: string]: string;
    };
    description: {
        [key: string]: string;
    };
    price: number;
    listings: number;
    quantity: number;
    constructor(name: {
        [key: string]: string;
    }, description: {
        [key: string]: string;
    }, price: number, listings: number, quantity: number);
    /**
     * @param lang Language code (e.g., "en", "fr")
     * @returns Localized name of the item. Falls back to English if the requested language is not available.
     */
    getName(lang: string): string;
    /**
     * @param lang Language code (e.g., "en", "fr")
     * @returns Localized description of the item. Falls back to English if the requested language is not available.
     */
    getDescription(lang: string): string;
}

declare class PokemmoItemsPrices {
    private items;
    /**
     * Updates the local items array with the latest API data.
     */
    refreshItems(): Promise<void>;
    /**
     * Fetches the data from the API if it haven't been done yet.
     * @returns A promise of an array containing the list of all the items
     */
    getAllItems(): Promise<Item[]>;
    /**
     * Retrieves the name and description of an item from its id.
     * @param item API item object
     * @returns An array containing the item's name and description.
     */
    private getItemInfos;
    /**
     * Retrieves the name of an item from its id.
     * @param id The item's id
     * @returns An object containing the item's names in different languages ("Unknown item" if the id isn't found in the items.json file)
     */
    private getItemName;
    /**
     * Retrieves the description of an item from its id.
     * @param id The item's id
     * @returns An object containing the item's description in different languages ("Unknown item" if the id isn't found in the items.json file)
     */
    private getItemDescription;
}

export { Item, PokemmoItemsPrices };
