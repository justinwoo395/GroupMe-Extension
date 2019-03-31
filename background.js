chrome.runtime.onMessage.addListener(
  function(message, sender, response) {
    console.log('received');
    if (message == 'groupme loaded') {
      chrome.storage.sync.get({
        darkmode: false,
        blur : false
      }, function (items) {
        if (items.blur) {
          chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.insertCSS(
              tabs[0].id,
              { file: 'blur.css' }
            );
          });
        } else {
          chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.insertCSS(
              tabs[0].id,
              { file: 'noblur.css' });
          });
        }
      });
    }
  }
);

var adCount = 0;

chrome.webRequest.onBeforeRequest.addListener(
	function logging(details) {
    adCount += 1;
		console.log("blocking:", details.url);
    console.log("# of ads yoten:" + adCount);
		return {cancel: true };
	},
	{urls: blocked_domains},
	["blocking"]
);

chrome.storage.sync.set({color: '#000000'}, function() {
});
chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      pageUrl: {hostEquals: 'web.groupme.com'},
    })
    ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});

