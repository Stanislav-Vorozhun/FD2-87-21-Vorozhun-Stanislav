'use strict';

let clockBody = document.querySelector('#clockBody'),
    radius = 120,
    angle = 0,
    distanceOfClockNumbers = 30,
    hours = 12,

    centerX = clockBody.offsetLeft + clockBody.offsetWidth / 2,
    centerY = clockBody.offsetTop + clockBody.offsetHeight / 2,

    hoursArrow = document.createElement('div'),
    minutesArrow = document.createElement('div'),
    secondsArrow = document.createElement('div');

for (let i = 1; i <= hours; i++) {

    let hoursBody = document.createElement('div'),
        angelCount,
        hoursBodyCenterY,
        hoursBodyCenterX;

    hoursBody = clockBody.appendChild(hoursBody);
    hoursBody.classList.add('hoursBody');
    hoursBody.innerHTML = i;

    angle += distanceOfClockNumbers;
    angelCount = angle / 180 * Math.PI;

    hoursBodyCenterX = centerX + radius * Math.sin(angelCount);
    hoursBodyCenterY = centerY - radius * Math.cos(angelCount);


    hoursBody.style.left = Math.round(hoursBodyCenterX - hoursBody.offsetWidth / 2) + 'px';
    hoursBody.style.top = Math.round(hoursBodyCenterY - hoursBody.offsetHeight / 2) + 'px';
}

hoursArrow = clockBody.appendChild(hoursArrow);
hoursArrow.classList.add('hoursArrow');
hoursArrow.style.left = centerX - hoursArrow.offsetWidth / 2 + 'px';
hoursArrow.style.top = centerY - hoursArrow.offsetHeight + 10 + 'px';
hoursArrow.style.transformOrigin = 'center 50px'

minutesArrow = clockBody.appendChild(minutesArrow);
minutesArrow.classList.add('minutesArrow');
minutesArrow.style.left = centerX - minutesArrow.offsetWidth / 2 + 'px';
minutesArrow.style.top = centerY - minutesArrow.offsetHeight + 10 + 'px';
minutesArrow.style.transformOrigin = 'center 110px';

secondsArrow = clockBody.appendChild(secondsArrow);
secondsArrow.classList.add('secondsArrow');
secondsArrow.style.left = centerX - secondsArrow.offsetWidth / 2 + 'px';
secondsArrow.style.top = centerY - secondsArrow.offsetHeight + 10 + 'px';
secondsArrow.style.transformOrigin = 'center 135px';

function clockSteps() {
    let time = new Date(),
        hoursArrowStep = 30 * (time.getHours() + (1 / 60) * time.getMinutes()),
        minutesArrowStep = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds()),
        secondsArrowStep = 6 * time.getSeconds() - 6;

    hoursArrowStep += 6 * (1 / 360);
    hoursArrow.style.transform = 'rotate(' + hoursArrowStep + 'deg)';

    minutesArrowStep += 6 * (1 / 60);
    minutesArrow.style.transform = 'rotate(' + minutesArrowStep + 'deg)';

    secondsArrowStep += 6;
    secondsArrow.style.transform = 'rotate(' + secondsArrowStep + 'deg)';

}


window.onload = clockSteps();
window.setInterval(clockSteps, 1000);