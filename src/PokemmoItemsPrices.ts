import axios from "axios";
import { Item } from "./models/Item.js";
import itemsData from './data/items.json' with { type: "json" };

const BASE_URL = "https://apis.fiereu.de/pokemmoprices/v1";


export class PokemmoItemsPrices {

    private items: Item[] = [];

    /**
     * Updates the local items array with the latest API data.
     */
    async refreshItems() {
        const response = await axios.get<Item[]>(`${BASE_URL}/items`);
        response.data.forEach((item: any) => {
            const itemInfos = this.getItemInfos(item);
            this.items.push(new Item(itemInfos[0], itemInfos[1], item.price, item.listings, item.quantity))
        });
    }

    /**
     * Fetches the data from the API if it haven't been done yet.
     * @returns A promise of an array containing the list of all the items
     */
    async getAllItems(): Promise<Item[]> {
        if (this.items.length == 0) {
            await this.refreshItems()
        }
        return this.items;
    }

    /**
     * Retrieves the name and description of an item from its id.
     * @param item API item object
     * @returns An array containing the item's name and description.
     */
    private getItemInfos(item: any): { [key: string]: string }[] {
        const itemName: { [key: string]: string } = this.getItemName(item.item_id);
        const itemDescription: { [key: string]: string } = this.getItemDescription(item.item_id);
        return [itemName, itemDescription]
    }

    /**
     * Retrieves the name of an item from its id.
     * @param id The item's id
     * @returns An object containing the item's names in different languages ("Unknown item" if the id isn't found in the items.json file)
     */
    private getItemName(id: number): { [key: string]: string } {
        const item = (itemsData as { [key: string]: any })[id.toString()];
        const dummy = {
            "en": "Unknown item",
            "cn": "Unknown item",
            "de": "Unknown item",
            "fr": "Unknown item",
            "it": "Unknown item",
            "es": "Unknown item",
            "ja": "Unknown item",
            "tw": "Unknown item"
        }
        if (!item) return dummy

        return item.name;
    }

    /**
     * Retrieves the description of an item from its id.
     * @param id The item's id
     * @returns An object containing the item's description in different languages ("Unknown item" if the id isn't found in the items.json file)
     */
    private getItemDescription(id: number): { [key: string]: string } {
        const item = (itemsData as { [key: string]: any })[id.toString()];
        const dummy = {
            "en": "Unknown item",
            "cn": "Unknown item",
            "de": "Unknown item",
            "fr": "Unknown item",
            "it": "Unknown item",
            "es": "Unknown item",
            "ja": "Unknown item",
            "tw": "Unknown item"
        }
        if (!item) return dummy
        return item.description;
    }

}
