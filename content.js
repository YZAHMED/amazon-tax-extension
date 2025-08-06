
// default tax in ONTARIO
const taxRate = 0.13;


window.addEventListener('load', ()=>{
setTimeout(()=>{

addTaxToSearchResults()

}, 1000)

})

function findAmazonPriceElement(){
    return document.querySelector('#priceblock_ourprice, #priceblock_dealprice, .a-price.a-text-price.a-size-medium.apexPriceToPay .a-offscreen');
};

function findAmazonPriceElements(){
    return document.querySelectorAll('.s-main-slot .a-price .a-offscreen');

}

//func to extract price from amazon pages.
function addTaxToSearchResults(){
    //chceck if search page use search elements function else use only one element function and wrap it in an array
    const singleEl = findAmazonPriceElement();
    const prices = !!singleEl? [singleEl] : findAmazonPriceElements();

    prices.forEach(el=> {
        const raw = el?.innerText?.replace(/[^\d.]/g, '');
        if (!raw) return

        const price = parseFloat(raw);
        if (isNaN(price)) return;

        const taxed = (price + (price * taxRate)).toFixed(2);
        const label = document.createElement("span");
        label.innerHTML = ` (incl. tax: $${taxed})`;
        label.style.color = '#007600';
        label.style.fontSize = '13px';
        label.style.marginLeft = '4px';
        label.style.fontWeight = 'normal';

        el.parentElement?.insertBefore(label, el.nextSibling);
        
    })

}

