import { useState } from 'react';

const useScroll = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - e.currentTarget.offsetLeft);
        setScrollLeft(e.currentTarget.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - e.currentTarget.offsetLeft;
        const walk = (x - startX) * 1.5; // Adjust scroll speed here
        e.currentTarget.scrollLeft = scrollLeft - walk;
    };

    return {
        isDragging,
        handleMouseDown,
        handleMouseUp,
        handleMouseMove,
    };
};

export default useScroll;
