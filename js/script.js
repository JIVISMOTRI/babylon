'use strict'

document.addEventListener("DOMContentLoaded", () => {


    /* 
    Начало.
    Поиск элементов reasons.
    Создание массива Data.
    Цикл по элементам reasons:
        Добавление обработчика click:
            При клике:
                Отмена действия по умолчанию.
                Поиск reasons__details.
                    Вставка нового HTML-содержимого на основе Data[index].
    Конец. 
    */
    const reasons = document.querySelectorAll(".reasons__list > .reasons__list-item");
    const Data = {
        // описание причин
        0: {
            title: 'Лучшие цены на рынке',
            image: 'images/reason_0.jpg',
            description: 'Там, где речь идет о качественном переводе, у нас нет конкурентов. Наши цены ориентированы на долгосрочное сотрудничество, а прибыль мы предпочитаем увеличивать за счет значительных оборотов.',
        },
        1: {
            title: 'Быстрота и точность',
            image: 'images/reason_1.jpg',
            description: 'В нашем переводческом бюро мы понимаем, насколько важны сроки. Мы гарантируем выполнение ваших заказов точно в срок, без потери качества. Каждое слово и фраза проверяются на точность, чтобы обеспечить вам идеальный результат. Мы знаем, как важно получать точные и своевременные переводы, и именно это мы вам обеспечим',
        },
        2: {
            title: 'Профессионализм и опыт',
            image: 'images/reason_2.jpg',
            description: 'Наше переводческое бюро состоит из высококвалифицированных специалистов, каждый из которых обладает богатым опытом в своей области. Мы работаем с текстами любой сложности и на различных языках. Наши клиенты могут быть уверены, что их заказы будут выполнены на высшем уровне, с учетом всех тонкостей и особенностей языка.',
        },
        3: {
            title: 'Доступность для всех языков',
            image: 'images/reason_3.jpg',
            description: 'В нашем распоряжении работают переводчики, владеющие широким спектром языков, от самых популярных мировых до редких и специализированных. Это позволяет нам удовлетворить запросы самого требовательного клиента, обеспечивая перевод в любой языковой комбинации.',
        },
        4: {
            title: 'Конфиденциальность',
            image: 'images/reason_4.jpg',
            description: 'Мы понимаем, насколько важна конфиденциальность для наших клиентов. Все переводы выполняются с соблюдением строгих стандартов безопасности. Ваши документы, данные и информация будут защищены на всех этапах работы.',
        }
                    
        }
        const reasons__details = document.querySelector(".reasons__details");
        let currentIndex = 0; // Индекс текущего слайда

        // Функция для отображения слайда по индексу
        function showSlide(index) {
            // Добавляем класс для плавного исчезновения
            reasons__details.classList.add('fade-out');

            // Ждем окончания анимации исчезновения
            setTimeout(() => {
                reasons__details.innerHTML = `
                    <img class="reasons__img" src="${Data[index].image}" alt="time" width="600" height="300">
                    <div>
                        <h4 class="reasons__text">${Data[index].title}</h4>
                        <p class="reasons__description">${Data[index].description}</p>
                    </div>
                `;
                // Удаляем класс fade-out и добавляем fade-in для плавного появления
                reasons__details.classList.remove('fade-out');
                reasons__details.classList.add('fade-in');
            }, 300); // Задержка должна быть равна времени transition
        }

        // Функция для автоматической смены слайдов
        function nextSlide() {
            currentIndex = (currentIndex + 1) % Object.keys(Data).length; // Переключение на следующий слайд, зацикливание
            showSlide(currentIndex);
        }

        // Запускаем автоматическую смену слайдов каждые 5 секунд
        let intervalId = setInterval(nextSlide, 5000);

        // Обработчики кликов по элементам списка (если нужно остановить автоматическую смену)
        for (let index = 0; index < reasons.length; index++) {
            reasons[index].addEventListener('click', (event) => {
                event.preventDefault();
                clearInterval(intervalId); // Останавливаем автоматическую смену
                showSlide(index); // Показываем выбранный слайд
                intervalId = setInterval(nextSlide, 5000); // Возобновляем автоматическую смену
            });
        }

        // Показываем первый слайд при загрузке страницы
        showSlide(currentIndex);


    console.log('Скрипт отработал корректно')
});

    //Объявляем переменную headerMenu и сохраняем в нее header__menu
    const headerMenu = document.querySelector('.header__menu');
    // Если такой элемент существует
    if (headerMenu){
    //Объявляем переменную headerList и сохраняем в нее header__list, чтобы мы могли добавить новые элементы
        const headerList = headerMenu.querySelector('.menu');

    //Создаем объект menuData, который содержит данные для трех ссылок меню.
        const menuData = {
    // Каждая ссылка содержит link (адрес ссылки; если ссылка никуда не ведет, то можно оставить #) и title (текст ссылки).
            link1: {
                link: '#',
                title: 'Об агентстве',
            },
            link2: {
                link: '#',
                title: 'Услуги',
            },
            link3: {
                link: '#',
                title: 'Цены',
            },
            link4: {
                link: '#',
                title: 'Компаниям',
            },
            link6: {
                link: '#',
                title: 'Доставка',
            },
            link7: {
                link: '#',
                title: 'Акции',
            },
            link8: {
                link: '#',
                title: 'Контакты',
            },
        }

        //Создаем функцию createLink, которая будет добавлять ссылку в меню. Внутри функции 2 переменные: UrlLink – адрес, а title — текст ссылки.
        const createLink = (UrlLink, title) =>{
        // создаем переменную  link, которая будет содержать HTML-код ссылки и вставляем в него 2 переменные
            const link = `
            <li class="menu__item"><a href="${UrlLink}" class="menu__link">${title}</a></li>
            `;
            return link;
        }

        // Создаем цикл for и проходим по всем элементам объекта menuData.
        for (const linkItem in menuData) {
        //Получаем данные для ссылки и сохраняем в переменную link.
            const link = menuData[linkItem];
        //Создаем переменную linkIndex и вызываем функцию createLink, куда передаем адрес и заголовок.
            const linkIndex = createLink(link.UrlLink, link.title);
        // С помощью метода insertAdjacentHTML добавляем созданный HTML-код в конец списка headerList.
            headerList.insertAdjacentHTML('beforeend', linkIndex);

        }
    }



    // Show application form on calculate button click
