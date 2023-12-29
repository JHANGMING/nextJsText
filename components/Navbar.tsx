import Link from "next/link";
import { useRouter } from 'next/router'
const Navbar = () => {
  const router = useRouter()
  const getLinkClassName = (path:string) => {
    return router.pathname === path ? 'text-red font-bold underline' : 'text-blue-300'
  }
  return (
    <nav className=" flex justify-between bg-slate-400 items-center px-4">
      <div className=" font-bold text-4xl">NavBar</div>
      <ul className="flex gap-4">
        <li>
          <Link href="/">
            <button type="button" className={getLinkClassName('/')}>
              首頁
            </button>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <button type="button" className={getLinkClassName('/about')}>
              關於
            </button>
          </Link>
        </li>
        <li>
          <Link href="/tour">
            <button type="button" className={getLinkClassName('/tour')}>
              旅遊
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
 
export default Navbar;