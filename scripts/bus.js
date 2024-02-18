
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
for (const seat of allSeat ) {
    seat.addEventListener('click', function (event) {
        const seatName = event.target.id
        setBackgroundColor(seatName)
    })
    
    
}
