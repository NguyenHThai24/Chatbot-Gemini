/** @format */
import React, { JSX, useEffect, useState } from 'react';
import { SendFromGemini } from '../../services/SendFromGemini';

interface ChatPageProps {
  example: string;
}

interface ApiResponse {
  message: string; 
}

function ChatPage({ example }: ChatPageProps): JSX.Element {
  const [data, setData] = useState<string | null>(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: ApiResponse = await SendFromGemini('Hello from ChatPage!'); 
		console.log('====================================');
		console.log(response);
		console.log('====================================');
        setData(response.message); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, []);

  return (
    <div>
      <h1>Example: {example}</h1>
      <p>Data: {data ? data : 'Loading...'}</p>
    </div>
  );
}

export default ChatPage;
