<script lang="ts">
        import { page } from "$app/stores"
        // export let GATEWAY, TERMINAL, TRTYPE, AMOUNT, CURRENCY, ORDER, DESC, MERCHANT, MERCH_NAME, ADDENDUM, AD_CUST_BOR_ORDER_ID, TIMESTAMP, NONCE, RFU, COUNTRY, MERCH_GMT, MERCH_URL, BACKREF, EMAIL, P_SIGN;
        export let signitureData:any
        export let payButton: any
        
        async function pushRecord(){
            const recordRec = await fetch('/api/cart/add-payment-record', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    AMOUNT: signitureData.AMOUNT,
                    CURRENCY: signitureData.CURRENCY,
                    ORDER: signitureData.ORDER,
                    DESC: signitureData.DESC,  
                    TIMESTAMP: signitureData.TIMESTAMP,
                })
            })

            let recordRes = await recordRec.json()

            if(recordRec.ok){
                console.log('Record added')
            }else{  
                console.log('Record not added')
            }
        }
        console.log($page.params.lang)
</script>

<div>
  <form action={signitureData.GATEWAY} method="post" id="card-payment">
    <input type="hidden" name="TERMINAL" value={signitureData.TERMINAL} />
    <input type="hidden" name="TRTYPE" value={signitureData.TRTYPE} />
    <input type="hidden" name="AMOUNT" value={signitureData.AMOUNT} />
    <input type="hidden" name="CURRENCY" value={signitureData.CURRENCY} />
    <input type="hidden" name="ORDER" value={signitureData.ORDER} />
    <input type="hidden" name="DESC" value={signitureData.DESC} />
    <input type="hidden" name="MERCHANT" value={signitureData.MERCHANT} />
    <input type="hidden" name="MERCH_NAME" value={signitureData.MERCH_NAME} />
    <input type="hidden" name="ADDENDUM" value={signitureData.ADDENDUM} />
    <input
      type="hidden"
      name="AD.CUST_BOR_ORDER_ID"
      value={signitureData.AD_CUST_BOR_ORDER_ID}
    />
    <input type="hidden" name="LANG" value={!$page.params.lang ? "BG" : $page.params.lang == "bg" ? "BG" : "EN" } />
    <input type="hidden" name="TIMESTAMP" value={signitureData.TIMESTAMP} />
    <input type="hidden" name="NONCE" value={signitureData.NONCE} />
    <input type="hidden" name="RFU" value={signitureData.RFU} />
    <input type="hidden" name="COUNTRY" value={signitureData.COUNTRY} />
    <input type="hidden" name="MERCH_GMT" value={signitureData.MERCH_GMT} />
    <input type="hidden" name="MERCH_URL" value={signitureData.MERCH_URL} />
    <input type="hidden" name="BACKREF" value={signitureData.BACKREF} />
    <input type="hidden" name="EMAIL" value={signitureData.EMAIL} />
    <input type="hidden" name="P_SIGN" value={signitureData.P_SIGN} />

    <button type="submit"
        class="font-sansy disabled:cursor-not-allowed disabled:bg-gray disabled:bg-opacity-30 uppercase text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-white bg-brown px-10 py-1"
        on:click={ async(e)=>{
        e.preventDefault()
        console.log('Submit')
        await pushRecord()
        // @ts-ignore
        document.getElementById('card-payment')?.submit();
    }}>{payButton}</button>

    <!-- <button class="font-sansy disabled:cursor-not-allowed disabled:bg-gray disabled:bg-opacity-30 uppercase text-sm bg-opacity-80 hover:bg-opacity-100 rounded-sm transition-all duration-300 text-white bg-brown px-10 py-1" type="submit">{payButton}</button> -->
  </form>
</div>
