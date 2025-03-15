import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [studentName, setStudentName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    const updateMode = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsEdit(event.target.checked);
    };

    const updateStudentStatus = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setIsStudent(event.target.checked);
    };

    return (
        <div>
            <div>
                {studentName}{" "}
                <span>{isStudent ? "is a student" : "is not a student"}</span>
            </div>
            {isEdit && (
                <Form.Group controlId="no-edit-student">
                    <Form.Label>Student Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter student name"
                        value={studentName}
                        onChange={(e) => {
                            setStudentName(e.target.value);
                        }}
                    />
                    <Form.Label>Is A Student</Form.Label>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        checked={isStudent}
                        onChange={updateStudentStatus}
                    />
                </Form.Group>
            )}
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={isEdit}
                onChange={updateMode}
            />
        </div>
    );
}
