import { OrdersTable } from "components/OrdersTable"

const Home = () => {
  return(
    <div className="w-full h-full flex flex-col gap-5">
      <OrdersTable/>
    </div>
  )
}

export default Home