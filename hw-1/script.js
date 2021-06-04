const PRICE_WATCH_CASE = 15.678;
const PRICE_LAPTOP_CASE = 123.965;
const PRICE_PHONE_CASE = 90.2345;

const maxPrice = Math.max(PRICE_WATCH_CASE,PRICE_LAPTOP_CASE,PRICE_PHONE_CASE);
    console.log(maxPrice);

const minPrice = Math.min(PRICE_WATCH_CASE,PRICE_LAPTOP_CASE,PRICE_PHONE_CASE);
    console.log(minPrice);

const sumPrice = PRICE_WATCH_CASE + PRICE_LAPTOP_CASE + PRICE_PHONE_CASE;
    console.log(sumPrice);

const sumPriceWithoutCoins = Math.floor(PRICE_WATCH_CASE) + Math.floor(PRICE_LAPTOP_CASE) + Math.floor(PRICE_PHONE_CASE);
    console.log(sumPriceWithoutCoins);

const sumPriceRounded = Math.round(sumPrice / 100)*100;
    console.log(sumPriceRounded);

function isEven(sumPriceWithoutCoins) {
    if (sumPriceWithoutCoins%2 == 0)
        return true;
    else
        return false;
}
    console.log(isEven(sumPriceWithoutCoins));

const buyerPayed = 500;
const changeFromPayed = (buyerPayed - sumPrice).toFixed(2);
    console.log(changeFromPayed);

const middlePriceRoundedToSecondCharachter = (sumPrice/ 3).toFixed(2);
    console.log(middlePriceRoundedToSecondCharachter);

const customerDiscount = Math.trunc(Math.random()*100);
    console.log(customerDiscount + "%");

const customerPriceWithDiscount = (sumPrice - (customerDiscount/100) * sumPrice).toFixed(2);
    console.log(customerPriceWithDiscount);

const goodsCost = Math.round(sumPrice/2);
    console.log(goodsCost);

const profit = (customerPriceWithDiscount- goodsCost).toFixed(2);
    console.log(profit);



console.log(`Максимальна ціна: ${maxPrice}, 
Мінімальна ціна: ${minPrice}, 
Вартість всіх товарів: ${sumPrice},
Сума всіх товарів без копійок: ${sumPriceWithoutCoins},
Сума всіх товарів заокруглена до сотень: ${sumPriceRounded},
Чи парна сума всіх товарів без копійок: ${isEven(sumPriceWithoutCoins)},
Решта з ${buyerPayed}грн: ${changeFromPayed},
Середнє арифметичне усіх цін: ${middlePriceRoundedToSecondCharachter},
Знижка Покупця: ${customerDiscount + "%"},
Сума до сплати зі знижкою: ${customerPriceWithDiscount},
Собівартість товарів: ${goodsCost},
Чистий прибуток: ${profit}`);
document.writeln(`  Максимальна ціна: ${maxPrice},
Мінімальна ціна: ${minPrice},
Вартість всіх товарів: ${sumPrice},
Сума всіх товарів без копійок: ${sumPriceWithoutCoins},
Сума всіх товарів заокруглена до сотень: ${sumPriceRounded},
Чи парна сума всіх товарів без копійок: ${isEven(sumPriceWithoutCoins)},
Решта з ${buyerPayed}грн: ${changeFromPayed},
Середнє арифметичне усіх цін: ${middlePriceRoundedToSecondCharachter},
Знижка Покупця: ${customerDiscount + "%"},
Сума до сплати зі знижкою: ${customerPriceWithDiscount},
Собівартість товарів: ${goodsCost},
Чистий прибуток: ${profit}`);
