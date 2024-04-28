// Gateway
import { PUBLIC_API_URL } from '$env/static/public';
import * as crypto from 'crypto';

// DATA: MAC_GENERAL = TERMINAL, TRTYPE, AMOUNT, CURRENCY, ORDER, DESC, MERCHANT, MERCH_NAME, ADDENDUM, AD.CUST_BOR_ORDER_ID, TIMESTAMP, NONCE, P_SIGN
let TERMINAL = "V2400709"; // Идентификатор на терминала получен от БОРИКА, Размер: 8
let TRTYPE = "1"; // Тип на транзацията: 1, 12, 21, 22, 24, 90, Разпер: 1-2
let AMOUNT =  "50.00"; // Сума на плащането, Формат: xx.xx, Размер: 1-12
let CURRENCY = "BGN"; // Валута на плащането, Размер: 3, Формат: ISO-4217
let ORDER = "001213"; // Номер поръчка, Размер: 6 
let AD_CUST_BOR_ORDER_ID = `${ORDER}@${ORDER}`; // ORDER + 16 символа
let RFU = "-"; // Резервирано поле за бъдеща употреба

let GATEWAY = "https://3dsgate-dev.borica.bg/cgi-bin/cgi_link"; // Development
// let GATEWAY = "https://3dsgate.borica.bg/cgi-bin/cgi_link"; // Production
let DESC = "Наименование на поръчката"; // Наименование на поръчката, Размер: 8-50
let MERCHANT = "2000000602"; // Идентификатор на търговеца получен от БОРИКА, Размер: 10-15, Тест: $MERCHANT = "1600000001";
let MERCH_NAME = "VI Santa Sarah AD"; // Наименование на търговеца, Размер: 18
let ADDENDUM = "AD,TD";
let COUNTRY = "BG"; // Страна, Размер: 2
let MERCH_GMT = "+03"; // Часова зона на търговеца: GMT 3
let MERCH_URL = "https://santa-sarah.com"; // Линк на страницата на търговеца, Размер: 1-250
let BACKREF = "https://santa-sarah.com/shop/checkout/payment"; // Линк при връщане след плащане, Размер: 1-250
let EMAIL = "denev@kodes.agency"; // Електронна поща, Размер: 26

const PRIVATE_KEY = `-----BEGIN ENCRYPTED PRIVATE KEY-----
MIIFDTA/BgkqhkiG9w0BBQ0wMjAaBgkqhkiG9w0BBQwwDQQIgZXOG6OwHQwCAWQw
FAYIKoZIhvcNAwcECPZVTVtCX5EPBIIEyM+ddu7ZEjnx0pnSmQ09e8YDS4Xfftjf
Pwp0Pcq5EVSPGYqgOOda94Vumb7Ai108Dn7FryAEl09Hy2Zf3TRzFJ3rXmH9LFxd
fDuMqhglRpCjmtJtW43a4gwIEwPoN+yKRnzogqz/6xLCaiyNOpSuPpStqrR1B+Ch
HkjqjsEFUBjVBjprq/SihaRnM27KWiqcC1urVGlsHVqvYUyoc3kxHCvOss2gYGIt
rCmFj8xf3fcXRFyqSJuSQzAJEHo4NZU4VmndztX7SxZsDnCxIJ1IXZ7eohPC9cD/
4JQ0zdPZZ5qrfZ11THns6iNziv1XgFcBFM69SI6mV80+0jXxOlu2vAPrlg4Kp8N1
7L8N2a4vEDxJvK1TCRNfxdBCb6k3gEkPQRmYnESADNnTeZlGeuasAglLZBg/NLSg
fNWzIfG66r7EJp3F8xGs3XZ8FvpLStm7KKlqcK0tzv3hyiBoT06i7mPDgZ9evQN1
EfVaajhtP6NNJfSsAsgChdywuxA48Sy4LOAc/k6EowI6yqkO1jdjpQkyryw2N7f9
s//lVFe2zYA37myebajFvsMYIYqPpZGYbFAtOUovTI+LpA9yvSlBSxklwZspEh8V
/pQXPD6j9sRe6dpBIHPdm6jgXXYg/HxwXTmgwpB0FZqfEEgl7pntKvHPuvfWt/Jn
Ao+avcpUx12peqIOtt50ZsrHdvg11g5YnTJCMyBbvzd1xxjQit6nwUvtp+SxYMsm
IeEws8u2/t+WmUV/zNJjDRj+L8FVTtjHE8aZBl057pzJWKfciiwm4+WTGLxXfZ7Z
QXZ66fswP8QuGcA8mAhNjTUWlqYPP7tzqqbqUBjgWJlpbBm5+gQ6AOSDTXhw/1S2
Re3aPb6DlYf6slJrRYOAFLL0lfqOthPVtbEHhHbR7a4dlkXx04WMK/IBDnHRqfDZ
qS8cB18VZ0OC9I+x4OGV7tjrIRDZ7yURI4mN1o1lQ8bTaGtHA9nm7YLFjbmMHSNl
LkpXxELlwPwhi/sAJa6Njyi2RAvn5EDqXKxJWIMDjecusM7yqn8Dv6elbHTI9fTr
UekguEYvgqkXOX259YkvhpdrtnzBU7KV4OOvs+VLDeEN6rAohxQpZrzRmp0wDTrg
FyUDNnFBFUKau4yu2llDeOPXRkzR6h4U/Dqv7Ze0QV/0yiIv5ydLpKg04WPfXcqU
pBzJX57R2ymsLMvLYgjacrZ0nSUpkIxlOk03t4vxhdkhmafWh9BEdfWET0HOCJjp
sPTmL2+GMlScyRn8ZH4QL90jGfEbOgPMjqYPBQrJOM28JBbcMWLvNbwtMVLiKt7E
If/ObQIjQhMxwQH80J1hb3oelj/qSCmnSBPgfXG0LkkAzbTT/O6nEleXy0Eo6yJ8
oxxFdkL7+HzAqXaCgIvlvNdzBcFKD0Zgbfy7NH7xOm8Jgw6noBl4kjdYYGLyrDvk
h1wU2j15gyHnQT2oCj6wpNuzyYe/AzNQRauTmfEYnKcbT6p4RC16JOR69/Cgi//T
w/GXiKR9isi9MyG+B7BWx4Bg+lp7ehYJRTTc/7a6WdF8Qvo8pRRcbu5C0J5R0kVA
npqJDsbbdJbegp+DpORSkjydPnJWZlAJ5pOGN7McxcPVWdUJXvnnJWYCTwH0yF3s
mA==
-----END ENCRYPTED PRIVATE KEY-----
`
const PASSPHRASE = '96FeTinxMb3f1AhHPH0e';

export const sign = async () => {
    let NONCE = crypto.randomBytes(16).toString('hex').toUpperCase(); // Формиране на сигнатура за подписване, Размер: 1-64
    let TIMESTAMP = new Date().toISOString().replace(/[-T:\.Z]/g, "").substring(0,14); // Формат: YYYYMMDDHHMMSS, UTC, Размер: 14

    console.log(TIMESTAMP)
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
    const sign = crypto.createSign('SHA256');

    // Update the sign object with the P_SIGN data
    sign.update(P_SIGN);

    // Sign the data and convert it to a hex string
    const signature = sign.sign({ key: PRIVATE_KEY, passphrase: PASSPHRASE }, 'hex');

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


    // const recordRec = await fetch('http://localhost:3001/api/payments', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
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
