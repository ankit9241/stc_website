import mongoose, {Schema} from 'mongoose';

const RegistrationResponseSchema = new Schema({
    forEvent: { type: Schema.Types.ObjectId, ref: 'Registration', required: true },
    name: { type: String, required: true },
    collegeMail: { type: String, required: true },
    phone: { type: String, required: true },
    course: { type: String, required: true },
    semester: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

const RegistrationResponse = mongoose.models.RegistrationResponse || mongoose.model('RegistrationResponse', RegistrationResponseSchema);
export default RegistrationResponse;