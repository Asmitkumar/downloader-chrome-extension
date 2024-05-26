// contentScript.js

// Function to extract text from the webpage
function automateDownloads() {
  console.log("Working on site A");

  console.log('Current sitename:', window.location.hostname);
  // Check the current site
  if (window.location.hostname === 'www.homedepot.com') {
    // handleSiteA(); 
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
      if (request.action === "handleSiteA") {
        handleSiteA();
      }
    });
  }
}

// Function for handling specific site
function handleSiteA() {
  var element = document.querySelector("#zone-a > div > div > div.product--sticky.col__12-12.col__7-12--sm > div.zone-card.u--paddingBottom.overflow.u__clearfix > div.col__12-12.col__12-12--sm > div > div.product-details__badge-title--wrapper > span > h1");

  // Print the entire element
  console.log(element);

  // Print the inner HTML of the element
  console.log(element.innerHTML);

  // Print the text content of the element
  console.log(element.textContent);

  if (element) {
    var textContent = element.textContent;
    console.log('Sending message:', textContent);
    chrome.storage.local.set({ textContent: textContent });

    // Navigate to the download/any page URL
    // Change according to the requirement
    chrome.runtime.sendMessage({ navigate: "https://jsonviewer.stack.hu/" });

    // Download file
    chrome.runtime.sendMessage({ download: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" });

  } else {
    console.log("Element not found");
  }
}

// Call the automateDownloads function when the content script is executed
automateDownloads();