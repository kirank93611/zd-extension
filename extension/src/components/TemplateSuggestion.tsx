import React from 'react';

interface SuggestionsObj {
  data: object[];
  // Add other properties as necessary
}

interface TemplateSuggestionsProps {
  templates: SuggestionsObj[];
}

const TemplateSuggestions: React.FC<TemplateSuggestionsProps> = ({ templates }) => {
    console.log(templates);

    return (
      <>
  
      <h1>Suggested Templates</h1>
      <br></br>
      {templates.map((template,index)=>(
      <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Content</div>
        <p className="text-gray-700 text-base">
        {JSON.stringify(template.data)}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
      </div>
    </div>
      ))}
</>
      );   
}

export default TemplateSuggestions;
