import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [noEditStudent] = useState<string>("");
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
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={isEdit}
                onChange={updateMode}
            />
            <Form.Group controlId="no-edit-student">
                <Form.Label>Student Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter student name"
                    value={noEditStudent}
                    onChange={(e) => {
                        if (isEdit) {
                            setStudentName(e.target.value);
                        }
                        setStudentName(e.target.value);
                    }}
                    disabled={!isEdit}
                />
                <Form.Control
                    type="checkbox"
                    checked={isStudent}
                    onChange={updateStudentStatus}
                    disabled={!isEdit}
                />
            </Form.Group>
            <span>{isEdit ? "Edit Mode" : "View Mode"}</span>
            <div>
                {studentName} <span>{}</span>
            </div>
        </div>
    );
}
