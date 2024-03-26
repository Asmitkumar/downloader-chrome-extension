// background.js

// Listen for changes in the storage
chrome.storage.onChanged.addListener(function (changes, namespace) {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    if (key === 'textContent') {
      console.log('Received message:', newValue);
    }
  }
});

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.navigate) {
    chrome.tabs.update({ url: request.navigate });
  }
});

// Listen for actions like download from the content script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.download) {
    chrome.downloads.download({ url: request.download });
  }
});