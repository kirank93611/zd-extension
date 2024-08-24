import React from 'react';

interface TemplateSuggestionsProps {
  templates: string;
}

const TemplateSuggestions: React.FC<TemplateSuggestionsProps> = ({ templates }) => {
    console.log(templates);

    return (
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-700">Suggested Email Templates</h2>
          <h2>
            {templates}
          </h2>
        </div>
      );

     
}

export default TemplateSuggestions;
