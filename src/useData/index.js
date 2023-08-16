import axios from "axios";
import { useEffect, useState } from "react";

export const useData = () => {
    const [data, setData] = useState({
        status: "loading",
    });

    const url = "https://api.exchangerate.host/latest?base=PLN";

    useEffect(() => {
        const fetchData = async () => {
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

        setTimeout(fetchData, 1500);
        
    }, [])

    return data;

}