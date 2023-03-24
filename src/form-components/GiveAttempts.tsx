import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    /* const [released, setReleased] = useState<string>("2022");
    const previousYear = parseInt(released) - 1 || 0;

    // Provide forms for editing the new movie
    // And also a button to append the movie
    return (
        <div>
            <Form.Group controlId="formMovieReleased">
                <Form.Label>Released:</Form.Label>
                <Form.Control
                    type="number"
                    value={released}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setReleased(event.target.value)
                    }
                />
            </Form.Group>
            <div>
                The year before the movie was released was {previousYear}.
            </div>
        </div>
    ); */

    const [requests, setRequests] = useState<string>("");
    const requested = parseInt(requests) || 0;
    const [attempts, setAttempts] = useState<number>(3);

    function addAttempts() {
        setAttempts(attempts + requested);
    }
    function useAttempt() {
        setAttempts(attempts - 1);
    }

    // how to make this a button?
    return (
        <div>
            <h3>Attempts:</h3>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requests}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequests(event.target.value)
                    }
                />
            </Form.Group>
            <Button onClick={addAttempts}>gain</Button>
            <Button onClick={useAttempt} disabled={attempts < 1}>
                use
            </Button>
            <div>You have {attempts} attempts remaining</div>
        </div>
    );
}
