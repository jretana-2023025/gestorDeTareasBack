import { Schema,model } from "mongoose";

const postSchema = new Schema(
    {
        title:{
            type:String,
            required:[true,'Title is required'],
            maxLength:[100,'Title is too long']
        },
        content:{
            type:String,
            required:[true,'Content is required'],
            maxLength:[500,'Content is too long']
        },
        course:{
            type:String,
            required:[true,'Course is required'],
            maxLength:[50,'Course is too long']
        },
        date:{
            type:Date,
            default:Date.now
        },
        comments:[{
            type:Schema.Types.ObjectId,
            ref:'Comment',
            
        }]
    }
)

export default  model('Post',postSchema)