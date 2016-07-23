// "permissions": ["<all_urls>"]
var injected = injected || (function() {
  var methods = {};

  methods.getButtons = function() {
    var buttons = {};
    var buttonArr = [];
    if (document.getElementsByClassName("endorse-minus")) {
      buttonArr = document.getElementsByClassName("endorsing");
    }

    if (buttonArr.length > 0) {
      for (let i = 0; i < buttonArr.length; i++ ) {
          buttonArr[i].click();
      }
    } else {
      alert("No endorse buttons found!");
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
