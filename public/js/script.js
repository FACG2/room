(function () {
  var messagesContainer = document.getElementsByClassName('messages')[0];

  setInterval(getContent, 2000);

  function updateContent (newHtmlcontent) {
    if (messagesContainer.innerHTML !== newHtmlcontent) {
      messagesContainer.innerHTML = newHtmlcontent;
    }
  }

  function getContent () {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        updateContent(xhr.response);
      }
    };
    xhr.open('GET', '/update');
    xhr.send();
  }

  function errHandler (err) {
    console.error(err);
  }
})();
