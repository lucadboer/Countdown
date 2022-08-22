const time = document.getElementById('time')

let days = 10;
let hours = 4;
let minutes = 1;
let seconds = 5;

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


