import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    specialization: {type: String, required: true},
    experience: {type: String, required: true},
    image: {type: String, required: true},
    degree: {type: String, required: true},
    about: {type: String, required: true},
    fees: {type: Number, required: true},
    available: {type: Boolean, required: true},
    address: {type: String, required: true},
    phone: {type: Number, required: true},
    Date: {type: Date, default: Date.now},
    slots:{type: Object, default: {}},
},{minimize: false})
const doctorModel = mongoose.models.doctor || mongoose.model("doctor", doctorSchema);
export default doctorModel;
