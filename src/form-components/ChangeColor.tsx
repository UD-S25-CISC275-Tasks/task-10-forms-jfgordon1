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
    const [colorSelection, setColor] = useState<string>("red");

    /*function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }/*

    /*function checkColor(inputColor: string, checkedColor: string) {
        return inputColor === checkedColor;
    }*/
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
                            id={color}
                            key={color}
                            label={color}
                            value={color}
                            onChange={(e) => {
                                setColor(e.target.value);
                            }}
                            style={{ backgroundColor: color }}
                            checked={color === colorSelection}
                        />
                    );
                })}
            </span>
            <p>
                {" "}
                the text is{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: colorSelection }}
                >
                    {" "}
                    {colorSelection}
                </span>
            </p>
        </div>
    );
}
