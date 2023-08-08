import axios from "axios";
import { useEffect, useState } from "react";

export const useData = () => {
    const [data, setData] = useState ({
        status: "Loading",
    })


    useEffect(() => {
        const FetchData = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
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

        setTimeout(FetchData, 1000);
    }, [])

    return data;

}
