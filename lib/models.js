import mongoose from 'mongoose'

const jobBoardSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true,
    },
    jobDesc: {
        type: String,
        required: true,
    },
    jobVacancy: {
        type: Boolean,
        required: true,
        default: true,
    },
    jobReq: {
        type: String,
        required: true,
    },
    empType: {
        type: Boolean,
        required: true,
        default: false, // Default value for empType
    },
    workSchedule: {
        type: Boolean,
        required: true,
        default: true,
    },
    salary: {
        type: Boolean,
        required: true,
        default: false, // Default value for salary
    },
},
{timestamps: true}
);

export const JobBoard = mongoose.models.JobBoard ||mongoose.model("JobBoard", jobBoardSchema)