import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");
    return (
        <div>
            <p>{userAnswer === expectedAnswer ? "✔️" : "❌"}</p>
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswer">
                <Form.Control
                    type="text"
                    value={userAnswer}
                    placeholder="Enter your answer"
                    onChange={(e) => {
                        setUserAnswer(e.target.value);
                    }}
                />
            </Form.Group>
        </div>
    );
}
