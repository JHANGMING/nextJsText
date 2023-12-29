import Image from 'next/image'
import styles from "../styles/landingPage.module.css"
import {  Img111 } from './data'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>jelly | hello</title>
    </Head>
      <div className="p-8">
        <h1 className=" text-4xl">hello</h1>
        <p className={styles.container}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ipsum officiis itaque tempora provident aut suscipit, ipsa quia quibusdam illum at adipisci esse expedita exercitationem obcaecati? Sequi quas eos maxime.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo veritatis hic eos, omnis natus unde temporibus vel, dicta saepe fugiat ipsum accusamus dignissimos voluptatum tenetur laborum ipsam voluptates quis voluptatem.</p>
        <Image {...Img111} className="border rounded-full w-[200px] h-[350px]" />
      </div>
    </>
  )
}
