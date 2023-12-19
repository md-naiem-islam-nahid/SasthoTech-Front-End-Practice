import { Schema, model, models, mongo } from "mongoose";
import mongoose from "mongoose";

const PromptSchema = new Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

    prompt: {
        type: String,
        require: [true, 'Prompt is required.'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required.'],

    }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;