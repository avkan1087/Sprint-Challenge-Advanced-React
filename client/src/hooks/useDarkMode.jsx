import { useEffect } from 'react';
import useLocalStorage from './useLocalStorge';

const useDarkMode = (initialValue) => {
    const [inputValue, setInputValue] = useLocalStorage (initialValue);
    useEffect( ()=>{
        const body=document.body;
        return inputValue ? body.classList.add('dark-mode') :
        body.classList.remove('dark-mode')
    }, [inputValue]);
    return [inputValue, setInputValue];
}

export default useDarkMode