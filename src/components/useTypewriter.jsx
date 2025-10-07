import { useEffect, useState } from 'react';


export default function useTypewriter(words = [], speed = 100) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);


    useEffect(() => {
        if (index >= words.length) return;
        if (!reverse && subIndex === words[index].length) {
            setTimeout(() => setReverse(true), 1000);
            return;
        }
        if (reverse && subIndex === 0) {
            setReverse(false);
            setIndex((i) => (i + 1) % words.length);
            return;
        }
        const timeout = setTimeout(() => {
            setSubIndex(s => s + (reverse ? -1 : 1));
        }, speed);
        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, speed]);


    useEffect(() => {
        const blinkInterval = setInterval(() => setBlink(b => !b), 500);
        return () => clearInterval(blinkInterval);
    }, []);


    return [words[index].substring(0, subIndex), blink];
}