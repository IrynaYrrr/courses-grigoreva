import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ScheduleItem from './ScheduleItem';
import './schedule.scss';

const useStyles = makeStyles({
    container: {
        height: '96vh',

        '@media (max-width: 768px)': {
            height: 'unset'
        },
    },
    grid: {
        height: '96vh',

        '@media (max-width: 768px)': {
            height: 'unset',
            margin: 'unset',
        },
    },
});

const courses = [
    {
        course: {
            classPrefix: 'card0',
            title: 'Курс (оффлайн)',
            name: '«Бухгалтерський облік. Оподаткування»',
            start: 'Щомісяця',
            group: '5390 грн',
            indiv: '8690 грн',
            hours: '85 ак.г.',
            discount: 'Знижка від 7% до 20%',
            proviso0: '*Знижка 7% - якщо запишетесь через сайт',
            proviso1: '*Знижка 10% - при оплаті повної вартості курсу одним платежем',
            proviso2: '*Знижка 20% - при одночасному записі 2-х і більше слухачів',
            program: 'Програма навчання',
            order: 'Записатись',
            courseProgram: [
                '1) Введення у спеціальність',
                '2) Облікова політика підприємства',
                '3) Реєстрація місця отримання доходу (форма 20-ОПП)',
                '4) Готівкові розрахунки',
                '5) Безготівкові розрахунки',
                '6) Розрахунки з підзвітними особами',
                '7) Розрахунки з постачальниками та підрядниками',
                '8) Запаси',
                '9) Розрахунки з виплат працівникам (з розрахунком зарплати та складанням усіх звітів)',
                '10) Необоротні активи',
                '11) Інвентаризація',
                '12) Вексельна форма розрахунків',
                '13) Визнання витрат / доходів',
                '14) Фінансові результати діяльності',
                '15) Поняття про оподаткування',
                '16) Докладний розбір усіх податків відповідно до ПКУ',
                '17) Фінансова допомога, у т.ч. і зворотна',
            ],
            makeStyles: {
                toolbar1: {
                    backgroundColor: '#7e1594',
                    color: 'white',
                },
                toolbar2: {
                    backgroundColor: '#a043eb',
                    color: 'white',
                    height: '150px',
                    marginBottom: '7px',
                },
                button1: {
                    width: '100%',
                    backgroundColor: '#7e1594',
                    color: 'white',
                    '&:hover': { backgroundColor: '#a043eb' },
                },
                button2: {
                    width: '100%',
                    backgroundColor: '#a043eb',
                    color: 'white',
                    height: '45px',
                    '&:hover': { backgroundColor: '#7e1594' },
                },
                typography: {
                    fontSize: '21px',
                    fontWeight: 600,
                },
            },
        },
    },
    {
        course: {
            classPrefix: 'card1',
            title: 'Курс (оффлайн)',
            name: '«Спеціаліст відділу кадрів»',
            start: 'Щомісяця',
            group: '3950 грн',
            indiv: '7100 грн',
            hours: '24 ак.г.',
            discount: 'Знижка від 7% до 20%',
            proviso0: '*Знижка 7% - якщо запишетесь через сайт',
            proviso1: '*Знижка 10% - при оплаті повної вартості курсу одним платежем',
            proviso2: '*Знижка 20% - при одночасному записі 2-х і більше слухачів',
            program: 'Програма навчання',
            order: 'Записатись',
            courseProgram: [
                '1) Робочий час, у т.ч.неповний / скорочений робочий день, нормування праці',
                '2) Види трудових договорів',
                '3) Нетрудові договори',
                '4) Час відпочинку',
                '5) Випробування прийому працювати',
                '6) Штатний розклад',
                '7) Практика / стажування',
                '8) Правила внутрішнього розпорядку',
                '9) Облік робочого часу',
                '10) Віддалена робота та гнучкий графік',
                '11) Посадова інструкція',
                '12) Порядок працевлаштування іноземців',
                '13) Атестація робочих місць',
                '14) Донорство',
                '15) Комісія / Уповноважений із соцстраху',
                '16) Зупинення діяльності',
                '17) Оплата праці',
                '18) Види оплати праці',
                '19) Класифікатор професій',
                '20) Працевлаштування людей з інвалідністю',
                '21) Сумісництво та поєднання',
                '22) Оформлення прийому на роботу',
                '23) Відпустки(всі існуючі)',
                '24) Припинення трудових відносин',
                '25) Перевірки держ.праці',
                '26) Трудова книжка',
                '27) Електронна трудова книжка',
            ],
            makeStyles: {
                toolbar1: {
                    backgroundColor: '#0a0a09',
                    color: 'white',
                },
                toolbar2: {
                    backgroundColor: '#2f2f2b',
                    color: 'white',
                    height: '150px',
                    marginBottom: '7px',
                },
                button1: {
                    width: '100%',
                    backgroundColor: '#0a0a09',
                    color: 'white',
                    '&:hover': { backgroundColor: '#2f2f2b' },
                },
                button2: {
                    width: '100%',
                    backgroundColor: '#2f2f2b',
                    color: 'white',
                    height: '45px',
                    '&:hover': { backgroundColor: '#0a0a09' },
                },
                typography: {
                    fontSize: '21px',
                    fontWeight: 600,
                },
            },
        },
    },
    {
        course: {
            classPrefix: 'card2',
            title: 'Курс (оффлайн)',
            name: '«Академія підприємця (ФОП)»',
            start: 'Щомісяця',
            group: '3950 грн',
            indiv: '6100 грн',
            hours: '28 ак.г.',
            discount: 'Знижка від 7% до 20%',
            proviso0: '*Знижка 7% - якщо запишетесь через сайт',
            proviso1: '*Знижка 10% - при оплаті повної вартості курсу одним платежем',
            proviso2: '*Знижка 20% - при одночасному записі 2-х і більше слухачів',
            program: 'Програма навчання',
            order: 'Записатись',
            courseProgram: [
                '1) Реєстрація ФОП / припинення реєстрації',
                '2) Постановка на облік у податковому органі',
                '3) Ведення обліку доходів/витрат',
                '4) Оформлення змін реєстраційних даних',
                '5) Реєстрація місця отримання доходів (форма 20-ОПП)',
                '6) Незалежна професійна діяльність',
                '7) Загальна система оподаткування',
                '8) Спрощена система оподаткування (докладно кожна група)',
                '9) Найм працівників за трудовим та цивільно-правовим договором',
                '10) Розрахунок зарплати та винагороди за ДПД з прикладом заповнення',
            ],
            makeStyles: {
                toolbar1: {
                    backgroundColor: '#7e1594',
                    color: 'white',
                },
                toolbar2: {
                    backgroundColor: '#a043eb',
                    color: 'white',
                    height: '150px',
                    marginBottom: '7px',
                },
                button1: {
                    width: '100%',
                    backgroundColor: '#7e1594',
                    color: 'white',
                    '&:hover': { backgroundColor: '#a043eb' },
                },
                button2: {
                    width: '100%',
                    backgroundColor: '#a043eb',
                    color: 'white',
                    height: '45px',
                    '&:hover': { backgroundColor: '#7e1594' },
                },
                typography: {
                    fontSize: '21px',
                    fontWeight: 600,
                },
            },
        },
    },
    {
        course: {
            classPrefix: 'card9',
            title: 'Курс (оффлайн)',
            name: '«Помічник / помічник керівника»',
            start: 'На вибір',
            group: 'Нема',
            indiv: '6860 грн',
            hours: '28 ак.г.',
            discount: 'Знижка від 7% до 20%',
            proviso0: '*Знижка 7% - якщо запишетесь через сайт',
            proviso1: '*Знижка 10% - при оплаті повної вартості курсу одним платежем',
            proviso2: '*Знижка 20% - при одночасному записі 2-х і більше слухачів',
            program: 'Програма навчання',
            order: 'Записатись',
            courseProgram: [
                'Блок 1.Особистість помічника:',
                '1) Основні ділові та особисті якості',
                '2) Імідж помічника',
                '3) Схема робочого дня',
                'Блок 2.Організація роботи',
                '1) Прийоми та методи організації',
                '2) Планування роботи',
                '3) Схема робочого дня',
                'Блок 3.Ділові взаємини:',
                '1) З керівником',
                '2) Зі службами підприємства',
                '3) З відвідувачами',
                'Блок 4.Функціональні обов язки:',
                '1) Посадова інструкція',
                '2) Доручення керівника',
                '3) Допомога іншим службам',
                'Блок 5.Телефонні переговори:',
                '1) Правила ведення телефонних переговорів',
                '2) Телефонний етикет',
                '3) Організація телефонних переговорів',
                'Блок 6.Організація спільних заходів:',
                '1) Короткострокові наради у керівника',
                '2) Організація зборів, нарад, семінарів;',
                '3) Презентація',
                'Блок 7.Відрядження:',
                '1) Підготовка відрядження',
                '2) Видання наказу',
                '3) Складання попередньої програми',
                '4) Організація проїзду',
                '5) Організація своєї роботи під час відсутності керівника',
                '6) Підбиття підсумків відрядження',
                'Блок 8.Діловодство:',
                '1) Поняття документообігу та діловодства',
                '2) Офіційно діловий стиль документів',
                '3) Терміни та їх місце у діловодстві',
                '4) Принципи поділу документів',
                '5) Вихідні та внутрішні документи',
                '6) Вхідні документи',
                '7) Правила оформлення документів',
                '8) Організаційно-розпорядчі документи',
                '9) Основні реквізити документів',
                'Блок 9.Інформаційно-довідкові документи:',
                '1) Акти',
                '2) Відгуки',
                '3) Записки',
                '4) Звіти',
                '5) Оголошення',
                '6) Протоколи та виписки з них',
                '7) Листи',
                'Блок 10.Номенклатура справ:',
                '1) Поняття номенклатури справ',
                '2) Основні вимоги до складання',
                '3) Етапи створення',
                '4) Формування справ',
                '5) Правила оформлення',
                '6) Підготовка справ до зберігання',
                'Блок 11.Кадрове діловодство:',
                '1) Обов язкові книги / журнали',
                '2) Документування прийому, перекладу, відпустки та звільнення',
                '3) Штатний розклад',
                '4) Відпустка та графік',
                '5) Трудова книжка',
            ],
            makeStyles: {
                toolbar1: {
                    backgroundColor: '#0a0a09',
                    color: 'white',
                },
                toolbar2: {
                    backgroundColor: '#2f2f2b',
                    color: 'white',
                    height: '150px',
                    marginBottom: '7px',
                },
                button1: {
                    width: '100%',
                    backgroundColor: '#0a0a09',
                    color: 'white',
                    '&:hover': { backgroundColor: '#2f2f2b' },
                },
                button2: {
                    width: '100%',
                    backgroundColor: '#2f2f2b',
                    color: 'white',
                    height: '45px',
                    '&:hover': { backgroundColor: '#0a0a09' },
                },
                typography: {
                    fontSize: '21px',
                    fontWeight: 600,
                },
            },
        },
    },
    {
        course: {
            classPrefix: 'card6',
            title: 'Курс (оффлайн)',
            name: '«Підвищення кваліфікації бухгалтера. Блок 1: Запаси»',
            start: 'На вибір',
            group: 'Нема',
            indiv: '3900 грн',
            hours: '14 ак.г.',
            discount: 'Знижка 7%',
            proviso1: '*Знижка 7% - якщо запишетесь через сайт',
            program: 'Програма навчання',
            order: 'Записатись',
            courseProgram: [
                '1) Оцінка запасів',
                '2) Види вартості',
                '3) Поняття "Переоцінка запасів"',
                '4) Дооцінка',
                '5) Чиста вартість реалізації',
                '6) Уцінка',
                '7) Документування запасів',
                '8) Списання ПММ',
                '9) Відповідальне зберігання запасів',
                '10) Відшкодування збитків покупцю',
                '11) Товарний кредит'
            ],
            makeStyles: {
                toolbar1: {
                    backgroundColor: '#7e1594',
                    color: 'white',
                },
                toolbar2: {
                    backgroundColor: '#a043eb',
                    color: 'white',
                    height: '150px',
                    marginBottom: '7px',
                },
                button1: {
                    width: '100%',
                    backgroundColor: '#7e1594',
                    color: 'white',
                    '&:hover': { backgroundColor: '#a043eb' },
                },
                button2: {
                    width: '100%',
                    backgroundColor: '#a043eb',
                    color: 'white',
                    height: '45px',
                    '&:hover': { backgroundColor: '#7e1594' },
                },
                typography: {
                    fontSize: '17px',
                    fontWeight: 600,
                },
            },
        },
    },
    {
        course: {
            classPrefix: 'card7',
            title: 'Курс (оффлайн)',
            name: '«Підвищення кваліфікації бухгалтера. Блок 2: Вибуття основних засобів. Ремонт та покращення»',
            start: 'На вибір',
            group: 'Нема',
            indiv: '3900 грн',
            hours: '18 ак.г.',
            discount: 'Знижка 7%',
            proviso1: '*Знижка 7% - якщо запишетесь через сайт',
            program: 'Програма навчання',
            order: 'Записатись',
            courseProgram: [
                '1) Поняття вибуття ОЗ',
                '2) Умови списання бухоблік',
                '3) Чиста вартість реалізації ОЗ',
                '4) Продаж об єкта ОЗ, який було отримано безкоштовно',
                '5) Продаж переоцінених ОЗ',
                '6) Визнання доходу від реалізації ОЗ',
                '7) Податковий облік вибуття',
                '8) Залишкова вартість ОЗ',
                '9) Не виробничо-продажна різниця',
                '10) Продаж ОЗ за інвалюту',
                '11) Ліквідаційні заходи в БО та в ПО з ОЗ без його продажу у разі непридатності',
                '12) Списання об єктів ОЗ у БО та в ПО',
                '13) ПДВ при списанні',
                '14) Безоплатна передача ОЗ',
                '15) Внесення об єкта ОЗ до статутного капіталу іншої юрособи',
                '16) Поточний ремонт об єктів ОЗ',
                '17) Ремонт та покращення ОЗ',
                '18) Приклади обліку',
            ],
            makeStyles: {
                toolbar1: {
                    backgroundColor: '#0a0a09',
                    color: 'white',
                },
                toolbar2: {
                    backgroundColor: '#2f2f2b',
                    color: 'white',
                    height: '150px',
                    marginBottom: '7px',
                },
                button1: {
                    width: '100%',
                    backgroundColor: '#0a0a09',
                    color: 'white',
                    '&:hover': { backgroundColor: '#2f2f2b' },
                },
                button2: {
                    width: '100%',
                    backgroundColor: '#2f2f2b',
                    color: 'white',
                    height: '45px',
                    '&:hover': { backgroundColor: '#0a0a09' },
                },
                typography: {
                    fontSize: '17px',
                    fontWeight: 600,
                },
            },
        },
    },
    {
        course: {
            classPrefix: 'card8',
            title: 'Курс (оффлайн)',
            name: '«Підвищення кваліфікації бухгалтера. Блок 3: Відокремлений підрозділ»',
            start: 'На вибір',
            group: 'Нема',
            indiv: '2100 грн',
            hours: '10 ак.г.',
            discount: 'Знижка 7%',
            proviso1: '*Знижка 7% - якщо запишетесь через сайт',
            program: 'Програма навчання',
            order: 'Записатись',
            courseProgram: [
                '1) Поняття "відокремлений" або "структурний" підрозділ',
                '2) Філія, представництво та інші підрозділи',
                '3) Загальні ознаки підрозділів',
                '4) Основні ознаки відокремлених та структурних підрозділів',
                '5) Функції, права та обов язки підрозділів',
                '6) Наявність банківського рахунку та довіреності у керівника',
                '7) Майнова відокремленість',
                '8) Статус платника податків',
                '9) Порядок створення відокремленого підрозділу',
                '10) Етапи розробки та затвердження Положення про відокремлений підрозділ',
                '11) Призначення керівника та видача йому довіреності',
                '12) Облік підрозділу у податковій',
                '13) Зарплата в відокремленому підрозділі та її оподаткування (податковий агент)',
                '14) Податок на прибуток',
                '15) Відокремлений підрозділ та ПДВ',
                '16) Відокремлений підрозділ та трудові відносини',
                '17) Ліквідація відокремленого підрозділу',
            ],
            makeStyles: {
                toolbar1: {
                    backgroundColor: '#7e1594',
                    color: 'white',
                },
                toolbar2: {
                    backgroundColor: '#a043eb',
                    color: 'white',
                    height: '150px',
                    marginBottom: '7px',
                },
                button1: {
                    width: '100%',
                    backgroundColor: '#7e1594',
                    color: 'white',
                    '&:hover': { backgroundColor: '#a043eb' },
                },
                button2: {
                    width: '100%',
                    backgroundColor: '#a043eb',
                    color: 'white',
                    height: '45px',
                    '&:hover': { backgroundColor: '#7e1594' },
                },
                typography: {
                    fontSize: '17px',
                    fontWeight: 600,
                },
            },
        },
    },
    {
        course: {
            classPrefix: 'card4',
            title: 'Курс (оффлайн)',
            name: '«Підвищення кваліфікації бухгалтера. Блок 4: Канцтовари»',
            start: 'На вибір',
            group: 'Нема',
            indiv: '1320 грн',
            hours: '7 ак.г.',
            discount: 'Знижка 7%',
            proviso3: '*Знижка 7% - якщо запишетесь через сайт',
            program: 'Програма навчання',
            order: 'Записатись',
            courseProgram: [
                '1) Придбання канцтоварів',
                '2) Способи обліку ',
                '3) Облікова політика',
                '4) Класифікація канцтоварів:',
                '- у складі виробничих запасів;',
                '- у складі МБП;',
                '- у складі МНМА;',
                '5) Видача та документальне оформлення',
                '6) Виробниче та невиробниче використання канцтоварів',
                '7) Списання та формування фін результату',
                '8) Оподаткування:',
                '- податок на прибуток;',
                '- ПДВ;',
                '- ПДФО і ВЗ;',
            ],
            makeStyles: {
                toolbar1: {
                    backgroundColor: '#0a0a09',
                    color: 'white',
                },
                toolbar2: {
                    backgroundColor: '#2f2f2b',
                    color: 'white',
                    height: '150px',
                    marginBottom: '7px',
                },
                button1: {
                    width: '100%',
                    backgroundColor: '#0a0a09',
                    color: 'white',
                    '&:hover': { backgroundColor: '#2f2f2b' },
                },
                button2: {
                    width: '100%',
                    backgroundColor: '#2f2f2b',
                    color: 'white',
                    height: '45px',
                    '&:hover': { backgroundColor: '#0a0a09' },
                },
                typography: {
                    fontSize: '17px',
                    fontWeight: 600,
                },
            },
        },
    },
    {
        course: {
            classPrefix: 'card10',
            title: 'Курс (оффлайн)',
            name: '«Управління персоналом»',
            start: 'На вибір',
            group: 'Нема',
            indiv: '7800 грн',
            hours: '40 ак.г.',
            discount: 'Знижка від 7% до 20%',
            proviso0: '*Знижка 7% - якщо запишетесь через сайт',
            proviso1: '*Знижка 10% - при оплаті повної вартості курсу одним платежем',
            proviso2: '*Знижка 20% - при одночасному записі 2-х і більше слухачів',
            program: 'Програма навчання',
            order: 'Записатись',
            courseProgram: [
                'Блок 1.Системи управління:',
                '1) Типи систем',
                '2) Переваги та недоліки',
                '3) Практичні рекомендації',
                'Блок 2.Керуючий (менеджер) персоналом:',
                '1) Функції у зв язку з етапами роботи компанії',
                '2) Мета управління',
                '3) Способи управління',
                '4) Кадрова політика',
                'Блок 3.Підбір персоналу:',
                '1) Визначення вимог до кандидатів',
                '2) Методи підбору',
                '3) Співбесіда та аналіз результатів',
                'Блок 4.Адаптація:',
                '1) Трудова адаптація',
                '2) Соціальна адаптація',
                '3) Куратор',
                '4) Документування результатів',
                'Блок 5.Кар єра:',
                '1) Види кар єри',
                '2) План кар єрного зростання',
                '3) Етапи кар єри',
                '4) Аналіз результатів',
                'Блок 6.Підвищення кваліфікації та навчання персоналу:',
                '1) Визначення необхідності підвищення чи навчання',
                '2) Цілі навчання: навіщо, для чого, що хочемо отримати у результаті',
                '3) Форми навчання або підвищення кваліфікації',
                '4) Визначення ефекту проведених заходів',
                '5) Підрахунок ККД',
                'Блок 7.Оцінка персоналу:',
                '1) Способи та методи оцінки',
                '2) Аналіз зайнятості',
                '3) Визначення "незавантажених зайвих" працівників',
                '4) Забезпечення зайнятості персоналу',
                'Блок 8.Мотивація:',
                '1) Аналіз анкет, заповнених прийому працювати',
                '2) Мотивація для персоналу конкретного підприємства',
                '3) Види мотивації',
                '4) Необхідність мотивації',
                'Блок 9.Корпоративна культура:',
                '1) Стихійно сформована культура',
                '2) Визначення основних напрямів розвитку корпоративної культури',
                '3) План формування корпоративної культури',
                '4) Розробка положення про корпоративну культуру',
                '5) Вигоди планової корпоративної культури',
            ],
            makeStyles: {
                toolbar1: {
                    backgroundColor: '#7e1594',
                    color: 'white',
                },
                toolbar2: {
                    backgroundColor: '#a043eb',
                    color: 'white',
                    height: '150px',
                    marginBottom: '7px',
                },
                button1: {
                    width: '100%',
                    backgroundColor: '#7e1594',
                    color: 'white',
                    '&:hover': { backgroundColor: '#a043eb' },
                },
                button2: {
                    width: '100%',
                    backgroundColor: '#a043eb',
                    color: 'white',
                    height: '45px',
                    '&:hover': { backgroundColor: '#7e1594' },
                },
                typography: {
                    fontSize: '21px',
                    fontWeight: 600,
                },
            },
        },
    },
    {
        course: {
            classPrefix: 'card5',
            title: 'Курс (оффлайн)',
            name: '«Логістика транспортно-експедиційної компанії»',
            start: 'На вибір',
            group: 'Нема',
            indiv: '4200 грн',
            hours: '16 ак.г.',
            discount: 'Знижка від 7% до 20%',
            proviso0: '*Знижка 7% - при записі через сайт',
            proviso1: '*Знижка 10% - при оплаті повної вартості курсу одним платежем',
            proviso2: '*Знижка 20% - при одночасному записі 2-х і більше слухачів',
            program: 'Програма навчання',
            order: 'Записатись',
            courseProgram: [
                'Блок 1 Суть транспортної логістики',
                'Блок 2 Основні дійові особи ринку вантажоперевезень',
                'Блок 3 Опис можливих учасників договірних відносин',
                'Блок 4 Види вантажів, їх класифікація, особливості перевезень',
                'Блок 5 Варіанти упаковки та розміщення вантажів у кузові автомобіля',
                'Блок 6 Типи автотранспорту, напівпричепів та граничні габарити',
                'Блок 7 Порядок взаємодій та документообіг договірних відносин',
                'Блок 8 Ціноутворення на ринку вантажоперевезень',
                'Блок 9 Знайомство з транспортними біржами',
                'Блок 10 Зовнішньоекономічна діяльність. Перевезення у міжнародному сполученні',
            ],
            makeStyles: {
                toolbar1: {
                    backgroundColor: '#0a0a09',
                    color: 'white',
                },
                toolbar2: {
                    backgroundColor: '#2f2f2b',
                    color: 'white',
                    height: '150px',
                    marginBottom: '7px',
                },
                button1: {
                    width: '100%',
                    backgroundColor: '#0a0a09',
                    color: 'white',
                    '&:hover': { backgroundColor: '#2f2f2b' },
                },
                button2: {
                    width: '100%',
                    backgroundColor: '#2f2f2b',
                    color: 'white',
                    height: '45px',
                    '&:hover': { backgroundColor: '#0a0a09' },
                },
                typography: {
                    fontSize: '21px',
                    fontWeight: 600,
                },
            },
        },
    },
    {
        course: {
            classPrefix: 'card11',
            title: 'Консультація (оффлайн)',
            name: '«РРО / ПРРО для ФОП та Юр.осіб 2022»',
            start: 'На вибір',
            group: 'Нема',
            indiv: '500 грн',
            hours: '1 година',
            discount: 'Знижка 10%',
            proviso3: '',
            program: 'Програма консультації',
            order: 'Записатись',
            courseProgram: [
                'Індивідуальна програма для кожного'
            ],
            makeStyles: {
                toolbar1: {
                    backgroundColor: '#7e1594',
                    color: 'white',
                },
                toolbar2: {
                    backgroundColor: '#a043eb',
                    color: 'white',
                    height: '150px',
                    marginBottom: '7px',
                },
                button1: {
                    width: '100%',
                    backgroundColor: '#7e1594',
                    color: 'white',
                    '&:hover': { backgroundColor: '#a043eb' },
                },
                button2: {
                    width: '100%',
                    backgroundColor: '#a043eb',
                    color: 'white',
                    height: '45px',
                    '&:hover': { backgroundColor: '#7e1594' },
                },
                typography: {
                    fontSize: '21px',
                    fontWeight: 600,
                },
            },
        },
    },
    {
        course: {
            classPrefix: 'card3',
            title: 'Консультація (оффлайн)',
            name: '«Техніка безпеки та охорона праці»',
            start: 'На вибір',
            group: 'Нема',
            indiv: '450 грн',
            hours: '1 година',
            discount: '-',
            program: 'Програма консультації',
            order: 'Записатись',
            courseProgram: [
                'Індивідуальна програма для кожного'
            ],
            makeStyles: {
                toolbar1: {
                    backgroundColor: '#0a0a09',
                    color: 'white',
                },
                toolbar2: {
                    backgroundColor: '#2f2f2b',
                    color: 'white',
                    height: '150px',
                    marginBottom: '7px',
                },
                button1: {
                    width: '100%',
                    backgroundColor: '#0a0a09',
                    color: 'white',
                    '&:hover': { backgroundColor: '#2f2f2b' },
                },
                button2: {
                    width: '100%',
                    backgroundColor: '#2f2f2b',
                    color: 'white',
                    height: '45px',
                    '&:hover': { backgroundColor: '#0a0a09' },
                },
                typography: {
                    fontSize: '21px',
                    fontWeight: 600,
                },
            },
        },
    },
]

