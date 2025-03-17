import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "teal",
    "pink",
    "orange",
];
export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>();
    return (
        <div>
            <div></div>
            <h3>Change Color</h3>
            <span>
                {COLORS.map((color: string) => {
                    return (
                        <Form.Check
                            inline
                            type="radio"
                            name={color}
                            key={color}
                            label={color}
                            onChange={() => {
                                setColor(color);
                            }}
                            value={color}
                            checked={color === color}
                        >
                            {color}
                        </Form.Check>
                    );
                })}
            </span>
            <p>
                {" "}
                the text is{" "}
                <span style={{ backgroundColor: color }}> {color}</span>
            </p>
        </div>
    );
}
