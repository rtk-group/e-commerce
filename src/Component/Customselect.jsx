import React, { useState } from 'react'

const Customselect = ({ value, onChange, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-[128px]">
            <div
                className="p-2 border rounded cursor-pointer  border-2 border-gray-300 text-sm px-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                {value}
            </div>
            {isOpen && (
                <div className="absolute right-[0px] z-50 mt-1 w-full bg-white border rounded shadow-lg w-[128px] text-sm">
                    {options.map(opt => (
                        <div key={opt.value} className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => {
                                onChange({ target: { value: opt.value } });
                                setIsOpen(false);
                            }}>
                            {opt.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Customselect;