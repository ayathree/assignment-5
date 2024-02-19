// background of seat
function setBackgroundColor(Id) {
    const element = document.getElementById(Id);
    element.classList.add('bg-green-500');
    
}
// set inner text
function setInnerText(id, value) {

    document.getElementById(id).innerText = value;
    
 }

//  calculate total price
function totalCost(id, value) {
    const priceInitial = document.getElementById(id).innerText;
    const priceTotal = parseInt(priceInitial);
    const sum = priceTotal+parseInt(value);
 
    setInnerText(id, sum);
    
 }




