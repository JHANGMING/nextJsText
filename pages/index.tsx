import Image from 'next/image'
import styles from '@/styles/landingPage.module.css'
import Head from 'next/head'
import { Img111 } from '@/data'
import InvoiceStatus from '@/components/InvoiceStatus'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const clickHandler = () => {
    router.push('/about/1')
  }
  return (
    <>
      <Head>
        <title>jelly | hello</title>
      </Head>
      <section className="p-8">
        <h1 className=" text-4xl">hello</h1>
        <p className={styles.container}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ipsum officiis itaque tempora provident aut suscipit, ipsa quia quibusdam illum at adipisci esse expedita exercitationem obcaecati? Sequi quas eos maxime.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo veritatis hic eos, omnis natus unde temporibus vel, dicta saepe fugiat ipsum accusamus dignissimos voluptatum tenetur laborum ipsam voluptates quis voluptatem.</p>
        <Image {...Img111} className="border rounded-full w-[200px] h-[350px]" />
        <InvoiceStatus status="paid" onClick={clickHandler} />
      </section>
    </>
  )
}
// export const getStaticProps = async () => {
//   try {
//     const res = await fetch(`${process.env.BASE_URL || 'https://next-js-text-orcin.vercel.app'}/api/getData`)
//     if (!res.ok) {
//       throw new Error(`Failed to fetch API, received status ${res.status}`)
//     }
//     const data = await res.json()
//     return {
//       props: { data: data.feedback },
//     }
//   } catch (error) {
//     console.error(error)
//     return {
//       props: { data: {} }, // 或者适当的错误处理/默认值
//     }
//   }
// }
