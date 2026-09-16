//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, candidates) => {
  const normalize = (str) => str.toLowerCase().split('').sort().join('');
  const target = normalize(word);

  return candidates.filter((candidate) => {
    return (
      normalize(candidate) === target &&
      candidate.toLowerCase() !== word.toLowerCase()
    );
  });
};
