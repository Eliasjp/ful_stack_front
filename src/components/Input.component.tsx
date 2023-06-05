
interface InputSchema {
    inputPlaceholder: string
    inputType?: string
    toForm: any
}

export function Input ({inputPlaceholder, toForm, inputType="text"}: InputSchema){

    return (
        <input 
        placeholder={inputPlaceholder} 
        type={inputType}
        {...toForm}
        className="h-12 py-2 px-1 border-gray-500 border rounded-md"
        />
    )
}