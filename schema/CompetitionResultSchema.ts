import mongoose, {Schema} from "mongoose";

const CompetitionResultSchema = new Schema({
    name: { type: String, required: true },
    collegeMail: { type: String, required: true },
    rollNo: { type: String, required: true },
    competitionName: { type: String, required: true },
    club: { type: String, required: true },
    rank: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    uploadedBy: { type: String, required: true }
});

const CompetitionResult = mongoose.models.CompetitionResult || mongoose.model('CompetitionResult', CompetitionResultSchema);
export default CompetitionResult;
