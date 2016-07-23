var injectUnendorsed = injectUnendorsed || (function() {
  var methods = {};

  methods.getUnendorseButtons = function() {
    var buttons = {};
    var buttonArr = [];
    buttonArr = document.getElementsByClassName("endorsed-by-viewer");

    if (buttonArr.length > 0) {
      while (!buttonArr.length >= 0) {
        buttonArr[0].children[1].children[1].click();
      }
    } else {
      alert("No endorsements found!");
    }
  };

  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    var data = {};

    if (methods.hasOwnProperty(request.method)) {
      data = methods[request.method]();
      sendResponse({ data: data });
      return true;
    }
  });

  return true;
})();
