import { useState, useEffect } from "react";
import "./style.css";

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const formattedDate = date.toLocaleString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        minute: "2-digit",
        hour: "2-digit",
        second: "2-digit"
    })


    return (
        <div className="clock">
            <p>
                Current date: {formattedDate}
            </p>
        </div>
    )
}