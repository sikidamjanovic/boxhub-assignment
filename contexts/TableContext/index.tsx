import { createContext, useEffect, useState } from 'react';
import staticOrders from "../../public/orders.json";

export interface OrderProps {
  id: string,
  created: string,
  status: string,
  customer: string,
  sku: string,
  photo: string,
  condition: string,
  size: string,
  type: string,
  origin_address: string,
  shipping_address: string
}

interface TableContextProps {
  orders: OrderProps[] | [],
  hidden: HiddenProps[],
  addHidden: (row: string, value: string) => void
  removeHidden: (value: string) => void
  clearHidden: () => void
  selectedImage: string | null
  setSelectedImage: (selectedImage: string | null) => void
  selectedRoute: RouteProps | null
  setSelectedRoute: (route: RouteProps | null) => void
}

interface HiddenProps {
  row: string,
  value: string,
}

interface RouteProps {
  origin_address: string,
  shipping_address: string,
}

export const TableContext = createContext<TableContextProps>({
  orders: [],
  hidden: [],
  addHidden: () => null,
  removeHidden: () => null,
  clearHidden: () => null,
  selectedImage: null,
  setSelectedImage: () => null,
  selectedRoute: null,
  setSelectedRoute: () => null
})

export const TableContextProvider: React.FC<{ children: React.ReactNode }> = ({ children = null }) => {
  const [orders, setOrders] = useState<Array<OrderProps> | []>([])
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedRoute, setSelectedRoute] = useState<RouteProps | null>(null)
  const [hidden, setHidden] = useState<Array<HiddenProps>>([])

  const addHidden = (row: string, value: string) => {
    setHidden([...hidden, { row: row, value: value }])
  }

  const removeHidden = (value: string) => {
    setHidden(hidden.filter((hid) => hid.value !== value))
  }

  const sortByCreated = (a: OrderProps, b: OrderProps) => {
    if (a.created > b.created){
      return -1;
    }
    if (a.created < b.created){
      return 1;
    }
    return 0;
  }

  const clearHidden = () => {
    setHidden([])
  }

  useEffect(() => {
    const orders = staticOrders.orders.sort(sortByCreated)
    const filteredOrders = orders.filter((order) => {
      return hidden.every((hidden) => {
        // @ts-ignore
        return hidden.value !== order[hidden.row]
      });
    });
    setOrders(filteredOrders)
  }, [hidden])

  return (
    <TableContext.Provider
      value={{
        orders,
        hidden,
        addHidden,
        removeHidden,
        clearHidden,
        selectedImage,
        setSelectedImage,
        selectedRoute,
        setSelectedRoute
      }}
    >
      {children}
    </TableContext.Provider>
  )
}
