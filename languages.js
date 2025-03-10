export const languages = {
    russian: {
        name: "Russian",
        words: ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань", "Нижний Новгород", "Челябинск", "Красноярск", "Самара", "Уфа", "Ростов-на-Дону", "Омск", "Краснодар", "Воронеж", "Пермь", "Волгоград", "Донецк", "Саратов", "Тюмень", "Тольятти", "Барнаул", "Ижевск", "Махачкала", "Хабаровск", "Ульяновск", "Иркутск", "Владивосток", "Ярославль", "Кемерово", "Томск", "Набережные Челны", "Севастополь", "Ставрополь", "Оренбург", "Новокузнецк", "Рязань", "Балашиха", "Пенза", "Чебоксары", "Липецк", "Калининград", "Астрахань", "Тула", "Киров", "Сочи", "Курск", "Мариуполь", "Улан-Удэ", "Тверь", "Магнитогорск", "Луганск", "Сургут", "Брянск", "Иваново", "Якутск", "Владимир", "Симферопoль", "Белгород", "Макеевка", "Нижний Тагил", "Калуга", "Чита", "Грозный", "Волжский", "Смоленск", "Подольск", "Саранск", "Вологда", "Курган", "Череповец", "Орёл", "Архангельск", "Владикавказ", "Нижневартовск", "Йошкар-Ола", "Стерлитамак", "Мурманск", "Кострома", "Новороссийск", "Тамбов", "Химки", "Мытищи", "Нальчик", "Таганрог", "Нижнекамск", "Благовещенск", "Горловка", "Комсомольск-на-Амуре", "Петрозаводск", "Королёв", "Шахты", "Энгельс", "Великий Новгород", "Люберцы", "Братск", "Старый Оскол", "Ангарск", "Сыктывкар", "Дзержинск", "Псков", "Орск", "Красногорск", "Армавир", "Абакан", "Балаково", "Бийск", "Южно-Сахалинск", "Одинцово", "Уссурийск", "Прокопьевск", "Рыбинск", "Норильск", "Волгодонск", "Сызрань", "Петропавловск-Камчатский", "Каменск-Уральский", "Новочеркасск", "Альметьевск", "Златоуст", "Северодвинск", "Хасавюрт", "Керчь", "Домодедово", "Мелитополь", "Салават", "Миасс", "Копейск", "Пятигорск", "Электросталь", "Майкоп", "Находка", "Березники", "Коломна", "Щёлково", "Серпухов", "Ковров", "Нефтекамск", "Кисловодск", "Батайск", "Рубцовск", "Обнинск", "Кызыл", "Дербент", "Нефтеюганск", "Назрань", "Каспийск", "Долгопрудный", "Новочебоксарск", "Новомосковск", "Ессентуки", "Невинномысск", "Октябрьский", "Раменское", "Первоуральск", "Михайловск", "Реутов", "Черкесск", "Жуковский", "Димитровград", "Пушкино", "Артём", "Камышин", "Евпатория", "Муром", "Ханты-Мансийск", "Новый Уренгой", "Северск", "Бердянск", "Алчевск", "Орехово-Зуево", "Арзамас", "Ногинск", "Новошахтинск", "Бердск", "Элиста", "Сергиев Посад", "Видное", "Ачинск", "Тобольск", "Ноябрьск", "Елец", "Зеленодольск", "Северодонецк", "Новокуйбышевск", "Воткинск", "Железногорск", "Междуреченск", "Воскресенск", "Гатчина", "Серов", "Саров", "Ленинск-Кузнецкий", "Сарапул", "Магадан", "Мичуринск", "Соликамск", "Мурино", "Чехов", "Клин", "Бузулук", "Глазов", "Канск", "Великие Луки", "Каменск-Шахтинский", "Губкин", "Киселёвск", "Ейск", "Ивантеевка", "Лобня", "Азов", "Анапа", "Бугульма", "Геленджик", "Ухта", "Юрга", "Усть-Илимск", "Всеволожск", "Новоуральск", "Кузнецк", "Бор", "Кинешма", "Озёрск", "Новотроицк", "Кропоткин", "Чайковский", "Черногорск", "Усолье-Сибирское", "Ялта", "Дубна", "Балашов", "Елабуга", "Новоалтайск", "Выборг", "Егорьевск", "Верхняя Пышма", "Наро-Фоминск", "Минеральные Воды", "Троицк", "Чапаевск", "Минусинск", "Биробиджан", "Шадринск", "Белово", "Туймазы", "Сертолово", "Буйнакск", "Ишим", "Кирово-Чепецк", "Анжеро-Судженск", "Феодосия", "Дмитров", "Сосновый Бор", "Горно-Алтайск", "Лыткарино", "Павловский Посад", "Белорецк", "Ступино", "Гудермес", "Ишимбай", "Донской", "Котельники", "Кстово", "Урус-Мартан", "Георгиевск", "Клинцы", "Нягань", "Славянск-на-Кубани", "Кунгур", "Сунжа", "Туапсе", "Когалым", "Белогорск", "Лениногорск", "Россошь", "Алексин", "Борисоглебск", "Фрязино", "Гуково", "Ревда", "Прохладный", "Берёзовский", "Белебей", "Чистополь", "Заречный", "Будённовск", "Кумертау", "Сальск", "Дзержинский", "Лабинск", "Асбест", "Искитим", "Павлово", "Александров", "Воркута", "Сибай", "Мелеуз", "Котлас", "Михайловка", "Избербаш", "Краснотурьинск", "Белореченск", "Ржев", "Лесосибирск", "Тихорецк", "Тихвин", "Шуя", "Полевской", "Щёкино", "Шали", "Вольск", "Крымск", "Зеленогорск", "Лиски", "Лысьва", "Нерюнгри", "Волжск", "Вязьма", "Тимашёвск", "Гусь-Хрустальный", "Краснокаменск", "Кириши", "Снежинск", "Жигулёвск", "Анадырь", "Магас", "Салехард", "Нарьян-Мар", "Херсон", "Республика", "област"],
        transliterate: function(word) {
            return iuliia.translate(word, iuliia.WIKIPEDIA);
        },
    },
    greek: {
        name: "Greek",
        words: ["γειά", "κόσμος", "ευχαριστώ", "αντίο", "παρακαλώ"],
        transliterate: function(word) {
            const charMap = {
                "α": "a", "β": "v", "γ": "g", "δ": "d", "ε": "e",
                "ζ": "z", "η": "i", "θ": "th", "ι": "i", "κ": "k",
                "λ": "l", "μ": "m", "ν": "n", "ξ": "x", "ο": "o",
                "π": "p", "ρ": "r", "σ": "s", "ς": "s", "τ": "t",
                "υ": "y", "φ": "f", "χ": "ch", "ψ": "ps", "ω": "o",
                "Α": "A", "Β": "V", "Γ": "G", "Δ": "D", "Ε": "E",
                "Ζ": "Z", "Η": "I", "Θ": "Th", "Ι": "I", "Κ": "K",
                "Λ": "L", "Μ": "M", "Ν": "N", "Ξ": "X", "Ο": "O",
                "Π": "P", "Ρ": "R", "Σ": "S", "Τ": "T", "Υ": "Y",
                "Φ": "F", "Χ": "Ch", "Ψ": "Ps", "Ω": "O"
            };
            return word.split('').map(letter => charMap[letter] || letter).join('');
        }
    }
};

export function pickRandomWord(lang) {
    const language = languages[lang];
    if (!language || language.words.length === 0)
        return "";
    return language.words[Math.floor(Math.random() * language.words.length)];
}

export function transliterateWord(lang, word) {
    const language = languages[lang];
    if (!language)
        return "";
    return language.transliterate(word);
}
  