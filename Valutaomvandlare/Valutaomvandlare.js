initialize();

async function initialize(){
    let url = "https://api.exchangeratesapi.io/latest";
    let response = await api.fetchValuta(url);
    localStorage.setItem('rates', JSON.stringify(response.rates));
    setInterval(initialize(), 3600000);//en timme
    CreateOptions();
    ConvertCurrency();
}
function CreateOptions(){
    let selectOptionsFrom=document.querySelector('#from');
    let selectOptionsTo=document.querySelector('#to');
    let optionsText = JSON.parse(localStorage.getItem('rates'));
//    selectOptionsFrom.innerHTML='';
//    selectOptionsTo.innerHTML='';

    for(let rate in optionsText){       

        let optionElementFrom = document.createElement("option");
        let optionElementTo = document.createElement("option");
        optionElementFrom.innerHTML = optionElementTo.innerHTML= rate;
        optionElementFrom.value = optionElementTo.value = optionsText[rate];        
       
        selectOptionsFrom.appendChild(optionElementFrom);
        selectOptionsTo.appendChild(optionElementTo);
    }    
}
function Convert(val){
    let fromAmount= document.getElementById('amountFrom');
    let toAmount=document.getElementById('amountTo');
    let fromSelected=document.getElementById('from').value;
    let toSelected=document.getElementById('to').value;

    if(val==1){
        toAmount.value=(fromAmount.value/fromSelected*toSelected).toFixed(2);
    }
    else if(val==2){
        fromAmount.value=(toAmount.value/toSelected*fromSelected).toFixed(2);
    }
}
