import { TableContext } from "contexts/TableContext"
import Image from "next/image"
import { useContext } from "react"
import { RiFilterOffFill } from "react-icons/ri"

export const Header = () => {
  const { hidden, clearHidden } = useContext(TableContext)

  return(
    <div className="flex items-center gap-3 justify-between h-10">
      <div className="flex items-center gap-3">
        <Image
          src="/images/boxhub_logo.jpeg"
          width={40}
          height={40}
          alt="logo"
          className="min-w-20 w-7 h-7 rounded-lg"
        />
        <h1 className="font-bold text-white">
          BoxHub Orders
        </h1>
      </div>
      {hidden.length > 0 &&
        <button
          className="flex items-center justify-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
          onClick={clearHidden}
        >
          <RiFilterOffFill/>
          Clear {hidden.length} filter{hidden.length > 1 ? "s" : ""}
        </button>
      }
    </div>
  )
}