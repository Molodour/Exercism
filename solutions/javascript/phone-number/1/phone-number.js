//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (input) => {
  if (/[a-zA-Z]/.test(input)) {
    throw new Error('Letters not permitted');
  }
  if (/[^0-9+()\-. ]/.test(input)) {
    throw new Error('Punctuations not permitted');
  }

  let digits = input.replace(/\D/g, '');

  if (digits.length < 10) {
    throw new Error('Must not be fewer than 10 digits');
  }
  if (digits.length > 11) {
    throw new Error('Must not be greater than 11 digits');
  }
  if (digits.length === 11) {
    if (digits[0] !== '1') {
      throw new Error('11 digits must start with 1');
    }
    digits = digits.slice(1);
  }
  if (digits[0] === '0') {
    throw new Error('Area code cannot start with zero');
  }
  if (digits[0] === '1') {
    throw new Error('Area code cannot start with one');
  }
  if (digits[3] === '0') {
    throw new Error('Exchange code cannot start with zero');
  }
  if (digits[3] === '1') {
    throw new Error('Exchange code cannot start with one');
  }
  return digits;
};
