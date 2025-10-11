import mongoose, {Schema} from "mongoose";

const EventsSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    image: String,
    eventAt: {type: Date, required: true},
    createdAt: {type: Date, default: Date.now},
    uploadedBy: {type: String, required: true},
});

const Registration = mongoose.models.Registration || mongoose.model('Registration', EventsSchema);
export default Registration;   