import mongoose, {Schema} from "mongoose";

const RegistrationSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    image: String,
    imageFileId: String,
    eventAt: {type: Date, required: true},
    createdAt: {type: Date, default: Date.now},
    uploadedBy: {type: String, required: true},
});

const Registration = mongoose.models.Registration || mongoose.model('Registration', RegistrationSchema);
export default Registration;   