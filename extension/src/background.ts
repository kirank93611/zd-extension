// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.action === 'getSuggestedTemplates') {
//       // Get the content from the active tab
//       chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//         chrome.tabs.sendMessage(tabs[0].id, { action: 'getContent' }, (response) => {
//           if (response && response.content) {
//             // Send the content to your email template suggester component
//             chrome.runtime.sendMessage({ action: 'suggestTemplates', content: response.content });
//           }
//         });
//       });
//     }
//   });