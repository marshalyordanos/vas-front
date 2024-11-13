// extensions.jsu
Number.prototype.truncateNum = function () {
  return Math.floor(this * 100) / 100;
};
Number.prototype.formatNum = function () {
  let num = this.toString().split(".");
  let integerPart = num[0];
  let decimalPart = num[1] || "";
  let formattedIntegerPart = "";
  for (let i = 0; i < integerPart.length; i++) {
    formattedIntegerPart += integerPart[i];
    if (
      (integerPart.length - i - 1) % 3 === 0 &&
      i !== integerPart.length - 1
    ) {
      formattedIntegerPart += ",";
    }
  }
  return formattedIntegerPart + (decimalPart ? "." + decimalPart : "");
};
Number.prototype.toFixedWithoutRounding = function (precision) {
  if (precision === 0) {
    return this.toString();
  }

  const strNum = this.toString();
  const decimalIndex = strNum.indexOf(".");

  if (decimalIndex === -1) {
    // If the number is an integer, append ".00"
    return strNum + ".00";
  } else {
    // If the number has a decimal part, round it to the specified precision
    const roundedDecimal = parseFloat(strNum).toFixed(precision);
    return roundedDecimal.toString();
  }
};
