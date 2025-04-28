'use strict'

document.addEventListener("DOMContentLoaded", () => {
    /* 
    1. Старт
    2. 
    */
    const reasons = document.querySelectorAll(".reasons__list > .reasons__list-item");
    const Data = {
        // каждая ссылка содержит level (название тарифа), price (цена), description (описание тарифа), button (кнопку для оформления заявки).
                    0: {
                        title: 'Лучшие цены на рынке',
                        image: 'images/reason_1.png', 
                        description: 'Там, где речь идет о качественном переводе, у нас нет конкурентов. Наши цены ориентированы на долгосрочное сотрудничество, а прибыль мы предпочитаем увеличивать за счет значительных оборотов.',
                    },
                    1: {
                        title: '– POBO –',
                        image: 'images/reason_5.webp', 
                        description: 'УМК по робототетхнике',
                    },
                    2: {
                        title: '– PROG –',
                        image: 'images/reason_5.webp', 
                        description: 'УМК по программированию',
                    },
                    3: {
                        title: '– PROG –',
                        image: 'images/reason_5.webp', 
                        description: 'УМК по программированию',
                    },
                    4: {
                        title: 'Оперативность в работе',
                        image: 'images/reason_5.webp', 
                        description: 'УМК по программированию',
                    }
                    
                }
        
    for (let index = 0; index <reasons.length; index++)
    {
    reasons[index].addEventListener('click', (event) => {
        event.preventDefault();
        console.log("Клик по причине, показываем причину")
        const reasons__details = document.querySelector(".reasons__details");
        reasons__details.innerHTML = `
        <img class="reasons__img" src="${Data[index].image}" alt="time" width="200" height="150">
                    <h4 class="reasons__text">${Data[index].title}</h4>
                    <p class="reasons__description">${Data[index].description}</p>
    `;

    });
}

    console.log('Скрипт отработал корректно')
});