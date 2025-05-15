import { Schema,model } from "mongoose";

const commentSchema = new Schema({
    user:{
        type:String,
        required:[true,'User is required'],
        maxLength:[50,'User is too long']
    },
    text:{
        type:String,
        required:[true,'Text is required'],
        maxLength:[500,'Text is too long']
    },
    date:{
        type:Date,
        default:Date.now
    },
    post:{
        type:Schema.Types.ObjectId,
        ref:'Post',
        required:[true,'Post is required']
    }
})

export default model('Comment',commentSchema)