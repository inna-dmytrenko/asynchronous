import '../css/common.css';

/*
 - Создание
 - Unix-время
 - Методы
 - Разница времени
 - Date.now()
*/

// const date1 = Date.now();
// console.log('date1', date1);

// setTimeout(() => {
//   const date2 = Date.now();

//   console.log('date1', date1);
//   console.log('date2', date2);

//   console.log(date2 - date1);
// }, 3000);



const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
  calendar: document.querySelector('.calendar')
};



// const timer = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });
const CountdownTimer = function({selector, targetDate}){
    this.selector = selector;
    this.targetDate = targetDate;
    this.intervalId = null;
    this.isActivTimer = false;   
      
};


CountdownTimer.prototype.start = function() {
    if(this.isActivTimer) {
        return;
    }

    if(!getValueCalendar()){
        return alert('Сначала укажите дату');
    }

    this.isActivTimer = true;
    const targetDate = new Date(getValueCalendar()).getTime()                

    this.intervalId = setInterval(()=>{
        const currentTime = Date.now();
        const deltaTime = targetDate - currentTime;
        updateClockFace(deltaTime);                    
    },1000)
};

CountdownTimer.prototype.stop = function(){
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isActivTimer = false;
    updateClockFace(0);
};

const timer = new CountdownTimer({   
    selector: '#timer-1',
    targetDate: new Date('Jan-14-2021'),
});

function updateClockFace(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;    
}

function pad(value) {
    return String(value).padStart(2,'0');
}

function getValueCalendar(){
    return refs.calendar.value;
}

refs.btnStart.addEventListener('click', timer.start.bind(timer));
refs.btnStop.addEventListener('click', timer.stop.bind(timer));



// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);



