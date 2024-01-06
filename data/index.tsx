import Imgphoto from '../public/brown.jpeg'

export const Img111 = {
  src: Imgphoto,
  alt: '111',
}

type ApiResopnse<Data> = {
  data: Data
  isError: boolean
}
type UserResopnse = ApiResopnse<{ status: number }>
const response: UserResopnse = {
  data: {
    status: 200,
  },
  isError: false,
}
