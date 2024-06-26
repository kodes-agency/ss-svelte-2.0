// Gateway
import { BORICA_DEV_GATEWAY, BORICA_DEV_PASSPHRASE, BORICA_DEV_PRIVATE_KEY, BORICA_MERCHANT, BORICA_TERMINAL, BORICA_PRODUCTION_GATEWAY, BORICA_PRODUCTION_PASSPHRASE, BORICA_PRODUCTION_PRIVATE_KEY } from "$env/static/private";
import * as crypto from "crypto";

// DATA: MAC_GENERAL = TERMINAL, TRTYPE, AMOUNT, CURRENCY, ORDER, DESC, MERCHANT, MERCH_NAME, ADDENDUM, AD.CUST_BOR_ORDER_ID, TIMESTAMP, NONCE, P_SIGN
let TERMINAL = BORICA_TERMINAL; // Идентификатор на терминала получен от БОРИКА, Размер: 8
let TRTYPE = "1"; // Тип на транзацията: 1, 12, 21, 22, 24, 90, Разпер: 1-2
let RFU = "-"; // Резервирано поле за бъдеща употреба

let GATEWAY = BORICA_PRODUCTION_GATEWAY; // Development
// let GATEWAY = "https://3dsgate.borica.bg/cgi-bin/cgi_link"; // Production
let MERCHANT = BORICA_MERCHANT; // Идентификатор на търговеца получен от БОРИКА, Размер: 10-15, Тест: $MERCHANT = "1600000001";
let MERCH_NAME = "Family Wine Estate Santa Sarah AD"; // Наименование на търговеца, Размер: 18
let ADDENDUM = "AD,TD";
let COUNTRY = "BG"; // Страна, Размер: 2
let MERCH_GMT = "+03"; // Часова зона на търговеца: GMT 3
let MERCH_URL = "https://santa-sarah.com"; // Линк на страницата на търговеца, Размер: 1-250
let BACKREF = "https://santa-sarah.com/shop/checkout/payment."; // Линк при връщане след плащане, Размер: 1-250
let EMAIL = "denev@kodes.agency"; // Електронна поща, Размер: 26

export const sign = async (amount:string) => {
    let NONCE = crypto.randomBytes(16).toString("hex").toUpperCase(); // Формиране на сигнатура за подписване, Размер: 1-64
    let TIMESTAMP = new Date().toISOString().replace(/[-T:\.Z]/g, "").substring(0,14); // Формат: YYYYMMDDHHMMSS, UTC, Размер: 14
    let CURRENCY = "BGN"; // Валута на плащането, Размер: 3, Формат: ISO-4217
    let AMOUNT = amount; // Сума на плащането, Формат: xx.xx, Размер: 1-12
    let ORDER = Math.floor(100000 + Math.random() * 900000).toString(); // Номер поръчка, Размер: 6 
    let AD_CUST_BOR_ORDER_ID = `${ORDER}@${ORDER}`; // ORDER + 16 символа
    let DESC = `Wine Estate Santa Sarah order #${ORDER}`; // Наименование на поръчката, Размер: 8-50

    // SIGN: MAC_GENERAL = TERMINAL, TRTYPE, AMOUNT, CURRENCY, ORDER, TIMESTAMP, NONCE, RFU
    let P_SIGN = 
    `${TERMINAL.length}${TERMINAL}` +
    `${TRTYPE.length}${TRTYPE}` +
    `${AMOUNT.length}${AMOUNT}` +
    `${CURRENCY.length}${CURRENCY}` +
    `${ORDER.length}${ORDER}` +
    `${TIMESTAMP.length}${TIMESTAMP}` +
    `${NONCE.length}${NONCE}` +
    `${RFU}`;

    // Create a sign object
    const sign = crypto.createSign("SHA256");

    // Update the sign object with the P_SIGN data
    sign.update(P_SIGN);

    // Sign the data and convert it to a hex string
    const signature = sign.sign({ key: BORICA_PRODUCTION_PRIVATE_KEY, passphrase: BORICA_PRODUCTION_PASSPHRASE }, "hex");

    let data = {
        GATEWAY,
        TERMINAL,
        TRTYPE,
        AMOUNT,
        CURRENCY,
        ORDER,
        DESC,
        MERCHANT,
        MERCH_NAME,
        ADDENDUM,
        AD_CUST_BOR_ORDER_ID,
        TIMESTAMP,
        NONCE,
        RFU,
        COUNTRY,
        MERCH_GMT,
        MERCH_URL,
        BACKREF,
        EMAIL,
        P_SIGN: signature.toUpperCase(),
    }


    // const recordRec = await fetch("http://localhost:3001/api/payments", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //         AMOUNT,
    //         CURRENCY,
    //         ORDER,
    //         DESC,  
    //         TIMESTAMP,
    //     })
    //  })

    // const record = await recordRec.json();

    // console.log(record)
    

    // Convert the signature to uppercase 
    return data;
}

