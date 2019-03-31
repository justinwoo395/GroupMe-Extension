
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
