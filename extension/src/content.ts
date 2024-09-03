chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getContent') {
      // Get content from the current page
      const content = document.body.textContent;
      sendResponse({ content });
    }
  });