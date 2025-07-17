import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import donationRoutes from "./routes/donationRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// All donation APIs will use /api/donations
app.use("/api/donations", donationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
