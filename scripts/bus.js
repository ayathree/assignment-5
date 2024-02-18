
// hide show part
function hiddenSection() {
    const homeSection = document.getElementById('home');
    homeSection.classList.add('hidden')
    const formSection = document.getElementById('form');
    formSection.classList.remove('hidden')
}

function showSection() {
    const formSection = document.getElementById('form');
    formSection.classList.add('hidden');
    const confirmSection = document.getElementById('confirm');
    confirmSection.classList.remove('hidden');
    
}

// all seat access
const allSeat = document.getElementsByClassName('bg-slate-300 rounded-xl text-center p-5')
let seatCount = 0;
let seatLeft = 16;
for (const seat of allSeat ) {
    seat.addEventListener('click', function (event) {

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
        

        

        

    })
    
    
}
