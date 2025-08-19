import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Replicate from "replicate";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN, // token dari .env
});

app.post("/api/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    const output = await replicate.run(
      "ibm-granite/granite-3.3-8b-instruct",
      { input: { prompt } }
    );

    res.json({ result: output.join("") });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
