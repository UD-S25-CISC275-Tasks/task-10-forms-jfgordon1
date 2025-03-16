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
                {!isEdit && (
                    <p>
                        {isStudent ?
                            <span>{studentName} is a student</span>
                        :   <span>{studentName} is not a student</span>}
                    </p>
                )}
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
                        label="student"
                        type="checkbox"
                        id="student"
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
