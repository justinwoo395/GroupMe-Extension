// chrome.runtime.onInstalled.addListener(function() {
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
    console.log("got here");
    
    

 // });


