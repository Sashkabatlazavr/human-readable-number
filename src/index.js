module.exports = function toReadable(number) {
  const textOnes = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const textTens = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const hundreds = Math.floor(number / 100);
  const tens = Math.floor((number % 100) / 10);
  const ones = number % 10;
  if (number === 0) {
    return textOnes[0];
  }
  if (number < 20 && number > 0) {
    return textOnes[number];
  }
  if (number > 19 && number < 100) {
    if (ones > 0) {
      return `${textTens[tens - 2]} ${textOnes[ones]}`;
    }
    return textTens[tens - 2];
  }
  if (number > 100) {
    const remainder = number % 100;
    if (remainder === 0) {
      return `${textOnes[hundreds]} hundred`;
    }
    if (remainder < 20) {
      return `${textOnes[hundreds]} hundred ${textOnes[remainder]}`;
    }
    if (ones > 0) {
      return `${textOnes[hundreds]} hundred ${textTens[tens - 2]} ${textOnes[ones]}`;
    }
    return `${textOnes[hundreds]} hundred ${textTens[tens - 2]}`;
  }
  return 'one hundred';
};
