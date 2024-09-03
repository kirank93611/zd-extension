import React, { useState } from 'react';
import TicketForm from './components/TicketForm';
import TemplateSuggestions from './components/TemplateSuggestion';

//defining the type for the object
interface SuggestionsObj {
  data:object []
  //if required we can add more properties here
}

const App: React.FC = () => {
  //initializing state with an empty array
  const [templates, setTemplates] = useState<SuggestionsObj[]>([]);

  //function to update the array
  const fetchSuggestions = async (subject: string, body: string) => {
    try {
      // Replace with your actual backend API URL
      const response = await fetch('http://localhost:3000/api/suggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject, body }),
      }).then(response=>{
        const t=response.json();
        // console.log(t);
        return t;
        // console.log(response);
      })
      .then((data:any)=>{
        console.log(data)

        // const t=setTemplates(data[0].body);
        // console.log(t);
        setTemplates(data);
       
      })
    
        // setTemplates(data.subject);
      
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center text-gray-800">Email Template Suggester</h1>
      <TicketForm onFetchSuggestions={fetchSuggestions}/>
      <TemplateSuggestions templates={templates} />
    </div>
  );
};

export default App;