document.addEventListener('DOMContentLoaded', function() {
    const calcBtn = document.querySelector('.description__buttons--calculate');
    const application = document.querySelector('.application');
    if (calcBtn && application) {
        calcBtn.addEventListener('click', function() {
            application.removeAttribute('hidden');
        });
        // Hide form when clicking outside the form area
        application.addEventListener('click', function(e) {
            if (e.target === application) application.setAttribute('hidden', '');
        });
        // Hide form on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') application.setAttribute('hidden', '');
        });
    }
});

    const cardsCon = document.querySelector(".job");
    if (cardsCon) {
        const cardList = cardsCon.querySelector(".job__list");
 
        // Пример URL для получения данных с сервера
        const apiUrl = "js/data.json";

         // Функция для создания карточки
        const createCard = (
            imageUrl,
            iconAlt,
            iconWidth,
            iconHeight,
            title,
            description
        ) => {
            // Шаблонные строки и подстановки
            const card = `
                <li class="job__item" href="#">
                      <img class="job__img" src="${imageUrl}" alt="${iconAlt}" width="${iconWidth}" height="${iconHeight}">
                    <h3 class="job__title">${title}</h3>
                    <p class="job__description">${description}</p>
                </li>
            `;
            return card;
        };
    //СЮДА ВСТАВЬТЕ КОД ИЗ П 4. Загрузка данных с сервера
        // Загрузка данных с сервера
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data); // Данные
                console.log(typeof data); // Тип полученных данных
 
                data.forEach((item) => {
                    const cardElement = createCard(
                        item.image,
                        item.iconAlt,
                        item.iconWidth,
                        item.iconHeight,
                        item.title,
                        item.description
                    );
                    cardList.insertAdjacentHTML("beforeend", cardElement);
                });
            })
            .catch((error) => {
                console.error("Ошибка при загрузке данных:", error);
            });
 

    }
    // JS: скрыть предзагрузчик после загрузки страницы
    window.addEventListener('load', function() {
        document.getElementById('preloader').style.display = 'none';
    });

    // JS: инициализация Swiper
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
