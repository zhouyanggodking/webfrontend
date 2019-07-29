console.log('content script')

const control = document.querySelector('[contenteditable="true"]');
console.log(control);
const width = control.offsetWidth;
const height = control.offsetHeight;

const parent = control.parentNode;

const clone = control.cloneNode(true);
clone.style.position = 'relative';


console.log(control.offsetWidth)

const div = document.createElement('div');
div.classList = 'sh-ai';
div.style = 'position: absolute; pointer-events: none;';

const child = document.createElement('div');
child.classList = 'overlay';
child.style = `position: relative;width: ${width}px; height: ${height}px;background-color: #ffff0010;`;
div.appendChild(child);

parent.insertBefore(div, control);
parent.append(clone)

const canvas = document.createElement('canvas');

control.addEventListener('input', () => {
  const control = document.querySelector('[contenteditable="true"]'); 

  const width = control.offsetWidth;
  const height = control.offsetHeight;
  child.style = `position: relative; width: ${width}px; height: ${height}px;background-color: #ffff0010;`;

  const text = control.innerHTML;
  console.log(text)
  console.log(control.innerText)
  const range = [9, 14];

  const part1 = text.substring(0, range[0]);
  const part2 = text.substring(range[0], range[1]);
  const part3 = text.substring(range[1]);

  console.log(part1, part2, part3)
  clone.innerHTML = `${part1}<span class="king">${part2}</span>${part3}`;

  const king = clone.querySelector('.king')
  console.log(king)
  console.log(king.clientHeight)

  const firstChild = child.firstChild;
  console.log(firstChild)
  if (firstChild) {
    child.removeChild(firstChild);
  }

  const focus = document.createElement('div');
  focus.addEventListener('click', () => {
    console.log('click')
    //focus.style = `position: absolute; width: ${king.offsetWidth}px; height: ${king.offsetHeight}px; top: ${king.offsetTop}px; left: ${king.offsetLeft}px; background-color: #00ffff40;pointer-events:none;`;
  });

  focus.addEventListener('mouseenter', () => {
    console.log('hover')
    focus.style = `position: absolute; width: ${king.offsetWidth}px; height: ${king.offsetHeight}px; top: ${king.offsetTop}px; left: ${king.offsetLeft}px; background-color: #00ffff40;pointer-events: auto;`;
  });

  focus.addEventListener('mouseout', () => {
    console.log('out')
    focus.style = `position: absolute; width: ${king.offsetWidth}px; height: ${king.offsetHeight}px; top: ${king.offsetTop}px; left: ${king.offsetLeft}px; background-color: #0000ff40;pointer-events:auto;`;
  });
  focus.style = `position: absolute; width: ${king.offsetWidth}px; height: ${king.offsetHeight}px; top: ${king.offsetTop}px; left: ${king.offsetLeft}px; background-color: #00ffff40;pointer-events:none;`;
  focus.classList = 'test';  
  
  child.appendChild(focus)
});
