document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('checkPage').addEventListener("click", () => {
    chrome.tabs.query({
      "active": true,
      "currentWindow": true },
      function getButtons(tab) {
        injectedMethod(tab[0], 'getButtons', function (response) {
          return true;
        });
    });
  });

  document.getElementById('check2').addEventListener("click", () => {
    chrome.tabs.query({
      "active": true,
      "currentWindow": true },
      function getUnendorseButtons(tab) {
        injectedMethod2(tab[0], 'getUnendorseButtons', function (response) {
          return true;
        });
    });
  });

  document.getElementById('checkCSS').addEventListener("click", () => {
    chrome.tabs.query({
      "active": true,
      "currentWindow": true },
      function getCSS(tab) {
        injectedMethod3(tab[0], 'getCSS', function (response) {
          return true;
        });
    });
  });

  document.getElementById('uncheckCSS').addEventListener("click", () => {
    chrome.tabs.query({
      "active": true,
      "currentWindow": true },
      function hideCSS(tab) {
        injectedMethod4(tab[0], 'hideCSS', function (response) {
          return true;
        });
    });
  });

});

function injectedMethod (tab, method, callback) {
  chrome.tabs.executeScript(tab.id, { file: 'inject.js' }, function(){
    chrome.tabs.sendMessage(tab.id, { method: method }, callback);
  });
}

function injectedMethod2 (tab, method, callback) {
  chrome.tabs.executeScript(tab.id, { file: 'injectUnendorse.js' }, function(){
    chrome.tabs.sendMessage(tab.id, { method: method }, callback);
  });
}

function injectedMethod3 (tab, method, callback) {
  chrome.tabs.executeScript(tab.id, { file: 'showCSS.js' }, function(){
    chrome.tabs.sendMessage(tab.id, { method: method }, callback);
  });
}

function injectedMethod4 (tab, method, callback) {
  chrome.tabs.executeScript(tab.id, { file: 'hideCSS.js' }, function(){
    chrome.tabs.sendMessage(tab.id, { method: method }, callback);
  });
}
