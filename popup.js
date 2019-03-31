  
  
  // Restores checkbox state using the preferences stored in chrome.storage.sync
function restoreSettings() {
  // Use default value = false.
  chrome.storage.sync.get({
    darkmode: false,
    blur : false
  }, function (items) {
      document.getElementById("darkmode_toggle").checked = items.darkmode;
      document.getElementById("blur_toggle").checked = items.blur;
  });
}

document.addEventListener('DOMContentLoaded', function () {
  restoreSettings();
    
    //handles darkmode toggle switch updates
  var darkmode_toggle = document.getElementById("darkmode_toggle");
  darkmode_toggle.addEventListener('click', function () {
    if (darkmode_toggle.checked) {
      chrome.storage.sync.set({ darkmode: true });
      console.log("checked");

      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
          tabs[0].id,
          { code: 'document.body.style.backgroundColor = "#000000";' });
        chrome.tabs.insertCSS(
          tabs[0].id,
          { code: "* { background-color: black !important; color: white !important;}" }
        );
      });

    }
    else {
      chrome.storage.sync.set({ darkmode: false });
      console.log("unchecked");

      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
          tabs[0].id,
          { code: 'document.body.style.backgroundColor = ""' });
        chrome.tabs.insertCSS(
          tabs[0].id,
          { code: "* { background-color: white !important; color: black !important;}" });
      });
    }
    
  });

  
    //handles blur toggle switch updates
  var blur_toggle = document.getElementById("blur_toggle");
  blur_toggle.addEventListener('click', function () {
    if (blur_toggle.checked) {
      chrome.storage.sync.set({ blur: true });
      console.log("checked");
    } else {
      chrome.storage.sync.set({ blur: false });
      console.log("unchecked");
    }
    chrome.runtime.sendMessage('groupme loaded');
  });
});