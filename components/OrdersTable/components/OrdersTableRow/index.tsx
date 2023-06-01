import { Tag } from "components/Tag"
import { OrderProps, TableContext } from "contexts/TableContext"
import { capitalizeReplaceDash } from "helpers/format"
import Image from "next/image"
import { useContext } from "react"
import { RiMapPin2Fill } from "react-icons/ri"
import { OrdersTableData } from "../OrdersTableData"

interface OrdersTableRowProps {
  row: OrderProps
}

const STATUS_COLORS: {[key: string]: string} = {
  "pending": "orange",
  "in-progress": "blue",
  "delivered": "green",
}

export const OrdersTableRow: React.FC<OrdersTableRowProps> = ({ row }) => {
  const { setSelectedImage, setSelectedRoute} = useContext(TableContext)

  const { 
    id, 
    created, 
    status, 
    customer, 
    sku, 
    photo, 
    condition, 
    size, 
    type, 
    origin_address, 
    shipping_address
  } = row

  return(
    <tr className="bg-neutral-900 text-sm font-medium">
      <OrdersTableData>
        <div 
          onClick={() => setSelectedImage(photo)}
          className="border-2 h-10 w-10 rounded-lg overflow-hidden cursor-pointer hover:border-brand"
        >
          <Image
            src={photo}
            width={40}
            height={40}
            alt={`order-${id}-photo`}
            className="w-full h-full object-cover" 
          />
        </div>
      </OrdersTableData>
      <OrdersTableData>
        <Tag color={STATUS_COLORS[status]}>
          {capitalizeReplaceDash(status)}
        </Tag>
      </OrdersTableData>
      <OrdersTableData>
        <button 
          onClick={() => setSelectedRoute({
            origin_address: origin_address,
            shipping_address: shipping_address
          })}
          className="flex items-center justify-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
         >
          <RiMapPin2Fill/>
          See Route
        </button>
      </OrdersTableData>
      <OrdersTableData># {id}</OrdersTableData>
      <OrdersTableData>{created}</OrdersTableData>
      <OrdersTableData>{customer}</OrdersTableData>
      <OrdersTableData>{sku}</OrdersTableData>
      <OrdersTableData>{capitalizeReplaceDash(condition)}</OrdersTableData>
      <OrdersTableData>{size}</OrdersTableData>
      <OrdersTableData>{capitalizeReplaceDash(type)}</OrdersTableData>
    </tr>
  )
}