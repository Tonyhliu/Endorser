var hideCSS = hideCSS || (function() {
  var methods = {};

  methods.hideCSS = function() {
    var nodes = document.body.getElementsByTagName("*");

    for (var i = 0; i < nodes.length; i++) {
      nodes[i].style.border = "none";
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
