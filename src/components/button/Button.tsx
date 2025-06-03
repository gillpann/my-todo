import { buttonProps } from "@/types";
import clsx from "clsx";

const Button = ({
  type = "button",
  text,
  onClick,
  actionButton,
  bgColor = "bg-blue-600",
}: buttonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        "text-white font-medium rounded-lg text-sm focus:outline-none transition-colors cursor-pointer",
        // Kalau actionButton (tombol kecil), tetap kecil di semua layar
        actionButton
          ? "px-3 py-2 hover:bg-blue-800 focus:ring-4"
          : "w-full sm:w-auto px-5 py-4", // Tombol utama full width di mobile
        bgColor,
        bgColor.includes("bg-blue") ? "hover:bg-blue-700" : "",
        bgColor.includes("bg-red") ? "hover:bg-red-500" : "",
        bgColor.includes("bg-green") ? "hover:bg-green-500" : ""
      )}
    >
      {text}
    </button>
  );
};

export default Button;
