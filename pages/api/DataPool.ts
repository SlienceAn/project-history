import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'
type Response = {
  success: boolean
  message: string
  data: any
}
type Data = {
  name: string
  date: string
  type: string
  tool: string
  description: string
  company: string
  img: Array<string>
}
const url = "mongodb+srv://beast964089:neverland37@cluster0.mb1fb2n.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url)
const database = "project_content";
const doc = "list"

export default async function dataPool(req: NextApiRequest, res: NextApiResponse<Response>) {
  if (req.method === "GET") {
    await client.connect()
    const db = client.db(database)
    const collection = db.collection<Data>(doc).find({}).toArray()
    await collection.then(data => res.status(200).json({
      success: true,
      message: "",
      data
    }))
    await client.close()
  }
  if (req.method === "POST") {
    await client.connect()
    await client.db(database).collection<Data>(doc).insertOne({
      name: "",
      date: "", 
      type: "",
      tool: "",
      description: "",
      company: "",
      img: [""]
    }).then(() => res.status(200).send({ success: true, message: "新增成功", data: "" }))
      .catch(err => res.status(404).send({ success: false, message: "新增失敗", data: "" }))
      .finally(() => client.close())
  }
}
