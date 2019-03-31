/*chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    console.log("hello");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.insertCSS(
            tabs[0].id,
            {
               file: "blur.css",
               // code: "div.image-wrapper img:hover {filter: blur(0px); -webkit-filter: blur(0px) ;} div.image-wrapper img {filter: blur(8px); -webkit-filter: blur(8px);}"
            }
        );
    });

});

*/

chrome.runtime.sendMessage('groupme loaded');
