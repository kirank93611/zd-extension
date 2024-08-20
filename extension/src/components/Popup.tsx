import React, { useState, useEffect } from 'react';

const Popup = () => {
  const [templates, setTemplates] = useState([]);
  const [tabGroups, setTabGroups] = useState([]);

  useEffect(() => {
    // Fetch templates and tab groups on load
    fetch('<http://localhost:3000/api/templates>')
      .then((res) => res.json())
      .then(setTemplates);
    fetch('<http://localhost:3000/api/tab-groups>')
      .then((res) => res.json())
      .then(setTabGroups);
  }, []);

  return (
    <div>
      <h2>Ticket Suggestions</h2>
      <ul>{templates.map((t:any) => <li>{t.subject}</li>)}</ul>
      <h2>Tab Group Manager</h2>
      <ul>{tabGroups.map((g:any) => <li>{g.issueType}</li>)}</ul>
    </div>
  );
};

export default Popup;
