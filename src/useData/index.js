import axios from "axios";
import { useEffect, useState } from "react";

export const useData = () => {
    const [data, setData] = useState({
        status: "loading",
    })

    const url = "https://api.exchangerate.host/latest?base=PLN"

    useEffect(() => {
        const FetchData = async () => {
            try {
                const response = await axios.get(url);
                const { rates, date } = response.data
                setData({
                    rates,
                    date,
                    status: "success",
                });
            } catch {
                setData({
                    status: "error",
                });
            }
        };

        setTimeout(FetchData, 1500);
    }, [])

    return data;

}
