import { useState , useEffect } from "react";

function useCurrencyInfo (currency) {
    let [data , setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((info)=> JSON.parse(info))
        .then((info)=> {
            console.log(info)
            return setData(info)
        });
    },[currency])
    console.log(data);
    return data ;
}

export default useCurrencyInfo ;