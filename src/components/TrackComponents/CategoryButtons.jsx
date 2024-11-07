import React from 'react';
import useScroll from "../../CustomHooks/useScroll.jsx";

function CategoryButtons(props) {
    const { isDragging, handleMouseDown, handleMouseUp, handleMouseMove } = useScroll();

    return (
        <div
            className="p-3 flex w-full gap-2 h-auto overflow-x-hidden no-scrollbar"
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseUp}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <button className="whitespace-nowrap PlusJakartaSans-Medium  shadow-lg py-2 px-4 rounded-full text-white bg-[#3083FF]">
               Passengers
            </button>
            <button className="whitespace-nowrap PlusJakartaSans-Medium shadow-lg py-2 px-4 rounded-full bg-white">
                Jeeps
            </button>

        </div>
    );
}

export default CategoryButtons;