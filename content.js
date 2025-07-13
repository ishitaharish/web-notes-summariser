document.addEventListener("mouseup", () => {
  const selectedText = window.getSelection().toString().trim();
  if (selectedText.length > 0) {
    chrome.runtime.sendMessage({
      type: "TEXT_SELECTED",
      data: selectedText
    });
  }
});

  //script is injected and loaded to all urls, 
  //captures the text selected by user 
