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
            name: '«Бухгалтерский учёт. Налогообложение»',
            start: 'Ежемесячно',
            group: '5390 грн',
            indiv: '8690 грн',
            hours: '85 ак.ч.',
            discount: 'Скидка от 7% до 20%',
            proviso0: '*Скидка 7% - при записи через сайт',
            proviso1: '*Скидка 10% - при оплате полной стоимости курса одним платежом',
            proviso2: '*Скидка 20% - при одновременной записи 2-х и более слушателей',
            program: 'Программа обучения',
            order: 'Записаться',
            courseProgram: [
                '1) Введение в специальность',
                '2) Учетная политика предприятия',
                '3) Регистрация места получения дохода (форма 20-ОПП)',
                '4) Наличные расчеты',
                '5) Безналичные расчеты',
                '6) Расчеты с подотчетными лицами',
                '7) Расчеты с поставщиками и подрядчиками',
                '8) Запасы',
                '9) Расчеты по выплатам работникам (с расчетом зарплаты и составлением всех отчетов)',
                '10) Необоротные активы',
                '11) Инвентаризация',
                '12) Вексельная форма расчётов',
                '13) Признание расходов / доходов',
                '14) Финансовые результаты деятельности',
                '15) Понятие о налогообложении',
                '16) Подробный разбор всех налогов в соответствии с НКУ',
                '17) Финансовая помощь, в т.ч. и возвратная',
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
            name: '«Специалист отдела кадров»',
            start: 'Ежемесячно',
            group: '3950 грн',
            indiv: '7100 грн',
            hours: '24 ак.ч.',
            discount: 'Скидка от 7% до 20%',
            proviso0: '*Скидка 7% - при записи через сайт',
            proviso1: '*Скидка 10% - при оплате полной стоимости курса одним платежом',
            proviso2: '*Скидка 20% - при одновременной записи 2-х и более слушателей',
            program: 'Программа обучения',
            order: 'Записаться',
            courseProgram: [
                '1) Рабочее время, в т.ч.неполный / сокращенный рабочий день, нормирование труда',
                '2) Виды трудовых договоров',
                '3) Нетрудовые договоры',
                '4) Время отдыха',
                '5) Испытание при приеме на работу',
                '6) Штатное расписание',
                '7) Практика / стажировка',
                '8) Правила внутреннего распорядка',
                '9) Учет рабочего времени',
                '10) Удаленная работа и гибкий график',
                '11) Должностная инструкция',
                '12) Порядок трудоустройства иностранцев',
                '13) Аттестация рабочих мест',
                '14) Донорство',
                '15) Комиссия / Уполномоченный по соцстраху',
                '16) Приостановление деятельности',
                '17) Оплата труда',
                '18) Виды оплаты труда',
                '19) Классификатор профессий',
                '20) Трудоустройство людей с инвалидностью',
                '21) Совместительство и совмещение',
                '22) Оформление приема на работу',
                '23) Отпуска(все существующие)',
                '24) Прекращение трудовых отношений',
                '25) Проверки гос.труда',
                '26) Трудовая книжка',
                '27) Электронная трудовая книжка',
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
            name: '«Академия предпринимателя (ФОП)»',
            start: 'Ежемесячно',
            group: '3950 грн',
            indiv: '6100 грн',
            hours: '28 ак.ч.',
            discount: 'Скидка от 7% до 20%',
            proviso0: '*Скидка 7% - при записи через сайт',
            proviso1: '*Скидка 10% - при оплате полной стоимости курса одним платежом',
            proviso2: '*Скидка 20% - при одновременной записи 2-х и более слушателей',
            program: 'Программа обучения',
            order: 'Записаться',
            courseProgram: [
                '1) Регистрация ФЛП / прекращение регистрации',
                '2) Постановка на учёт в налоговом органе',
                '3) Ведение учета доходов / расходов',
                '4) Оформление изменений регистрационных данных',
                '5) Регистрация места получения доходов (форма 20-ОПП)',
                '6) Независимая профессиональная деятельность',
                '7) Общая система налогообложения',
                '8) Упрощённая система налогообложения (подробно каждая группа)',
                '9) Найм работников по трудовому и гражданско-правовому договору',
                '10) Расчёт зарплаты и вознаграждения по ГПД с примером заполнения',
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
            name: '«Помощник / ассистент руководителя»',
            start: 'На выбор',
            group: 'Нет',
            indiv: '6860 грн',
            hours: '28 ак.ч.',
            discount: 'Скидка от 7% до 20%',
            proviso0: '*Скидка 7% - при записи через сайт',
            proviso1: '*Скидка 10% - при оплате полной стоимости курса одним платежом',
            proviso2: '*Скидка 20% - при одновременной записи 2-х и более слушателей',
            program: 'Программа обучения',
            order: 'Записаться',
            courseProgram: [
                'Блок 1 личность помощника:',
                '1) Основные деловые и личностные качества',
                '2) Имидж помощника',
                '3) Схема рабочего дня',
                'Блок 2 Организация работы',
                '1) Приёмы и методы организации',
                '2) Планирование работы',
                '3) Схема рабочего дня',
                'Блок 3 Деловые взаимоотношения:',
                '1) С руководителем',
                '2) Со службами предприятия',
                '3) С посетителями',
                'Блок 4  Функциональные обязанности:',
                '1) Должностная инструкция',
                '2) Поручения руководителя',
                '3) Помощь другим службам',
                'Блок 5 Телефонные переговоры:',
                '1) Правила ведения телефонных переговоров',
                '2) Телефонный этикет',
                '3) Организация телефонных переговоров',
                'Блок 6 Организация общих мероприятий:',
                '1) Краткосрочные совещания у руководителя',
                '2) Организация собраний, совещаний, семинаров;',
                '3) Презентация',
                'Блок 7 Командировки:',
                '1) Подготовка командировки',
                '2) Издание приказа',
                '3) Составление  предварительной программы',
                '4) Организация проезда',
                '5) Организация своей работы во время отсутствия руководителя',
                '6) Подведение итогов командировки',
                'Блок 8 Делопроизводство:',
                '1) Понятие документооборота и делопроизводства',
                '2) Официально деловой стиль документов',
                '3) Термины и их место  в делопроизводстве',
                '4) Принципы деления документов',
                '5) Исходящие и внутренние документы',
                '6) Входящие документы',
                '7) Правила оформления документов',
                '8) Организационно-распорядительные документы',
                '9) Основные реквизиты документов',
                'Блок 9 Информационно-справочные документы:',
                '1) Акты',
                '2) Отзывы',
                '3) Записки',
                '4) Отчеты',
                '5) Объявления',
                '6) Протоколы и выписки из них',
                '7) Письма',
                'Блок 10 Номенклатура дел:',
                '1) Понятие номенклатуры дел',
                '2) Основные требования к составлению',
                '3) Этапы создания',
                '4) Формирование дел',
                '5) Правила оформления',
                '6) Подготовка дел к хранению',
                'Блок 11 Кадровое делопроизводство:',
                '1) Обязательные  книги/журналы',
                '2) Документирования приёма, перевода, отпуска и увольнения',
                '3) Штатное расписание',
                '4) Отпуск и график',
                '5) Трудовая книжка',
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
            name: '«Повышение квалификации бухгалтера. Блок 1: Запасы»',
            start: 'На выбор',
            group: 'Нет',
            indiv: '3900 грн',
            hours: '14 ак.ч.',
            discount: 'Скидка 7%',
            proviso1: '*Скидка 7% - при записи через сайт',
            program: 'Программа обучения',
            order: 'Записаться',
            courseProgram: [
                '1) Оценка запасов',
                '2) Виды стоимости',
                '3) Понятие "Переоценка запасов"',
                '4) Дооценка',
                '5) Чистая стоимость реализации',
                '6) Уценка',
                '7) Документирование запасов',
                '8) Списание ГСМ',
                '9) Ответственное хранение запасов',
                '10) Возмещение убытков покупателю',
                '11) Товарный кредит'
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
            name: '«Повышение квалификации бухгалтера. Блок 2: Выбытие основных средств. Ремонт и улучшение»',
            start: 'На выбор',
            group: 'Нет',
            indiv: '3900 грн',
            hours: '18 ак.ч.',
            discount: 'Скидка 7%',
            proviso1: '*Скидка 7% при записи через сайт',
            program: 'Программа обучения',
            order: 'Записаться',
            courseProgram: [
                '1) Понятие выбытия ОС',
                '2) Условия списания бухучет',
                '3) Чистая стоимость реализации ОС',
                '4) Продажа объекта ОС, который был получен бесплатно',
                '5) Продажа переоцененных ОС',
                '6) Признание дохода от реализации ОС',
                '7) Налоговый учёт выбытия',
                '8) Остаточная стоимость ОС',
                '9) Не производственно-продажная разница',
                '10) Продажа ОС за инвалюту',
                '11) Ликвидационные мероприятия в БУ и в НУ по ОС без его продажи в случае непригодности',
                '12) Cписание объектов ОС в БУ и в НУ',
                '13) НДС при списании',
                '14) Безвозмездная передача ОС',
                '15) Внесение объекта ОС в уставный капитал другого юрлица',
                '16) Текущий ремонт объектов ОС',
                '17) Ремонт и улучшение ОС',
                '18) Примеры учёта',
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
            name: '«Повышение квалификации бухгалтера. Блок 3: Обособленное подразделение»',
            start: 'На выбор',
            group: 'Нет',
            indiv: '2100 грн',
            hours: '10 ак.ч.',
            discount: 'Скидка 7%',
            proviso1: '*Скидка 7% при записи через сайт',
            program: 'Программа обучения',
            order: 'Записаться',
            courseProgram: [
                '1) Понятие "обособленное"  или  "структурное" подразделение',
                '2) Филиал, представительство и  другие подразделения',
                '3) Общие признаки подразделений',
                '4) Основные признаки обособленных и структурных подразделений',
                '5) Функции, права и обязанности подразделений',
                '6) Наличие банковского счета и доверенности у руководителя',
                '7) Имущественная обособленность',
                '8) Статус налогоплательщика',
                '9) Порядок создания обособленного подразделения',
                '10) Этапы разработки и утверждения Положения об обособленном подразделении',
                '11) Назначение руководителя и выдача ему доверенности',
                '12) Учёт подразделения в налоговой',
                '13) Зарплата в обособленном подразделении и её налогообложение ( налоговый агент)',
                '14) Налог на прибыль',
                '15) Обособленное подразделение и НДС',
                '16) Обособленное подразделение и трудовые отношения',
                '17) Ликвидация обособленного подразделения',

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
            name: '«Повышение квалификации бухгалтера. Блок 4: Канцтовары»',
            start: 'На выбор',
            group: 'Нет',
            indiv: '1320 грн',
            hours: '7 ак.ч.',
            discount: 'Скидка 7%',
            proviso3: '*Скидка 7% при записи через сайт',
            program: 'Программа обучения',
            order: 'Записаться',
            courseProgram: [
                '1) Приобретение канцтоваров',
                '2) Способы учёта ',
                '3) Учётная политика',
                '4) Классификация канцтоваров:',
                '- в составе производственных запасов;',
                '- в составе МБП;',
                '- в составе МНМА;',
                '5) Выдача и документальное оформление',
                '6) Производственное и непроизводственное использование канцтоваров',
                '7) Списание и формирование фин результата',
                '8) Налогообложение:',
                '- налог на прибыль;',
                '- НДС;',
                '- НДФЛ и ВС;',
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
            name: '«Управление персоналом»',
            start: 'На выбор',
            group: 'Нет',
            indiv: '7800 грн',
            hours: '40 ак.ч.',
            discount: 'Скидка от 7% до 20%',
            proviso0: '*Скидка 7% - при записи через сайт',
            proviso1: '*Скидка 10% - при оплате полной стоимости курса одним платежом',
            proviso2: '*Скидка 20% - при одновременной записи 2-х и более слушателей',
            program: 'Программа обучения',
            order: 'Записаться',
            courseProgram: [
                'Блок 1 Системы управления:',
                '1) Типы систем',
                '2) Преимущества и недостатки',
                '3) Практические рекомендации',
                'Блок 2 Управляющий (менеджер) персоналом:',
                '1) Функции в связи с этапами работы компании',
                '2) Цели управления',
                '3) Способы управления',
                '4) Кадровая политика',
                'Блок 3 Подбор персонала:',
                '1) Определение требований к кандидатам',
                '2) Методы подбора',
                '3) Собеседование и анализ его результатов',
                'Блок 4 Адаптация:',
                '1) Трудовая адаптация',
                '2) Социальная адаптация',
                '3) Куратор',
                '4) Документирование результатов',
                'Блок 5 Карьера:',
                '1) Виды карьеры',
                '2) План карьерного роста',
                '3) Этапы карьеры',
                '4) Анализ результатов',
                'Блок 6 Повышение квалификации и обучение персонала:',
                '1) Определение необходимости повышения или обучения',
                '2) Цели обучения: зачем, для чего, что хотим получить в итоге',
                '3) Формы обучения или повышения  квалификации',
                '4) Определение эффекта проведенных мероприятий',
                '5) Подсчет КПД',
                'Блок 7 Оценка персонала:',
                '1) Способы и методы оценки',
                '2) Анализ занятости',
                '3) Определение "незагруженных лишних" работников',
                '4) Обеспечение занятости персонала',
                'Блок 8 Мотивация:',
                '1) Анализ анкет, заполненных при приёме на работу',
                '2) Мотивация для персонала конкретного предприятия',
                '3) Виды мотивации',
                '4) Необходимость мотивации',
                'Блок 9 Корпоративная культура:',
                '1) Стихийно сложившаяся культура',
                '2) Определение основных направлений развития корпоративной культуры',
                '3) План формирования корпоративной культуры',
                '4) Разработка положения о корпоративной культуре',
                '5) Выгоды плановой корпоративной культуры',
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
            name: '«Логистика транспортно-экспедиционной компании»',
            start: 'На выбор',
            group: 'Нет',
            indiv: '4200 грн',
            hours: '16 ак.ч.',
            discount: 'Скидка от 7% до 20%',
            proviso0: '*Скидка 7% - при записи через сайт',
            proviso1: '*Скидка 10% - при оплате полной стоимости курса одним платежом',
            proviso2: '*Скидка 20% - при одновременной записи 2-х и более слушателей',
            program: 'Программа обучения',
            order: 'Записаться',
            courseProgram: [
                'Блок 1 Суть транспортной логистики',
                'Блок 2 Основные действующие лица рынка грузоперевозок',
                'Блок 3 Описание возможных участников договорных отношений',
                'Блок 4 Виды грузов, их классификация, особенности перевозок',
                'Блок 5 Способы упаковки и размещения грузов в кузове автомобиля',
                'Блок 6 Типы автотранспорта, полуприцепов и предельные габариты',
                'Блок 7 Порядок взаимодействий и документооборот договорных отношений',
                'Блок 8  Ценообразование на рынке грузоперевозок',
                'Блок 9  Знакомство с транспортными биржами',
                'Блок 10  Внешнеэкономическая деятельность. Перевозки в международном сообщении',
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
            title: 'Консультация (оффлайн)',
            name: '«РРО / ПРРО для ФОП и Юр.лиц 2022»',
            start: 'На выбор',
            group: 'Нет',
            indiv: '500 грн',
            hours: '1 час',
            discount: 'Скидка 10%',
            proviso3: '',
            program: 'Программа консультации',
            order: 'Записаться',
            courseProgram: [
                'Индивидуальная программа для каждого'
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
            title: 'Консультация (оффлайн)',
            name: '«Техника безопасности и охрана труда»',
            start: 'На выбор',
            group: 'Нет',
            indiv: 'Да',
            hours: '1 час',
            discount: '-',
            program: 'Программа консультации',
            order: 'Записаться',
            courseProgram: [
                'Индивидуальная программа для каждого'
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
