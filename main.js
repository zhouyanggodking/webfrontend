var count = 0
setInterval(() => {
  const content = document.querySelector(".content");
  content.innerHTML = count;
  count++;
}, 1000);

window.addEventListener('load', e => {
  registerServiceWorker();
})

async function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (e) {
      console.error("service worked is not supported in current browser");
    }
  }
}