import React, { useState } from "react";
import { generateAI } from "./openAi";

const Ai = () => {
  const [prompt, setPrompt] = useState("Generate a quiz on AI topics"); 
  const [response, setResponse] = useState("");

  const handleGenerateQuiz = async () => {
    try {
      const result = await generateAI(prompt);
      setResponse(result);
    } catch (error) {
      console.error("Error generating quiz:", error);
      setResponse("Failed to generate quiz. Please try again.");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button 
        style={{
          color: 'black',
          backgroundColor: '#0a3c5e',
          width: '130px',
          padding: '5px',
          height: '35px',
          marginTop: '10px',
          borderRadius: '5px',
        }} 
        onClick={handleGenerateQuiz}
      >
        Generate quiz
      </button>

      {response && (
        <div style={{ marginTop: '20px', color: 'black', fontWeight: 500 }}>
          <h3>AI-generated Quiz:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default Ai;
