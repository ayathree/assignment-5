
// hide show part
function hiddenSection() {
    const formSection = document.getElementById('form');
    formSection.classList.remove('hidden')
}

function showSection() {
    const homeSection = document.getElementById('home');
     homeSection.classList.add('hidden')
    const formSection = document.getElementById('form');
    formSection.classList.add('hidden');
    const confirmSection = document.getElementById('confirm');
    confirmSection.classList.remove('hidden');
    
}

function hiddenDiscount() {
    const buttonSection = document.getElementById('apply');
    buttonSection.classList.add('hidden')
    const discountSection = document.getElementById('discount');
    discountSection.classList.remove('hidden')
    
    
}


// all seat access
const allSeat = document.getElementsByClassName('bg-slate-300 rounded-xl text-center p-5')
let seatCount = 0;
let seatLeft = 16;
let count =0;

for (const seat of allSeat ) {
    
    
    seat.addEventListener('click', function (event) {
        
        seat.removeEventListener('click', arguments.callee);
        count = count +1;
        if (count <= 4) {
            
            seatCount = seatCount + 1;
            setInnerText('seat-add', seatCount);
            seatLeft = seatLeft -1;
            setInnerText('seat-left', seatLeft);
            const seatName = event.target.id
            setBackgroundColor(seatName);
        const seatPrice = document.getElementById('seat-price').innerText;
        const seatClass = 'economy';
        const seatTextArea = document.getElementById('seat-text-area');
         const p1 =document.createElement('p');
         p1.innerText = seatName;
        const p2 = document.createElement('p');
        p2.innerText = seatClass;
        const p3 = document.createElement('p');
        p3.innerText = seatPrice;
        
         seatTextArea.appendChild(p1);
        seatTextArea.appendChild(p2);
        seatTextArea.appendChild(p3); 

// set price
        totalCost('total-price', parseInt(seatPrice))
        totalCost('grand-total', parseInt(seatPrice))  

   }
    else{
        seat.removeEventListener("click",  function (event){
    
        });
    }


})   
    
    
}
// coupon part
const applyButton =document.getElementById('apply-button');
    applyButton.addEventListener('click', function (){

        const couponApply = document.getElementById('input-field').value;
        const couponCode = couponApply;
        const CouponTwo = couponApply;
        
        if (couponCode === "NEW15" ) {
            const discount15 = document.getElementById('discount-total');
            const price = document.getElementById('total-price').innerText;
            const total = parseInt(price);
            const discount15Amount =  total* 0.15;
            discount15.innerText = discount15Amount;
            const grand = document.getElementById('grand-total');
            const grandFinal = total-discount15Amount;
            grand.innerText=grandFinal;
            
        }
        else if(CouponTwo === "Couple 20"){
            const discount20 = document.getElementById('discount-total');
            const price = document.getElementById('total-price').innerText;
            const total = parseInt(price);
            const discount20Amount =  total* 0.2;
            discount20.innerText = discount20Amount;
            const grand = document.getElementById('grand-total');
            const grandFinal = total-discount20Amount;
            grand.innerText=grandFinal; 
    
        }
        else{
            alert("Invalid Coupon");
        }
        
    })


        