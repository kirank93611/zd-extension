chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'GET_TICKET_SUBJECT') {
      const subject = document.querySelector('.ticket-subject').innerText;
      sendResponse({ subject });
    }
  });
  