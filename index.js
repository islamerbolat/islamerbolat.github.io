const suras = {
  1: 'Әл-Фатиха',
  2: 'Әл-Бақара',
  3: 'Әли Имран',
  4: 'Ән-Ниса',
  5: 'Әл-Мәида',
  6: 'Әл-Анғам',
  7: 'Әл-Ағраф',
  8: 'Әл-Анфәл',
  9: 'Әт-Тәубә',
  10: 'Юнус',
  11: 'Һуд',
  12: 'Юсуф',
  13: 'Әр-Рағд',
  14: 'Ибраһим',
  15: 'Әл-Хижр',
  16: 'Ән-Нахл',
  17: 'Әл-Исра',
  18: 'Әл-Кәһф',
  19: 'Мәриям',
  20: 'Таһа',
  21: 'Әл-Әнбия',
  22: 'Әл-Хаж',
  23: 'Әл-Муминун',
  24: 'Ан-Нұр',
  25: 'Әл-Фурқан',
  26: 'Әш-Шуғара',
  27: 'Ән-Нәмл',
  28: 'Әл-Қасас',
  29: 'Әл-Анкәбут',
  30: 'Рум',
  31: 'Лұқман',
  32: 'Сәждә',
  33: 'Әл-Ахзаб',
  34: 'Сәбә',
  35: 'Фатыр',
  36: 'Ясин',
  37: 'Әс-Саффат',
  38: 'Сад',
  39: 'Әз-Зумар',
  40: 'Ғафир',
  41: 'Фуссиләт',
  42: 'Әш-Шура',
  43: 'Әз-Зухруф',
  44: 'Ад-Духан',
  45: 'Әл-Джәсия',
  46: 'Әл-Ахқаф',
  47: 'Мұхаммед',
  48: 'Әл-Фатх',
  49: 'Әл-Хужурат',
  50: 'Қаф',
  51: 'Әз-Зарият',
  52: 'Әт-Тур',
  53: 'Ән-Нәжм',
  54: 'Әл-Қамар',
  55: 'Әр-Рахман',
  56: 'Әл-Уақиға',
  57: 'Әл-Хадид',
  58: 'Әл-Муджадалә',
  59: 'Әл-Хашр',
  60: 'Әл-Мумтәхинә',
  61: 'Әс-Сафф',
  62: 'Әл-Жума',
  63: 'Әл-Мунафиқун',
  64: 'Әт-Тәғабун',
  65: 'Әт-Талақ',
  66: 'Әт-Тахрим',
  67: 'Әл-Мулк',
  68: 'Әл-Қалам',
  69: 'Әл-Хаққа',
  70: 'Әл-Мағариж',
  71: 'Нұһ',
  72: 'Әл-Жин',
  73: 'Әл-Муззәммил',
  74: 'Әл-Муддәссир',
  75: 'Әл-Қияма',
  76: 'Әл-Инсан',
  77: 'Әл-Мурсәләт',
  78: 'Ән-Нәбә',
  79: 'Ән-Назиғат',
  80: 'Абәсә',
  81: 'Әт-Тәкуир',
  82: 'Әл-Инфитар',
  83: 'Әл-Мутаффифин',
  84: 'Әл-Иншиқақ',
  85: 'Әл-Буруж',
  86: 'Әт-Тариқ',
  87: 'Әл-Ағлә',
  88: 'Әл-Ғашия',
  89: 'Әл-Фәжр',
  90: 'Әл-Бәләд',
  91: 'Әш-Шәмс',
  92: 'Әл-Ләйл',
  93: 'Әд-Духа',
  94: 'Әш-Шарх',
  95: 'Әт-Тин',
  96: 'Әл-Аләқ',
  97: 'Әл-Қадр',
  98: 'Әл-Бәйинә',
  99: 'Әз-Зилзәлә',
  100: 'Әл-Адият',
  101: 'Әл-Қариға',
  102: 'Әл-Тәкәсур',
  103: 'Әл-Аср',
  104: 'Әл-Һумәзә',
  105: 'Әл-Фил',
  106: 'Құрайш',
  107: 'Әл-Мағун',
  108: 'Әл-Кәусәр',
  109: 'Әл-Кәфирун',
  110: 'Ән-Наср',
  111: 'Әл-Мәсад',
  112: 'Әл-Ихлас',
  113: 'Әл-Фалақ',
  114: 'Ән-Нас',
};

