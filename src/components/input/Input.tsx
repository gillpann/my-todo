import { inputProps } from "@/types"

const Input = ({name, type, placeholder, value,}: inputProps) => {
    return (
    <div>
        <input name={name} type={type} placeholder={placeholder} value={value} 
        className="block w-full p-4 mx-2 border rounded-lg text-base bg-white border-gray-600 placeholder-gray-700 text-black"
        />
    </div>
    )
}

export default Input