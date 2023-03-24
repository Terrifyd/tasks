import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditing(event: React.ChangeEvent<HTMLInputElement>) {
        setEditing(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                id="is-editing-switch"
                label="Edit Form"
                checked={editing}
                onChange={updateEditing}
            />
            if (editing === true)
            {
                <div>
                    <Form.Group controlId="formCheckAnswer">
                        <Form.Label>Name Here:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student?"
                        checked={isStudent}
                        onChange={updateStudent}
                    />
                </div>
            }
            <h3>
                {!editing && isStudent && <div>{name} is a student</div>}
                {!editing && !isStudent && <div>{name} is not a student</div>}
            </h3>
        </div>
    );
}
