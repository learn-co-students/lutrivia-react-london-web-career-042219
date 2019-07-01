import React from "react";
import QuestionCard from "./QuestionCard";

const QuestionsContainer = props => {
  return (
    <div>
      {props.questions.questions.map((question, index) => (
        <QuestionCard key={index} question={question} />
      ))}
    </div>
  );
};

export default QuestionsContainer;
