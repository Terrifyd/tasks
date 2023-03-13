import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎃" | "🎉" | "🌈" | "🦍" | "🍁";
export function CycleHoliday(): JSX.Element {
    // Holidays: You Shouldn't Have Let Me Pick
    // Halloween - October 31st - Pumpkin 🎃
    // April Fool's Day - April 1st - Confeti 🎉
    // Pride Month - June 1st - Rainbow 🌈
    // Harambe Birthday - May 28th - Gorilla 🦍
    // Canadian Independance Day - July 1st - Maple Leaf 🍁

    const [holiday, setHoliday] = useState<Holiday>("🎃");

    function advanceA(): void {
        if (holiday === "🎉") setHoliday("🍁");
        else if (holiday === "🍁") setHoliday("🎃");
        else if (holiday === "🎃") setHoliday("🦍");
        else if (holiday === "🦍") setHoliday("🌈");
        else setHoliday("🎉");
    }

    function advanceY(): void {
        if (holiday === "🎉") setHoliday("🦍");
        else if (holiday === "🦍") setHoliday("🌈");
        else if (holiday === "🌈") setHoliday("🍁");
        else if (holiday === "🍁") setHoliday("🎃");
        else setHoliday("🎉");
    }

    return (
        <div>
            <div>
                Holiday: <span>{holiday}</span>
            </div>
            <div>
                <Button onClick={advanceA}>Next Alphabet(ically)</Button>
                <Button onClick={advanceY}>Next Year(ically)</Button>
            </div>
        </div>
    );
}
