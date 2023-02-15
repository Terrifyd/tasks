import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <span style={{ backgroundColor: "purple", color: "yellow" }}>
                    UD CISC275 by Dean the Machine
                </span>
            </header>
            <h1>text for texts sake</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload or not
            </p>
            Todo List:
            <ol>
                <li>- Task 3</li>
                <li>- Contemplate meaningless of universe</li>
                <li>- Shower and brush teeth</li>
            </ol>
            <img
                src="https://upload.wikimedia.org/wikipedia/en/3/33/Patrick_Star.svg"
                alt="A picture of my boy Patrick"
            />
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "500px",
                                height: "70px"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "500px",
                                height: "70px"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
