import Image from "next/image"

export const Header = () => {
  return(
    <div className="flex items-center gap-3">
      <Image
        src="/boxhub_logo.jpeg"
        width={40}
        height={40}
        alt="logo"
        className="min-w-20 w-7 h-7 rounded-lg"
      />
      <h1 className="font-bold text-white">
        BoxHub Orders
      </h1>
    </div>
  )
}