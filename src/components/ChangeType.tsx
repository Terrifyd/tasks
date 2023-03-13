import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

// type QueestionType = "short_answer_question" | "multiple_choice_question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestion] = useState<QuestionType>(
        "short_answer_question"
    );

    function changeQuestion(): void {
        setQuestion(
            questionType === "short_answer_question"
                ? "multiple_choice_question"
                : "multiple_choice_question"
        );
    }

    return (
        <div>
            Question Type:
            <span>
                {questionType === "short_answer_question"
                    ? "Short Answer"
                    : "Multiple Choice"}
            </span>
            <Button onClick={changeQuestion}>Change Type</Button>
        </div>
    );
}
