chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'sampleContextMenu',
    title: 'Sample Context Menu',
    contexts: ['page', 'selection']
  });
  // chrome.contextMenus.create({
  //   id: 'sampleContextMenu2',
  //   title: 'Sample Context Menu2',
  //   contexts: ['page', 'selection']
  // });

  chrome.contextMenus.onClicked.addListener((info, tab) => {
    chrome.browserAction.setBadgeText({ text: '10' });
    // chrome.browserAction.setBadgeBackgroundColor({ color: 'yellow' });
    console.log(info)
    console.log(tab)
    // chrome.tabs.executeScript(
    //   { code: 'document.body.style.backgroundColor="orange"' }
    // );
  });

});

chrome.omnibox.onInputEntered.addListener(function(text) {
  // Encode user input for special characters , / ? : @ & = + $ #
  var newURL = 'https://www.bing.com/search?q=' + encodeURIComponent(text);
  chrome.tabs.create({ url: newURL });
});
