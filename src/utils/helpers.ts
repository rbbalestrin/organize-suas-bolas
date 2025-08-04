export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);

export const isMobile = (): boolean =>
  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

export const debounce = (fn: Function, delay: number) => {
  var t: number;
  return function () {
    clearTimeout(t);
    t = setTimeout(fn, delay);
  };
};

/**
 * Returns a "random" number, given a range...
 * @param min
 * @param max
 * @returns
 */
export const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Set an interrupt...
 * @param ms
 * @returns
 */
export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Validates whether a string is valid JSON...
 * @param json
 * @returns
 */
export const isValidJson = (json: string): boolean => {
  try {
    JSON.parse(json);
    return true;
  } catch (_) {
    return false;
  }
};

/**
 * Copy text to the clipboard...
 * @param {*} text
 */
export const copyToClipboard = (text: string = "") => {
  navigator.clipboard.writeText(text);
};

/**
 * Function that, given a color, returns a darker color.
 * @param color
 * @param percent
 * @returns
 */
export function lightenDarkenColor(color: string, percent: number) {
  let R: number = parseInt(color.substring(1, 3), 16);
  let G: number = parseInt(color.substring(3, 5), 16);
  let B: number = parseInt(color.substring(5, 7), 16);

  R = parseInt(((R * (100 + percent)) / 100).toString(), 10);
  G = parseInt(((G * (100 + percent)) / 100).toString(), 10);
  B = parseInt(((B * (100 + percent)) / 100).toString(), 10);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  let RR = R.toString(16).length === 1 ? "0" + R.toString(16) : R.toString(16);
  let GG = G.toString(16).length === 1 ? "0" + G.toString(16) : G.toString(16);
  let BB = B.toString(16).length === 1 ? "0" + B.toString(16) : B.toString(16);

  return "#" + RR + GG + BB;
}

/**
 * Function that generates a list of random indices for an array,
 * depending on the total number of random values ​​required and
 * the size of the array...
 * @param total
 * @param arraySize
 * @returns
 */
export const getUniqueRandomIndicesFromArray = (
  total: number,
  arraySize: number
) => {
  const indices: number[] = [];
  let tmpCounter = 0;

  if (total <= arraySize) {
    do {
      const index = randomNumber(0, arraySize - 1);

      if (!indices.includes(index)) {
        indices.push(index);

        if (indices.length === total) {
          break;
        }
      }

      tmpCounter++;

      // Prevent it from getting into an infinite loop
      if (tmpCounter === 100) {
        break;
      }
    } while (1);
  }

  return indices;
};
