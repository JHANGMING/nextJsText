import { useRouter } from 'next/router'
import { GetStaticPropsContext } from 'next'
export type DataProps = {
  data: DataItemProps
  id?: string | undefined
}
export type DataItemProps = {
  name: string
  email: string
}
type Params = {
  id: string
}

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com//users')
  const datas = await res.json()
  const paths = datas.map((data: DataProps) => {
    if (data && data.id) {
      return { params: { id: data.id.toString() } }
    }
  })
  return {
    paths,
    fallback: false,
  }
}
export async function getStaticProps(context: GetStaticPropsContext<Params>) {
  const id = context.params?.id
  const res = await fetch(`https://jsonplaceholder.typicode.com//users/${id}`)
  const data = await res.json()
  return {
    props: { data },
  }
}
const Details = ({ data }: DataProps) => {
  const router = useRouter()
  console.log(router.pathname)
  console.log(router.query)

  return (
    <div className=" text-center">
      <h1>{data.name}</h1>
      <p>{data.email}</p>
      <button type="button" className=" border border-black px-2 py-1 rounded-lg font-bold hover:bg-black hover:text-white" onClick={() => router.back()}>
        back
      </button>
    </div>
  )
}

export default Details