const Schedule1 = () => {
    const classes = useStyles();

    return (
        <div className="schedule" id="schedule">
            <Container
                maxWidth="lg"
                className={classes.container}>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    spacing={3}
                    className={classes.grid}
                >
                    <Grid item>
                        <ScheduleItem courses={courses} course={courses[0].course} />
                    </Grid>
                    <Grid item>
                        <ScheduleItem courses={courses} course={courses[1].course} />
                    </Grid>
                    <Grid item>
                        <ScheduleItem courses={courses} course={courses[2].course} />
                    </Grid>
                    <Grid item>
                        <ScheduleItem courses={courses} course={courses[3].course} />
                    </Grid>

                </ Grid>
            </Container>
        </div>
    );
};

const Schedule2 = () => {
    const classes = useStyles();

    return (
        <div className="schedule">
            <Container
                maxWidth="lg"
                className={classes.container}>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    spacing={3}
                    className={classes.grid}
                >
                    <Grid item>
                        <ScheduleItem courses={courses} course={courses[4].course} />
                    </Grid>
                    <Grid item>
                        <ScheduleItem courses={courses} course={courses[5].course} />
                    </Grid>
                    <Grid item>
                        <ScheduleItem courses={courses} course={courses[6].course} />
                    </Grid>
                    <Grid item>
                        <ScheduleItem courses={courses} course={courses[7].course} />
                    </Grid>
                </ Grid>
            </Container>
        </div>
    );
};

const Schedule3 = () => {
    const classes = useStyles();

    return (
        <div className="schedule">
            <Container maxWidth="lg" className={classes.container}>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    spacing={3}
                    className={classes.grid}
                >
                    <Grid item>
                        <ScheduleItem courses={courses} course={courses[8].course} />
                    </Grid>
                    <Grid item>
                        <ScheduleItem courses={courses} course={courses[9].course} />
                    </Grid>
                    <Grid item>
                        <ScheduleItem courses={courses} course={courses[10].course} />
                    </Grid>
                    <Grid item>
                        <ScheduleItem courses={courses} course={courses[11].course} />
                    </Grid>
                </ Grid>
            </Container>
        </div>
    );
};

export { Schedule1, Schedule2, Schedule3 }
