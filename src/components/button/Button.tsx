import { buttonProps } from "@/types";
import clsx from "clsx";

const Button = ({
    type,
    text,
    onClick,
    actionButton,
    bgColor,
}: buttonProps) => {
        return (
        <div>
            <button
            onClick={onClick}
            type={type}
            className={clsx(
                actionButton &&
                "text-black hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-3 py-1.5 sm:px-5 sm:py-2.5 me-2 mb-2 focusoutline-none",
                `${bgColor} hover:${bgColor} font-medium rounded-lg text-sm px-3 py-1.5 sm:px-5 sm:py-2.5 me-2 mb-2 focusoutline-none`
            )}
            >
            {text}
            </button>
        </div>
        );
};

export default Button;
