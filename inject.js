// "permissions": ["<all_urls>"]
var injected = injected || (function() {
  var methods = {};

  methods.getButtons = function() {
    // if greater than 0, means its hidden
    if (document.querySelectorAll('.pv-skills-section__additional-skills[aria-expanded="false"]').length > 0) {
      // expands skills section
      document.getElementsByClassName('pv-skills-section__additional-skills')[0].click();
    }
    var endorseArr = (document.querySelectorAll('[data-control-name="endorse"]'));
    if (endorseArr.length > 0) {
      for (let i = 0; i < endorseArr.length; i++ ) {
          endorseArr[i].click();
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
