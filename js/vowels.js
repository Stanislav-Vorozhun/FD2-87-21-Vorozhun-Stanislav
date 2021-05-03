document.getElementById('vowels-btn').onclick = function() {

    var f = prompt('Введите строку: ');
    let stringsearch = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];


    function letterSearchFor() {
        let count = 0;
        for (let i = 0; i < f.length; i++)
            for (let j = 0; j < stringsearch.length; j++)
                if (f[i] === stringsearch[j]) {
                    ++count;
                    break;
                }
        return count;
    }

    function letterSearchForEach(words) {
        let count = 0;
        Array.from(words).forEach(letter => {
            if (stringsearch.includes(letter))
                ++count;
        });
        return count;
    };

    function letterSearchFilter(words) {
        let count = Array.from(words).filter(letter => stringsearch.includes(letter)).length;
        return count;
    };

    function letterSearchReduce(words) {
      let count = Array.from(words).reduce((sum, vowels) => stringsearch.includes(vowels) ? sum+1 : sum,0);
      return count;
    };






    console.log('(Цикл for) Количество русских гласных в строке: ' + letterSearchFor());
    console.log('(Метод forEach) Количество русских гласных в строке: ' + letterSearchForEach(f));
    console.log('(Метод filter) Количество русских гласных в строке: ' + letterSearchFilter(f));
    console.log('(Метод reduce) Количество русских гласных в строке: ' + letterSearchReduce(f));




}