const getSingleIsChecked = () => document.querySelector('#single').checked;

const getRepeatCounts = () => JSON.parse(localStorage.repeatCount || '{}');

const setRepeatCounts = (obj) => {
  localStorage.repeatCount = JSON.stringify(obj);
};

const getRepeatCountOfSura = (suraNumber) => {
  const repeatsCounts = getRepeatCounts();

  return repeatsCounts[suraNumber] || 0;
};

const getCurrentSuraNumber = () => {
  const suraTitle = document.querySelector('#sura').innerHTML;
  return +suraTitle.split('.')[0] || 0;
};

const getMinMax = () => {
  const minInput = document.querySelector('#min');
  const maxInput = document.querySelector('#max');

  const singleSura = getSingleIsChecked();
  const minValue = +minInput.value || 1;
  const maxValue = singleSura ? minValue : +maxInput.value || 114;

  return { minInput, maxInput, minValue, maxValue };
};

function randomInteger(min, max) {
  // случайное число от min до max
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const doStuf = (suraNumberInitialValue) => {
  document.querySelector('#sura').innerHTML = '';

  const { minValue, maxValue } = getMinMax();

  const suraNumber = suraNumberInitialValue || randomInteger(minValue, maxValue);
  const count = getRepeatCountOfSura(suraNumber);
  const selectedSuraName = suras[suraNumber];

  if (!selectedSuraName) {
    return;
  }

  document.querySelector('#sura').innerHTML = `${suraNumber}. ${selectedSuraName}`;
  document.querySelector('#repeat-count').innerHTML = count;
  localStorage.suraNumber = suraNumber;
  updateSummary();
};

const setLimitHandler = () => {
  const { minInput, maxInput } = getMinMax();

  function setLimit() {
    const { minValue, maxValue } = getMinMax();

    minInput.max = maxValue;
    maxInput.min = minValue;

    if (minValue > maxValue || minValue > 114 || maxValue > 114) {
      return;
    }

    localStorage.max = maxValue;
    localStorage.min = minValue;
  }

  minInput.onchange = setLimit;
  maxInput.onchange = setLimit;
};

const onSingleCheck = (suraNumberInitialValue) => {
  const checked = getSingleIsChecked();
  if (checked) {
    document.querySelector('#max').setAttribute('disabled', true);
    doStuf(suraNumberInitialValue);
  } else {
    document.querySelector('#max').removeAttribute('disabled');
  }

  localStorage.single = checked;
};

const onRepeatCountBtnClick = () => {
  const suraNumber = getCurrentSuraNumber();
  const incrementedCount = getRepeatCountOfSura(suraNumber) + 1;
  document.querySelector('#repeat-count').innerHTML = incrementedCount;
  setRepeatCounts({ ...getRepeatCounts(), [suraNumber]: incrementedCount });
  updateSummary();
};

const resetCount = () => {
  const suraNumber = getCurrentSuraNumber();
  if (!suraNumber) {
    return;
  }
  document.querySelector('#repeat-count').innerHTML = 0;
  setRepeatCounts({ ...getRepeatCounts(), [suraNumber]: 0 });
  updateSummary();
};

const updateSummary = () => {
  const summaryHTML = Object.keys(suras)
    .filter((num) => getRepeatCounts()[num])
    .map((num) => `<div>${num}. ${suras[num]}: ${getRepeatCounts()[num]}</div>`)
    .join('');

  document.querySelector('#summary').innerHTML = summaryHTML;

  if (summaryHTML) {
    document.querySelector('#resetAll').removeAttribute('hidden');
  } else {
    document.querySelector('#resetAll').setAttribute('hidden', true);
  }
};

const resetAll = () => {
  setRepeatCounts({});
  updateSummary();
  document.querySelector('#repeat-count').innerHTML = 0;
};

const setInitialValues = () => {
  const single = localStorage.single === 'true';
  document.querySelector('#single').checked = single;
  onSingleCheck(+localStorage.suraNumber);

  const min = localStorage.min || 1;
  document.querySelector('#min').value = min;

  const max = localStorage.max || 114;
  document.querySelector('#max').value = max;
};

setInitialValues();
setLimitHandler();
doStuf(+localStorage.suraNumber);
