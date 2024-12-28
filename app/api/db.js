import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db(); // Use the database you want, or leave it empty for the default database
    const collection = db.collection("yourCollection");

    // Perform MongoDB operations
    const data = await collection.find({}).toArray();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error connecting to MongoDB", error: error.message });
  }
}
