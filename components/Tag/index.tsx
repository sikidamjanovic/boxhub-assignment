interface TagProps {
  children: React.ReactNode
  color: string
}

export const Tag:React.FC<TagProps> = ({ children, color }) => {
  const getColors = () => {
    switch (color) {
      case "green":
        return "bg-green-500/10 text-green-500"
      case "blue":
        return "bg-blue-500/10 text-blue-500"
      case "orange":
        return "bg-orange-500/10 text-orange-500"
      default:
        break;
    }
  }

  return(
    <div className={`
      w-full flex justify-center m-auto px-4 py-2 rounded-lg font-semibold
      ${getColors()}
    `}>
      {children}
    </div>
  )
}