// --------Anketa--------
document.getElementById('anketa-btn').onclick = function() {
    let f = prompt('Введите вашу фамилию: '),
        i = prompt('Введите ваше имя: '),
        o = prompt('Введите ваше отчество: ')


    if (isNaN(f)) {
        if (isNaN(i)) {
            if (isNaN(o)) {

                let age = parseInt(prompt('Введите ваш возраст: '));
                if ((age >= 16) && (age <= 110)) {
                    let gender = confirm('Ваш пол - мужской?');
                    if (gender)
                        gender = 'Мужской';
                    else
                        gender = 'Женский';

                    alert('Ваша ФИО: ' + f + ' ' + i + ' ' + o + '\n' +
                        'Ваш пол: ' + (gender ? 'Мужской' : 'Женский') + '\n' +
                        'Ваш полный возраст: ' + age + '\n' +
                        'Ваш полный возраст в днях: ' + (age * 365) + '\n' +
                        'Через 5 лет Вам будет: ' + (age + 5) + '\n' +
                        'Вы на пенсии: ' + ((age >= 63 && gender === false) || (age >= 65 && age === true) ? 'да' : 'нет'));

                } else
                    alert('Ваш возраст не подходит для заполнения анкеты!');

            }
        }


    } else
        alert('Данные введены некорректно. Попробуйте заново.. (F5) ');
}