// popup.js

document.addEventListener('DOMContentLoaded', function() {
  // Koden inde i denne blok vil blive udført, når DOM'en er fuldt indlæst
  console.log('DOM fully loaded');

  document.getElementById('autofillButton').addEventListener('click', function() {
    console.log('Button clicked!');
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'autofill' });
    });
  });
});
