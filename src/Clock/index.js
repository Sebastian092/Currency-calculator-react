import { ClockDiv } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

export const Clock = () => {
    const date = useCurrentDate();

    const formattedDate = date.toLocaleString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        minute: "2-digit",
        hour: "2-digit",
        second: "2-digit"
    })


    return (
        <ClockDiv>
            <p>
                Current date: {formattedDate}
            </p>
        </ClockDiv>
    )
}