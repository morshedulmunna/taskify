import React from "react";

const ModalState = ({children, isOpen, className}) => {
    return (
        <React.Fragment>
            <div
                className={`fixed left-0 top-0 z-50 grid h-screen w-screen place-content-center bg-black bg-slate-900/30 bg-opacity-70 backdrop-blur-[2px] transition-all duration-200 ${
                    isOpen ? "" : "invisible opacity-0"
                } `}
            >
                <div
                    className={`${
                        isOpen ? "translate-x-0" : "translate-x-0"
                    } ${className} `}
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>
        </React.Fragment>
    );
};
export default ModalState;
