import React from 'react';

interface TemplateData {
  id:number;
  subject:string;
  body:string;
  createdAt:string;
}

interface SuggestionsObj {
  data: TemplateData[];
  // Add other properties as necessary
}

interface TemplateSuggestionsProps {
  templates: TemplateData[];
}

const TemplateSuggestions: React.FC<TemplateSuggestionsProps> = ({ templates }) => {
    console.log(templates);
    return (
      <>
  
      <h1>Suggested Templates</h1>
      <br></br>
      {templates.map((template)=>(
      <div key={template.id} className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{template.subject}</div>
          <p className="text-gray-700 text-base">
            {template.body}
          </p>
          <p className="text-gray-500 text-sm">
            Created at:{new Date(template.createdAt).toLocaleString()}
          </p>
        </div>
    </div>
  ))}
</>
      );   
}

export default TemplateSuggestions;
