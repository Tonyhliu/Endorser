var showCSS = showCSS || (function() {
  var methods = {};

  methods.getCSS = function() {
    var nodes = document.body.getElementsByTagName("*");

    for (var i = 0; i < nodes.length; i++) {
      nodes[i].style.border = "1px solid orangered";
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
