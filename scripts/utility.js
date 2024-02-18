// background of seat
function setBackgroundColor(Id) {
    const element = document.getElementById(Id);
    element.classList.add('bg-green-500');
    
}
// set inner text
function setInnerText(id, value) {

    document.getElementById(id).innerText = value;
    
 }