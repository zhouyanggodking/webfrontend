console.log('content script');
// document.body.style.backgroundColor = 'aqua';

let startOffset = 2;
let endOffset = 6;

// for contenteditable=true, for range set, see https://developer.mozilla.org/en-US/docs/Web/API/Range/setStart
const editor = document.querySelector('.editor').childNodes[0];
let range = document.createRange();
range.setStart(editor, startOffset);
range.setEnd(editor, endOffset);

const rects = range.getClientRects();
const rect = rects[0]
console.log(rect);   // range bounding rect

const highlightDiv = document.createElement('div');
highlightDiv.style = `position: fixed; left: ${rect.left}px; top: ${rect.top}px;width:${rect.width}px; height: ${rect.height}px; background-color: #ffff0080;`;
document.body.appendChild(highlightDiv);
