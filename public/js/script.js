(function () {
  var messagesContainer = document.getElementsByClassName('messages')[0];

  setInterval(function () {
    getContent();
  }, 2000);

  function updateContent (newHtmlcontent) {
    messagesContainer.innerHTML = newHtmlcontent;
  }

  function getContent () {
    var xhr = new XMLHttpRequest();
    xhr.onload = xhr.onload = function () {
      if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
          updateContent(xhr.response);
        } else {
          errHandler(err);
        }
      }
    };
    xhr.open('GET', '/update');
    xhr.send();
  }

  function errHandler (err) {
    console.error(err);
  }
})();
