import Link from 'next/link'

export type DataProps = {
  data: [DataItemProps]
}
export type DataItemProps = {
  id:string
  name: string
  email: string
}
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com//users')
  const data = await res.json()
  return {
    props: { data },
  }
}
const About = ({ data }: DataProps) => {
  return (
    <>
      <h1>This is About</h1>
      <ul className="flex flex-col items-center">
        {data.map((item) => (
          <Link href={`/about/${item.id}`} key={item.id}>
            <button type="button" className=" cursor-pointer hover:text-blue-600">
              {item.name}
            </button>
          </Link>
        ))}
      </ul>
    </>
  )
}
export default About
