# Pokemmo Items Prices

A TypeScript library that fetches item market data from PokeMMO's GTL.
It uses the [Fiereu's](https://fiereu.de/) API for live market data and is inspired by [PokemmoHub](https://github.com/PokeMMO-Tools/pokemmo-hub) for retrieving item information.


# How to use

Instanciate a **PokemmoItemsPrices** object. You can then call its **getAllItems()** function that returns you a promise of a list of **Item** objects.

Note : The API isn't called each time you call the **getAllItems()** function. To refresh market data, use the **refreshItems()** function.

Example :
```js
const prices = new PokemmoItemsPrices();
  const items = prices.getAllItems().then((items) => {
      console.log(items.length);
      console.log(items[0]);
  });
```
result :
```bash
1341
Item {
  name: {
    en: 'Orange Mail',
    cn: '橙色邮件',
    de: 'Orange Mail',
    fr: 'Orange Mail',
    it: 'Orange Mail',
    es: 'Orange Mail',
    ja: 'Orange Mail',
    tw: 'Orange Mail'
  },
  description: {
    en: 'A piece of MAIL featuring a cute ZIGZAGOON print. It is to be held by a POKéMON',
    cn: '印有蛇纹熊的信纸，可以让宝可梦携带',
    de: 'A piece of MAIL featuring a cute ZIGZAGOON print. It is to be held by a POKéMON',
    fr: 'A piece of MAIL featuring a cute ZIGZAGOON print. It is to be held by a POKéMON',
    it: 'A piece of MAIL featuring a cute ZIGZAGOON print. It is to be held by a POKéMON',
    es: 'A piece of MAIL featuring a cute ZIGZAGOON print. It is to be held by a POKéMON',
    ja: 'A piece of MAIL featuring a cute ZIGZAGOON print. It is to be held by a POKéMON',
    tw: 'A piece of MAIL featuring a cute ZIGZAGOON print. It is to be held by a POKéMON'
  },
  price: 153,
  listings: 1,
  quantity: 1
}
```
