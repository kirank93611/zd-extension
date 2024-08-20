chrome.action.onClicked.addListener((tab) => {
    chrome.storage.sync.get('tabGroups', (data) => {
      const groups = data.tabGroups || [];
      groups.forEach((group) => {
        group.urls.forEach((url) => chrome.tabs.create({ url }));
      });
    });
  });
  