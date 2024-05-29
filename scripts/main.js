let elForm = document.querySelector('.main__form');
let elMessage = document.querySelector('.message')
let elCheckInp = document.querySelectorAll('.input')

elForm.addEventListener('submit',(ev) =>{
    ev.preventDefault();
    
    let formData = new FormData(ev.target)

    let questName = formData.get('user').trim();
    let ageTicket = formData.get('age').trim();
    let quantityTicket = formData.get('quantity').trim()

    let correctName = questName.length <= 2 ;
    let correctAge = ageTicket <= 17 || ageTicket >= 100;
    let correctTicket = quantityTicket <= 1;

    if(ageTicket < 0 || quantityTicket < 0){
        elMessage.innerHTML = 'Ти голова чи що? Як можна купити -1 білет,ти хворий чи що?'
        return
    }

    if(correctName !== '' && !correctName  && correctAge !== '' && !correctAge  && correctTicket !== "" && !correctTicket){
        elMessage.innerHTML = 'CORRECT INFO';
    }else{
        elMessage.innerHTML = 'ERROR'
    }
})


