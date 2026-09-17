//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (phrase) => {
  const cleaned = phrase.replace(/[^A-Za-z\s-]/g, '');
  const words = cleaned.split(/[\s-]+/);
  let ABR = '';
  for (let i = 0; i < words.length; i++) {
    ABR += words[i][0].toUpperCase();
  }
  return ABR;
};
