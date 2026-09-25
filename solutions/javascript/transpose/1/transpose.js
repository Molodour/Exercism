//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {
  const lines = input;
  const maxLength = Math.max(...lines.map((line) => line.length));
  const transposed = [];

  for (let i = 0; i < maxLength; i++) {
    let lastLineWithContent = -1;
    for (let l = 0; l < lines.length; l++) {
      if (lines[l].length > i) {
        lastLineWithContent = l;
      }
    }

    let row = '';
    for (let l = 0; l <= lastLineWithContent; l++) {
      row += lines[l][i] !== undefined ? lines[l][i] : ' ';
    }
    transposed.push(row);
  }

  return transposed;
};
