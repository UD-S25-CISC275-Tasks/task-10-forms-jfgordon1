import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState(3);
    const [attemptsWanted, setAttemptsWanted] = useState(0);

    function handelAttempts(attemptsWanted: number) {
        if (attemptsWanted < 0) {
            return;
        }
        setAttempts(attemptsWanted);
    }
    return (
        <div>
            <h3>Give Attempts</h3>

            <p>Attempts left: {attempts}</p>
            <Button
                onClick={() => {
                    if (attempts > 0) {
                        setAttempts(attempts - 1);
                    }
                }}
                disabled={attempts === 0}
            >
                use
            </Button>
            <Form.Group controlId="formAttemptsWanted">
                <Form.Label>Enter Wanted Attempts:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter answer"
                    onChange={(e) => {
                        if ((e.target as HTMLInputElement).value === "") {
                            setAttemptsWanted(0);
                        } else {
                            setAttemptsWanted(
                                parseInt((e.target as HTMLInputElement).value),
                            );
                        }
                    }}
                />
            </Form.Group>
            <Button
                onClick={() => {
                    handelAttempts(attemptsWanted);
                }}
            >
                gain
            </Button>
        </div>
    );
}
