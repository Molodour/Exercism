//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    this.series = series;
  }

  slices(sliceLength) {
    if ( this.series.length === 0){
      throw new Error ('series cannot be empty');
    }
    if (sliceLength > this.series.length){
     throw new Error('slice length cannot be greater than series length');
    }
    
    if ( sliceLength === 0){
      throw new Error ('slice length cannot be zero');
    }
    if ( sliceLength < 0){
      throw new Error ('slice length cannot be negative');
    }
    
    let n = [];
    for (let i = 0; i <= this.series.length - sliceLength; i++) {
      const slice = this.series.slice(i, i + sliceLength).split('').map(Number);
      n.push(slice);
    }
    return n;
  }
}
