import { FaXTwitter } from 'react-icons/fa6'
import { HiHome } from 'react-icons/hi'
import Link from 'next/link'

export const Sidebar = () => {
  return (
    <div className="flex flex-col p-4">
      <Link href="/">
        <FaXTwitter className="w-16 h-16 p-3 hover:bg-gray-100 rounded-full transition-all duration-200" />
      </Link>
      <Link
        href="/"
        className="flex items-center w-fit xl:p-3 hover:bg-gray-100 rounded-full transition-all duration-200 gap-3"
      >
        <HiHome className="xl:w-7 xl:h-7 w-16 h-16 xl:p-0 p-3" />
        <span className="font-bold hidden xl:inline">Home</span>
      </Link>
      <button
        className="bg-blue-400 text-white font-bold rounded-full
      mt-4 hover:brightness-95 w-48 h-9 shadow-md transition-all duration-200 hidden xl:inline"
      >
        Sign In
      </button>
    </div>
  )
}
