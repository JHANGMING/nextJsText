import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Notfound = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(()=>{
      // router.back()
      router.push("/")
    },2000)
  }, [])
  return (
    <>
      <h1 className="text-4xl font-bold">OOppps....</h1>
      <p className="text-3xl">Not Found....</p>
      <Link href="/">
        <button type="button" className=" text-blue-500 underline">
          返回首頁
        </button>
      </Link>
    </>
  )
}

export default Notfound
