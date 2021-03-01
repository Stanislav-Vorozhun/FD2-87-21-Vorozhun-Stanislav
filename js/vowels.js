document.getElementById('vowels-btn').onclick = function() {

    var f = prompt('Введите строку: ');

    function letterSearch() {
        let a = 0;
        let stringsearch = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];

        for (let i = 0; i < f.length; i++)
            for (let j = 0; j < stringsearch.length; j++)
                if (f[i] === stringsearch[j]) {
                    ++a;
                    break;
                }
        return a ? a : "Гласные не найдены";
    }

    console.log(letterSearch()),

        alert('Количество русских гласных в строке: ' + letterSearch());

}