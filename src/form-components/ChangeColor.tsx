import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "white",
    "cyan"
];
const DEFAULT_COLOR = COLORS[6];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(DEFAULT_COLOR);

    function updateColor(event: React.ChangeEvent<HTMLSelectElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {/* <div>
                <Form.Group controlId="chooseColors">
                    <Form.Label>Choose a color</Form.Label>
                    <Form.Select value={color} onChange={updateColor}>
                        {COLORS.map((color: string) => (
                            <option key={color} value={color}>
                                {color}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div> */}
            <div>
                {COLORS.map((curr: string) => (
                    // eslint-disable-next-line react/jsx-key
                    <Form.Check
                        inline
                        type="radio"
                        name="colors"
                        // runs but still gives error?
                        onChange={updateColor}
                        key={curr}
                        id="color-check"
                        label={curr}
                        value={curr}
                        checked={color === curr}
                    />
                ))}
            </div>
            <div>
                You have choosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
            </div>
        </div>
    );
}
