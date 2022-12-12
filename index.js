const suras = {
  1: 'аль-Фатиха',
  2: 'аль-Бакара',
  3: 'аль Имран',
  4: 'ан-Ниса',
  5: 'аль-Маида',
  6: 'аль-Анам',
  7: 'аль-Араф',
  8: 'аль-Анфаль',
  9: 'ат-Тавба',
  10: 'Юнус',
  11: 'Худ',
  12: 'Юсуф',
  13: 'ар-Рад',
  14: 'Ибрахим',
  15: 'аль-Хиджр',
  16: 'ан-Нахль',
  17: 'аль-Исра',
  18: 'аль-Кахф',
  19: 'Марьям',
  20: 'Та Ха',
  21: 'аль-Анбия',
  22: 'аль-Хаджж',
  23: 'аль-Муминун',
  24: 'ан-Нур',
  25: 'аль-Фуркан',
  26: 'аш-Шуара',
  27: 'ан-Намль',
  28: 'аль-Касас',
  29: 'аль-Анкабут',
  30: 'ар-Рум',
  31: 'Лукман',
  32: 'ас-Саджда',
  33: 'аль-Ахзаб',
  34: 'Саба',
  35: 'Фатир',
  36: 'Йа Син',
  37: 'ас-Саффат',
  38: 'Сад',
  39: 'аз-Зумар',
  40: 'Гафир',
  41: 'Фуссилят',
  42: 'аш-Шура',
  43: 'аз-Зухруф',
  44: 'ад-Духан',
  45: 'аль-Джасия',
  46: 'аль-Ахкаф',
  47: 'Мухаммад',
  48: 'аль-Фатх',
  49: 'аль-Худжурат',
  50: 'Каф',
  51: 'аз-Зарият',
  52: 'ат-Тур',
  53: 'ан-Наджм',
  54: 'аль-Камар',
  55: 'ар-Рахман',
  56: 'аль-Вакиа',
  57: 'аль-Хадид',
  58: 'аль-Муджадиля',
  59: 'аль-Хашр',
  60: 'аль-Мумтахана',
  61: 'ас-Сафф',
  62: 'аль-Джумуа',
  63: 'аль-Мунафикун',
  64: 'ат-Тагабун',
  65: 'ат-Таляк',
  66: 'ат-Тахрим',
  67: 'аль-Мульк',
  68: 'аль-Калям',
  69: 'аль-Хакка',
  70: 'аль-Мааридж',
  71: 'Нух',
  72: 'аль-Джинн',
  73: 'аль-Муззаммиль',
  74: 'аль-Муддассир',
  75: 'аль-Кияма',
  76: 'аль-Инсан',
  77: 'аль-Мурсалят',
  78: 'ан-Наба',
  79: 'ан-Назиат',
  80: 'Абаса',
  81: 'ат-Таквир',
  82: 'аль-Инфитар',
  83: 'аль-Мутаффифин',
  84: 'аль-Иншикак',
  85: 'аль-Бурудж',
  86: 'ат-Тарик',
  87: 'аль-Аля',
  88: 'аль-Гашия',
  89: 'аль-Фаджр',
  90: 'аль-Баляд',
  91: 'аш-Шамс',
  92: 'аль-Ляйль',
  93: 'ад-Духа',
  94: 'аш-Шарх',
  95: 'ат-Тин',
  96: 'аль-Аляк',
  97: 'аль-Кадр',
  98: 'аль-Баййина',
  99: 'аз-Зальзаля',
  100: 'аль-Адият',
  101: 'аль-Кариа',
  102: 'ат-Такасур',
  103: 'аль-Аср',
  104: 'аль-Хумаза',
  105: 'аль-Филь',
  106: 'Курайш',
  107: 'аль-Маун',
  108: 'аль-Кавсар',
  109: 'аль-Кафирун',
  110: 'ан-Наср',
  111: 'аль-Масад',
  112: 'аль-Ихляс',
  113: 'аль-Фаляк',
  114: 'ан-Нас',
};

const repeatCountArray = () => {
  if (!localStorage.repeatCount) {
    localStorage.repeatCount = JSON.stringify({});
  }

  return JSON.parse(localStorage.repeatCount);
};

const repeatCount = (suraNumber) => {
  if (!repeatCountArray()[suraNumber]) {
    localStorage.repeatCount = JSON.stringify({ ...repeatCountArray(), [suraNumber]: 0 });
  }

  return repeatCountArray()[suraNumber];
};

const getCurrentSuraNumber = () => {
  const suraTitle = document.querySelector('#sura').innerHTML;
  return suraTitle.includes('.') ? +suraTitle.split('.')[0] : 0;
};

const getMinMax = () => {
  const minInput = document.querySelector('#min');
  const maxInput = document.querySelector('#max');

  const minValue = +minInput.value || 1;
  const maxValue = +maxInput.value || 114;

  return { minInput, maxInput, minValue, maxValue };
};

function randomInteger(min, max) {
  // случайное число от min до max
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const doStuf = () => {
  document.querySelector('#sura').innerHTML = '&nbsp;';

  const { minValue, maxValue } = getMinMax();

  const suraNumber = randomInteger(minValue, maxValue);
  const count = repeatCount(suraNumber);
  const selectedSuraName = suras[suraNumber];

  document.querySelector('#sura').innerHTML = `${suraNumber}. ${selectedSuraName}`;
  document.querySelector('#repeat-count').innerHTML = count;
};

const setLimitHandler = () => {
  const { minInput, maxInput } = getMinMax();

  function setLimit() {
    const { minValue, maxValue } = getMinMax();

    minInput.max = maxValue;
    maxInput.min = minValue;
  }

  minInput.onchange = setLimit;
  maxInput.onchange = setLimit;
};

const initEventHandlers = () => {
  document.querySelector('#repeat-count').addEventListener('click', (e) => {
    if (e.target.innerHTML === '&nbsp;') {
      return;
    }
    const suraNumber = getCurrentSuraNumber();
    const incrementedCount = repeatCount(suraNumber) + 1;
    e.target.innerHTML = incrementedCount;
    localStorage.repeatCount = JSON.stringify({ ...repeatCountArray(), [suraNumber]: incrementedCount });
  });
};

const resetCount = () => {
  const suraNumber = getCurrentSuraNumber();
  if (!suraNumber) {
    return;
  }
  document.querySelector('#repeat-count').innerHTML = 0;
  localStorage.repeatCount = JSON.stringify({ ...repeatCountArray(), [suraNumber]: 0 });
};

setLimitHandler();
initEventHandlers();
doStuf();
