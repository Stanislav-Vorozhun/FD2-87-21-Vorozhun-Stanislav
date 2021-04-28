'use strict';

document.getElementById('mood-btn').onclick = function() {

    function randomDiap(n, m) {
        return Math.floor(Math.random() * (m - n + 1)) + n;
    };

    function mood(randomColorCount) {
        console.log('Кол-во цветов: ' + randomColorCount);
        let color = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];
        for (let i = 1; i <= randomColorCount; i++) {
            let n = randomDiap(1, color.length - 1);
            let nameColor = color.splice(n, 1)[0];
            console.log(nameColor);
        };

    };
    mood(3);

};