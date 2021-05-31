const PRICE_WATCH_CASE = 15.678;
const PRICE_LAPTOP_CASE = 123.965;
const PRICE_PHONE_CASE = 90.2345;

const MAX_PRICE = Math.max(PRICE_WATCH_CASE,PRICE_LAPTOP_CASE,PRICE_PHONE_CASE);
    console.log(MAX_PRICE);

const MIN_PRICE = Math.min(PRICE_WATCH_CASE,PRICE_LAPTOP_CASE,PRICE_PHONE_CASE);
    console.log(MIN_PRICE);

const SUM_PRICE = PRICE_WATCH_CASE + PRICE_LAPTOP_CASE + PRICE_PHONE_CASE;
    console.log(SUM_PRICE);

const SUM_PRICE_WITHOUT_COINS = Math.floor(PRICE_WATCH_CASE) + Math.floor(PRICE_LAPTOP_CASE) + Math.floor(PRICE_PHONE_CASE);
    console.log(SUM_PRICE_WITHOUT_COINS);

const SUM_PRICE_ROUNDED_TO_HUNDRED = Math.round(SUM_PRICE / 100)*100;
    console.log(SUM_PRICE_ROUNDED_TO_HUNDRED);

function IS_EVEN(SUM_PRICE_WITHOUT_COINS) {
    if (SUM_PRICE_WITHOUT_COINS%2 == 0)
        return true;
    else
        return false;
}
    console.log(IS_EVEN(SUM_PRICE_WITHOUT_COINS));

const CHANGE_FROM_500 = (500 - SUM_PRICE).toFixed(2);
    console.log(CHANGE_FROM_500);

const MIDDLE_PRICE_ROUNDED_TO_SECOND_CHARACTER = (SUM_PRICE/ 3).toFixed(2);
    console.log(MIDDLE_PRICE_ROUNDED_TO_SECOND_CHARACTER);

const CUSTOMER_DISCOUNT = Math.trunc(Math.random()*100);
    console.log(CUSTOMER_DISCOUNT + "%");

const CUSTOMER_PRICE_WITH_DISCOUNT = (SUM_PRICE - (CUSTOMER_DISCOUNT/100) * SUM_PRICE).toFixed(2);
    console.log(CUSTOMER_PRICE_WITH_DISCOUNT);

const GOODS_COST = Math.round(SUM_PRICE/2);
    console.log(GOODS_COST);

const PROFIT = (CUSTOMER_PRICE_WITH_DISCOUNT- GOODS_COST).toFixed(2);
    console.log(PROFIT);



console.log(`Максимальна ціна: ${MAX_PRICE}, \n Мінімальна ціна: ${MIN_PRICE}, \n Вартість всіх товарів: ${SUM_PRICE}, \n Сума всіх товарів без копійок: ${SUM_PRICE_WITHOUT_COINS}, \n Сума всіх товарів заокруглена до сотень: ${SUM_PRICE_ROUNDED_TO_HUNDRED}, \n Чи парна сума всіх товарів без копійок: ${IS_EVEN(SUM_PRICE_WITHOUT_COINS)}, \n Решта з 500грн: ${CHANGE_FROM_500}, \n Середнє арифметичне усіх цін: ${MIDDLE_PRICE_ROUNDED_TO_SECOND_CHARACTER}, \n Знижка Покупця: ${CUSTOMER_DISCOUNT + "%"}, \n Сума до сплати зі знижкою: ${CUSTOMER_PRICE_WITH_DISCOUNT}, \n Собівартість товарів: ${GOODS_COST}, \n Чистий прибуток: ${PROFIT}`);
document.writeln(`Максимальна ціна: ${MAX_PRICE}, \n Мінімальна ціна: ${MIN_PRICE}, \n Вартість всіх товарів: ${SUM_PRICE}, \n Сума всіх товарів без копійок: ${SUM_PRICE_WITHOUT_COINS}, \n Сума всіх товарів заокруглена до сотень: ${SUM_PRICE_ROUNDED_TO_HUNDRED}, \n Чи парна сума всіх товарів без копійок: ${IS_EVEN(SUM_PRICE_WITHOUT_COINS)}, \n Решта з 500грн: ${CHANGE_FROM_500}, \n Середнє арифметичне усіх цін: ${MIDDLE_PRICE_ROUNDED_TO_SECOND_CHARACTER}, \n Знижка Покупця: ${CUSTOMER_DISCOUNT + "%"}, \n Сума до сплати зі знижкою: ${CUSTOMER_PRICE_WITH_DISCOUNT}, \n Собівартість товарів: ${GOODS_COST}, \n Чистий прибуток: ${PROFIT}`);