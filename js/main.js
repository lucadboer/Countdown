const time = document.getElementById('time')
const buttonOpen = document.querySelector('.subscribe')
const modal = document.querySelector('.modal-subscribe')
const buttonClose = document.querySelector('#btnClose')
const form = document.querySelector('#form-subscribe')
const txtName = document.querySelector('#name')
const txtEmail = document.querySelector('#email')

let days = 10;
let hours = 4;
let minutes = 1;
let seconds = 5;

buttonOpen.addEventListener('click', () => {
    modal.classList.remove('modal-disable')
    modal.classList.add('modal-active')
})

buttonClose.addEventListener('click', () => {
    modal.classList.add('modal-disable')
})

modal.addEventListener('click', (event) => {
    console.log(event.target.id);
    if (event.target.id == 'form-subscribe') {
        modal.classList.add('modal-disable')
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    swal("Cadastro realizado!", "", "success")
    .then(() => {
        modal.classList.add('modal-disable')
        txtName.value = ''
        txtEmail.value = ''   
    })

})


function add0(num) {
    if (num < 10) {
        return `0${num}`
    }
    else return num
}

function timer() {
    setInterval(() => {
        if (seconds > 0) {
            seconds-- 

            if (seconds <= 0 ) {
                minutes--

                if (minutes < 0) {
                    minutes = 59
                    hours--

                    if (hours < 0) {
                        hours = 23

                        if (hours === 23) {
                            days--
                        }
                    }
                }
            }
        }
        else {
            seconds = 59
        }
        
        time.innerHTML = `${add0(days)} : ${add0(hours)} : ${add0(minutes)} : ${add0(seconds)}`

    }, 1000);
}

timer()




