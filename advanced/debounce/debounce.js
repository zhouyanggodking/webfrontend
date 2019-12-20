const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => fn.apply(null, args), delay);
  }
}

// test

const test = () => console.log('king')

const de = debounce(test, 1000);

de();
de();
de();
de();

