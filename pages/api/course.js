// pages/api/users.js

import { connectToDatabase } from "../../mongo";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const client = await connectToDatabase();
      const db = client.db();
      const collection = db.collection("api_course");
      const courses = await collection.find({}).toArray();
      res.status(200).json(courses);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      const { name, desc } = req.body; // Assuming the request body contains name and desc fields

      // Validate the incoming data if needed
      if (!name || !desc) {
        return res.status(400).json({ error: "Name and desc are required" });
      }

      const client = await connectToDatabase();
      const db = client.db();
      const collection = db.collection("api_course");

      // Insert the new user into the database
      const result = await collection.insertOne({ name, desc });

      if (!result.insertedId) {
        throw new Error("Failed to create course");
      }

      const createdCourse = {
        _id: result.insertedId, // Use the insertedId as the _id of the created user
        name,
        desc,
      };

      res.status(201).json(createdCourse); // Return the created user
    } catch (error) {
      console.error("Error creating course:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
