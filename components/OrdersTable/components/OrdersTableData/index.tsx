export const OrdersTableData:React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return(
    <td className="bg-neutral-950 px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-300">
      {children}
    </td>
  )
}