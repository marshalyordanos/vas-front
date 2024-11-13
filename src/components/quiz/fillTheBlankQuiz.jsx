import React from 'react';
import { Input, Card } from 'antd';

const FillInTheBlank = ({ sentence, answers }) => {
  const renderSentenceWithBlanks = (sentence) => {
    const parts = sentence.split(/(___)/g); // Split sentence by blanks (___)
    let answerIndex = 0;

    return parts.map((part, index) => {
      if (part === '___') {
        const answer = answers[answerIndex] || '';
        answerIndex += 1;

        return (
          <Input
            key={index}
            style={{
              width: 80,
              height: 400,
              marginRight: 5,
              backgroundColor: '#0c4652ff',
              color: 'white',
            }}
            value={answer}
            disabled
            placeholder="Answer"
          />
        );
      } else {
        return (
          <span
            key={index}
            style={{
              fontSize: '22px',
              height: 400,
              color: 'black',
              marginRight: 5,
            }}
          >
            {part}
          </span>
        );
      }
    });
  };

  return (
    <div>
      <p>{renderSentenceWithBlanks(sentence)}</p>
      <style>
        {`
          .ant-input::placeholder {
            color: white !important;
          }
        `}
      </style>
    </div>
  );
};

const FillInTheBlankQuiz = ({ selectedOption }) => {
  console.log('Selected Option:', selectedOption);

  const sentence =
    'A cat is ___ on the table. The sky is ___, and the grass is ___.'; // Example sentence with blanks
  const answers = selectedOption ? selectedOption.split(',') : [];

  return (
    <div style={{ padding: '2px' }}>
      <Card
        // title="Fill in the Blanks"
        bordered={false}
        style={{
          width: '100%',
          height: '100%',
          paddingBottom: '50px',
          fontSize: '18px',
          textAlign: 'left',
          backgroundColor: '#f7f7f7ff',
        }}
        bodyStyle={{ fontSize: '18px', color: 'black' }}
      >
        <FillInTheBlank sentence={selectedOption} answers={answers} />
      </Card>
    </div>
  );
};

export default FillInTheBlankQuiz;
