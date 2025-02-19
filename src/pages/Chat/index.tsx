import React, { useState } from 'react';
import { sendFromGemini } from '../../services/SendFromGemini';

const FormChat: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const reply = await sendFromGemini(input);
      setResponse(reply);
    } catch (error) {
      setResponse(`Error: ${error}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Enter your prompt:</label>
        <br />
        <input
          type="text"
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: '300px', marginBottom: '10px', padding: '5px' }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      {response && (
        <div style={{ marginTop: '20px' }}>
          <h3>API Response:</h3>
          <pre>{response}</pre>
        </div>
      )}
    </div>
  );
};

export default FormChat;
