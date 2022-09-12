const intialPrice=document.querySelector("#initial-price");
const currentPrice=document.querySelector("#current-price");
const quantity=document.querySelector("#quantity"); 
const checkButton=document.querySelector("#profit-loss");
const outputBoxArea=document.querySelector("#output-boxarea");
// const ab=currentPrice.value;
// console.log(ab);

function calculateProfitandLoss(){
    var profitorloss=0;
      var bp=Number(intialPrice.value);
    var sp=Number(currentPrice.value);
    if(sp<=0 || bp<=0 || Number(quantity.value)<=0)
    {
        printmessage("Please enter acceptable values");
    }
    else
    {
    var profitloss=0;
    var quant=quantity.value;

    if(sp>bp){
    profitloss=(sp-bp)*quant;
    profitpercent=(profitloss/(bp*quant))*100;
    profitorloss=1;
    
    printmessage('The profit is '+ Number.parseFloat(profitloss).toFixed(2) + " and the profit percentage is "  + Number.parseFloat(profitpercent).toFixed(2) + "%");
}
    else{
    profitloss=(bp-sp)*quant;
    profitpercent=(profitloss/(bp*quant))*100;
    profitorloss=0;
    printmessage('The loss is '+ Number.parseFloat(profitloss).toFixed(2) + " and the loss percentage is "  + Number.parseFloat(profitpercent).toFixed(2) + "%");
}

    console.log(profitloss,profitpercent); 
    return profitorloss;
    }
    function printmessage(message)
    {
        if(profitorloss==1)
      {  outputBoxArea.style.color='green';
        outputBoxArea.innerHTML=message;}
        else{
            outputBoxArea.style.color='red';
            outputBoxArea.innerHTML=message;
        }

    }
}


checkButton.addEventListener('click',calculateProfitandLoss);
