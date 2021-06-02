document.getElementById('roots-btn').onclick = function() {

    var a = Number(prompt('Введите a'));
    var b = Number(prompt('Введите b'));
    var c = Number(prompt('Введите c'));
    var roots = squareRoots(a, b, c);

    switch (roots.length) {
        case '!roots.length': 
            alert('корней нет!');
            break;
        case '1':
            alert('один корень: ' + roots[0]);
            break;
        default: 
            alert('два корня: ' + roots[1] + ' и ' + roots[0]);
            
    }

    squareRootsTests();


    // находим корни квадратного уравнения
    // возвращает массив корней
    function squareRoots(a, b, c) {
        if (a !== 0) {

            var d = (b * b) - (4 * a * c); // дискриминант

            if (d < 0)
                return []; // нет корней

            if (d === 0)
                return [-b / (2 * a)]; // один корень

            var x1 = (-b + Math.sqrt(d)) / (2 * a);
            var x2 = (-b - Math.sqrt(d)) / (2 * a);
            return [x1, x2]; // два корня
        } else {

            let result = -(c / b);
            return [result];

        }


    }


    function squareRootsTests() {

        console.log('тест 1,1,1 -> нет корней');
        var roots = squareRoots(1, 1, 1);
        console.log((roots.length == 0) ? 'пройден' : 'НЕ ПРОЙДЕН!')

        console.log('тест 1,-2,-3 -> два корня 3,-1');
        var roots = squareRoots(1, -2, -3);
        console.log(((roots.length == 2) && (roots[0] == 3) && (roots[1] == -1)) ? 'пройден' : 'НЕ ПРОЙДЕН!')

        console.log('тест -1,-2,15 -> два корня -5,3');
        var roots = squareRoots(-1, -2, 15);
        console.log(((roots.length == 2) && (roots[0] == -5) && (roots[1] == 3)) ? 'пройден' : 'НЕ ПРОЙДЕН!')

        console.log('тест 1,12,36 -> один корень -6');
        var roots = squareRoots(1, 12, 36);
        console.log(((roots.length == 1) && (roots[0] == -6)) ? 'пройден' : 'НЕ ПРОЙДЕН!')

        console.log('тест 0,5,-10 -> один корень 2');
        var roots = squareRoots(0, 5, -10);
        console.log('Слогаемое а не может быть равно нулю. Неполное квадратное уровнение!');
        console.log(((roots.length == 1) && (roots[0] == 2)) ? 'пройден' : 'НЕ ПРОЙДЕН!')
    }



}