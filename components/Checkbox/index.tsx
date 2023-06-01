interface CheckboxProps {
  checked: boolean
  label: string
  onChange: (checked: boolean) => void
}

export const Checkbox:React.FC<CheckboxProps> = ({ checked, label, onChange }) => {
  return(
    <div className="flex items-center gap-2">
      <input 
        type="checkbox" 
        value="" 
        className="cursor-pointer w-4 h-4 text-blue-600 bg-neutral-800 ounded focus:ring-blue-500 focus:ring-0"
        onChange={(e) => onChange(e.target.checked)}
        checked={checked}
      />
      <label 
        htmlFor="default-checkbox"
        className="cursor-pointer text-md font-medium text-white whitespace-nowrap"
        onClick={() => onChange(!checked)}
      >
        {label}
      </label>
    </div>
  )
}