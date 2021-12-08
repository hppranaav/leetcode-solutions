const plusOne = function (digits) {
  let newNumber = BigInt(BigInt(digits.join("")) + BigInt(1));
  newNumber = newNumber.toString();
  let result = [...newNumber];
  return result;
};
