// get input value 
function getInputValue(inputId){
    const inputField =document.getElementById(inputId);
    const inputValueText=inputField.value;
    const value =parseFloat(inputValueText);
    inputField.value='';
return value;
}
// set text area 
function setElementInnerText(elementId,area){
    const element=document.getElementById(elementId);
    element.innerText=area;
}

// add to calculation 
function addToCalculationEntry(areaType,area){

        const calculationEntry=document.getElementById('calculation-entry')

        // count 
    const count=calculationEntry.childElementCount;

    const p=document.createElement('p')
    p.classList.add('mb-3')
    p.classList.add('text-xl')
p.innerHTML=`${count+1} ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success ml-3">Convert</button>`;

calculationEntry.appendChild(p);
}
