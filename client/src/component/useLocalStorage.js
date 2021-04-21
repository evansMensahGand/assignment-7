import { useState, useEffect } from "react";

let get= (key, initialValue) => {
    const returnValue = localStorage.getItem(key);


    if (returnValue) return returnValue;
    if (initialValue instanceof Function) return initialValue();
    return initialValue;   
};

const useLocalStorage = (key, initialValue) => {
    const [val, setVal] = useState(() => get(key, initialValue));
}, [val]);

useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
}
    
    return [val, setVal];
    
};

export default useLocalStorage;
