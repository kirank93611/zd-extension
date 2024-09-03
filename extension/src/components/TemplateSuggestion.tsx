import React from 'react';

interface TemplateSuggestionsProps {
  templates: string;
}

const TemplateSuggestions: React.FC<TemplateSuggestionsProps> = ({ templates }) => {
    console.log(templates);

    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <br></br>
      <h1>Suggested Templates</h1>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Content</div>
        <p className="text-gray-700 text-base">
          {templates}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
      </div>
    </div>

      );   
}

export default TemplateSuggestions;
