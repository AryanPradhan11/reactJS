//custom hooks
import { useEffect } from "react";
import { useState } from "react";

export function useCurrencyInfo(currency) {
    const [data, setdata] = useState({})
    useEffect(() => {
        try{
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setdata(res[currency]))
            .catch((error) => console.error("Error fetching the data", error))
            console.log("Fetch sucess")
        } catch {
            console.log("Not log")
        }
    }, [currency])

    console.log(data)
    return data
}

