import { ImageModal } from "components/ImageModal";
import { TableContext } from "contexts/TableContext";
import { useContext } from "react";
import { OrdersTableHeader } from "./components/OrdersTableHeader";
import { OrdersTableRow } from "./components/OrdersTableRow";
import { RouteModal } from "components/RouteModal";

const TABLE_COLUMNS = [
  { value: "photo", label: "Photo", filterable: false, center: true },
  { value: "status", label: "Status", filterable: true, center: true, filterOptions: ["pending", "in-progress", "delivered"] },
  { value: "route", label: "Route", filterable: false },
  { value: "id", label: "ID", filterable: false },
  { value: "created", label: "Created", filterable: false },
  { value: "customer", label: "Customer", filterable: false },
  { value: "sku", label: "SKU", filterable: false },
  { value: "condition", label: "Condition", filterable: true, filterOptions: ["new", "cargo-worthy", "wind-watertight"]  },
  { value: "size", label: "Size", filterable: true, filterOptions: ["20ft", "40ft", "45ft"]  },
  { value: "type", label: "Type", filterable: true, filterOptions: ["standard", "high-cube"]  },
]

export const OrdersTable = () => {
  const { orders } = useContext(TableContext)

  return(
    <div className="table-wrp block">
      <ImageModal />
      <RouteModal />
      <table className="w-full">
        <thead className="sticky -top-1 rounded-lg bg-neutral-900 shadow">
          <tr>
            {TABLE_COLUMNS.map((column, index) =>
              <OrdersTableHeader
                key={`table-header-${index}`}
                column={column}
              />
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-800 overflow-y-auto">
          {orders.map((row, index) =>
            <OrdersTableRow
              key={`table-row-${index}`}
              row={row}
            />
          )}
        </tbody>
      </table>
    </div>
  )
}