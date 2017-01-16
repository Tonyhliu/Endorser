var injectUnendorsed = injectUnendorsed || (function() {
  var methods = {};

  methods.getUnendorseButtons = function() {
    if (document.querySelectorAll('.pv-skills-section__additional-skills[aria-expanded="false"]').length > 0) {
      // expands skills section
      document.getElementsByClassName('pv-skills-section__additional-skills')[0].click();
    }
    var unendorseArr = (document.querySelectorAll('[data-control-name="unendorse"]'));
    if (unendorseArr.length > 0) {
      for (let i = 0; i < unendorseArr.length; i++ ) {
          unendorseArr[i].click();
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
