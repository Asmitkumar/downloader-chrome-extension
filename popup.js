// popup.js

// Logic to add any 3rd script
// Function to execute the script when the button is clicked
function handleAutomateButtonClick() {
    // Dynamically load the scriptButton.js file
    const script = document.createElement('script');
    script.src = 'scriptButton.js';
    document.body.appendChild(script);
}

document.addEventListener('DOMContentLoaded', function () {
    // Your code here
    // Add event listener to the button
    document.getElementById('automateButton').addEventListener('click', handleAutomateButtonClick);
});
// Logic to add any 3rd script END

// Pass any text content to be loaded in the popup
window.onload = function () {
    chrome.storage.local.get('textContent', function (data) {
        if (data.textContent) {
            document.getElementById("matches").innerHTML += `<li>${data.textContent}</li>`;
        }
    });
};

// Logic to automate custom downloads
document.addEventListener('DOMContentLoaded', function () {
    var newButton = document.querySelector("#automateDownload");

    newButton.addEventListener("click", function () {
        // Send a message to the content script
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "handleSiteA" });
        });
    });
});