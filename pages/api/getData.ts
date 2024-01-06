import fs from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'

type Data = {
  name: string
}
//資料夾路徑
const buildFeedbackPath=()=>{
  return path.join(process.cwd(), 'data', 'data.json')
}
//讀取檔案
const extractFeedback = (filePath) => {
  const fileData = fs.readFileSync(filePath)
  const data = JSON.parse(fileData)
  return data
}
export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'GET') {
     const filePath = buildFeedbackPath()
    const data = extractFeedback(filePath)
    res.status(200).json({ feedback: data })
  } 
   
}
