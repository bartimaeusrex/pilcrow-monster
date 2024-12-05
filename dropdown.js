  function clickHandler() {
    var targetId, srcElement, targetElement;
    srcElement = window.event.srcElement;
    if (srcElement.className == "Dropdown") {
       targetId = srcElement.id + "content";
       targetElement = document.all(targetId);
  
       if (targetElement.style.display == "none") {
          targetElement.style.display = "";
       } else {
          targetElement.style.display = "none";
       }
    }
  }
  
  document.onclick = clickHandler;