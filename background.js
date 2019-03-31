// chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#000000'}, function() {
      console.log("got jhere");
      $('img[src*="large"]').attr("src", "https://pixel.nymag.com/imgs/daily/intelligencer/2018/09/24/24-bongo-cat.w700.h700.jpg");
   
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
    console.log("got jhere");
    $('img[src*="large"]').attr("src", "https://pixel.nymag.com/imgs/daily/intelligencer/2018/09/24/24-bongo-cat.w700.h700.jpg");
 // });
