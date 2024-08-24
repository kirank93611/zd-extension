import React, { useState } from 'react';

interface TicketFormProps {
  onFetchSuggestions: (subject: string, body: string) => void;
}


const TicketForm: React.FC<TicketFormProps> = ({onFetchSuggestions}) => {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Trigger the callback to fetch suggestions from backend

    onFetchSuggestions(subject,body);
    } 


  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 border rounded-lg shadow-lg">
      <div>
        <label className="block text-gray-700 font-semibold">Subject</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="mt-2 p-2 w-full border rounded"
          placeholder="Enter the ticket subject"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold">Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="mt-2 p-2 w-full border rounded"
          rows={6}
          placeholder="Enter the ticket body"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">
        Get Template Suggestions
      </button>
    </form>
  );
};

export default TicketForm;
