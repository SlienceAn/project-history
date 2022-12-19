// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient, ServerApiVersion } from 'mongodb'
type Data = {
  data: any
}
const url = "mongodb+srv://beast964089:password@cluster0.mb1fb2n.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url)
const database = "sample_airbnb";
export default async function dataPool(req: NextApiRequest, res: NextApiResponse<Data>) {
  await client.connect()
  console.log("Connected Successfully !!")
  const db = client.db(database)
  const collection = db.collection("listingsAndReviews").find({}).limit(5).toArray()
  await collection.then(data => res.status(200).json({ data }))
  await client.close()
}
