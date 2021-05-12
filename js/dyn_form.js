"use script";

var formDef1 =
    [
        { label: 'Название сайта:', kind: 'longtext', name: 'sitename' },
        { label: 'URL сайта:', kind: 'longtext', name: 'siteurl' },
        { label: 'Посетителей в сутки:', kind: 'number', name: 'visitors' },
        { label: 'E-mail для связи:', kind: 'shorttext', name: 'email' },
        {
            label: 'Рубрика каталога:', kind: 'combo', name: 'division',
            variants: [{ text: 'здоровье', value: 1 }, { text: 'домашний уют', value: 2 }, { text: 'бытовая техника', value: 3 }]
        },
        {
            label: 'Размещение:', kind: 'radio', name: 'payment',
            variants: [{ text: 'бесплатное', value: 1 }, { text: 'платное', value: 2 }, { text: 'VIP', value: 3 }]
        },
        { label: 'Разрешить отзывы:', kind: 'check', name: 'votes' },
        { label: 'Описание сайта:', kind: 'memo', name: 'description' },
        { label: 'Опубликовать ', kind: 'submit', name: 'submit' },
    ];

var formDef2 =
    [
        { label: 'Фамилия:', kind: 'longtext', name: 'lastname' },
        { label: 'Имя:', kind: 'longtext', name: 'firstname' },
        { label: 'Отчество:', kind: 'longtext', name: 'secondname' },
        { label: 'Возраст:', kind: 'number', name: 'age' },
        { label: 'Зарегистрироваться ', kind: 'submit', name: 'submit' },
    ];

function generationForm(arrayOfElements, elementForm) {
    arrayOfElements.forEach(element => {
        let labelForm = document.createElement('label');
        labelForm.innerHTML = element.label;
        elementForm.appendChild(labelForm);

        element.name

        if (element.kind === 'longtext') {
            let inputForm = document.createElement('input');
            inputForm.name = element.name;
            let brForm = document.createElement('br');
            inputForm.type = 'text';
            elementForm.appendChild(inputForm);
            elementForm.appendChild(brForm);
        };
        if (element.kind === 'number') {
            let inputForm = document.createElement('input');
            inputForm.name = element.name;
            let brForm = document.createElement('br');
            inputForm.type = 'number';
            elementForm.appendChild(inputForm);
            elementForm.appendChild(brForm);
        };
        if (element.kind === 'shorttext') {
            let inputForm = document.createElement('input');
            inputForm.name = element.name;
            let brForm = document.createElement('br');
            inputForm.type = 'text';
            elementForm.appendChild(inputForm);
            elementForm.appendChild(brForm);
        };
        if (element.kind === 'combo') {
            let selectForm = document.createElement('select');
            selectForm.name = element.name;
            let brForm = document.createElement('br');
            elementForm.appendChild(selectForm);
            elementForm.appendChild(brForm);
            element.variants.forEach(elementVariants => {
                let optionForm = document.createElement('option');
                optionForm.name = element.name;
                optionForm.setAttribute('value', elementVariants.value);
                optionForm.textContent = elementVariants.text;
                selectForm.appendChild(optionForm);
            });
        };
        if (element.kind === 'radio') {
            element.variants.forEach(elementVariants => {
                let inputForm = document.createElement('input');
                inputForm.type = 'radio';
                inputForm.name = element.name;
                inputForm.setAttribute('value',elementVariants.value);
                let spanForm = document.createElement('span');
                spanForm.textContent = elementVariants.text;
                elementForm.appendChild(inputForm);
                elementForm.appendChild(spanForm);
                let brForm = document.createElement('br');
                elementForm.appendChild(brForm);
            })
         };
        if (element.kind === 'check') {
            let inputForm = document.createElement('input');
            let brForm = document.createElement('br');
            inputForm.name = element.name;
            inputForm.type = 'checkbox';
            elementForm.appendChild(inputForm);
            elementForm.appendChild(brForm);
         };
        if (element.kind === 'memo') {
            let textAreaForm = document.createElement('textarea');
            textAreaForm.name = element.name;
            textAreaForm.style.cssText = 'width: 250px; height: 55px';
            elementForm.appendChild(textAreaForm);
            let brForm = document.createElement('br');
            elementForm.appendChild(brForm);
         };
        if (element.kind === 'submit') { 
            let inputForm = document.createElement('input');
            inputForm.name = element.name;
            let brForm = document.createElement('br');
            inputForm.type = 'submit';
            inputForm.value = element.label;
            elementForm.appendChild(inputForm);
            elementForm.appendChild(brForm);
        };

    });

};

generationForm(formDef1, document.forms.publicationForm);
generationForm(formDef2, document.forms.registrationForm);