  let changeColor = document.getElementById('changeColor');

  chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
  });

  changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
      chrome.tabs.insertCSS(
          tabs[0].id,
          {code: "* { background-color: black !important; color: white !important;}"}
      );
      chrome.tabs.insertCSS(
          tabs[0].id,
          {
            file: "blur.css"
            //code: "div.image-wrapper img:hover {filter: blur(0px) !important; -webkit-filter: blur(0px) !important;} div.image-wrapper img {filter: blur(8px) !important; -webkit-filter: blur(8px) !important;}"
          }
      )
      $('img[src*="large"]').attr("src", "https://pixel.nymag.com/imgs/daily/intelligencer/2018/09/24/24-bongo-cat.w700.h700.jpg");
    });
  };
