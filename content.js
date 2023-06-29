

document.addEventListener("mouseup", function () {
  chrome.runtime.sendMessage({
    action: "showPopup",
    selectedText: 'selectedText'
  });
});

