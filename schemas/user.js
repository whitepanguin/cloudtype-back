import { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils.js";

const userSchema = new Schema({
    email: { type: String, require: true },
    name: { type: String, require: true },
    address: { type: String, require: true },
    createdAt: { type: String, default: getCurrentTime },
    updatedAt: { type: String, default: getCurrentTime },
});

// model("객체명", 스키마, "컬렉션(테이블)명");
export default model("User", userSchema, "users");