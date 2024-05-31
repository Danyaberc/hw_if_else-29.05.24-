let elForm = document.querySelector('.main__form');
let elMessage = document.querySelector('.message')

elForm.addEventListener('submit', (ev)=>{
    ev.preventDefault();
    let value = ev.target;

    let formData = new FormData(value);
    
    let formName = formData.get('user')
    let formAge = formData.get('age')
    let formTicket = formData.get('quantity')
    console.log('formName:',formName)
    console.log('formAge:',formAge)
    console.log('formTicket:',formTicket)

     let formArr = [
        formName,
        formAge,
        formTicket
    ]

    console.log('formArr:', formArr)

    let actualInfoArr = [];

    let newArr = formArr.forEach(input =>{

        if(input === "" || input <= 0){
            elMessage.innerHTML = 'Заповніть всі поля корректно';
            return
        }

        actualInfoArr.push(input)
        console.log('INFO PUSH IN ARR')

        if(actualInfoArr.length < 3 || actualInfoArr.length !== 3 ||actualInfoArr.length === 0){
            elMessage.innerHTML = 'Заповніть всі поля корректно'
            return
        }

        elMessage.innerHTML = `Ваше ім'я ${actualInfoArr[0]} Ваш вік ${actualInfoArr[1]} К-ть білетів ${actualInfoArr[2]}`
     
        
    })
    console.log('newinfo on actualinfo:', actualInfoArr)
})

