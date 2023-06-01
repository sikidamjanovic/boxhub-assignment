import { Popover } from "components/Popover"
import { TableContext } from "contexts/TableContext"
import { useContext } from "react"
import { RiFilterFill } from "react-icons/ri"

interface OrdersTableHeaderProps {
  column: {
    value: string,
    label: string,
    filterable: boolean,
    center?: boolean
    filterOptions?: string[]
  }
}

export const OrdersTableHeader:React.FC<OrdersTableHeaderProps> = ({ column }) => {
  const { value, label, filterable, center, filterOptions } = column
  const { hidden } = useContext(TableContext)

  const activeFilter = filterOptions?.some(option => {
    return hidden.filter((hid) => hid.value === option).length > 0
  })

  return(
    <th className={`
      px-6 py-4 text-sm text-white font-bold
      ${!center && "text-left"}
    `}>
      <div className={`
        ${filterable && "flex items-center justify-between gap-5"}
      `}>
        {label}
        {filterable &&
          <Popover 
            row={value}
            filterOptions={filterOptions}
          >
            <div className="flex items-center cursor-pointer p-2 rounded hover:bg-neutral-800 hover:text-neutral-8000">
              <RiFilterFill className={`
                text-md
                ${activeFilter ? "text-blue-500" : "text-neutral-400"}
              `}/>
            </div>
          </Popover>
        }
      </div>
    </th>
  )
}