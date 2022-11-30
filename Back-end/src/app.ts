import express from "express";
import { AppRoutes } from "./routes";
import mongoose from "mongoose";
import handleError from "./middlewares/HandleError";
const cors = require("cors");

const app = express();

app.use(cors());

mongoose.connect(
	"mongodb+srv://testelogikee:logikee123@cluster0.mvunzz1.mongodb.net/?retryWrites=true&w=majority"
);

app.use(express.json());

AppRoutes(app);

app.use(handleError);
app.listen(3333, () => {
	console.log("Server is Running on Htpp://localhost:3333");
});
