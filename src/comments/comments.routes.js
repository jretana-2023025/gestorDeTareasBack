import { Router } from "express";
import { 
    createComment, 
    getComments,
    updateComment,
    deleteComment } from "./comments.controller.js";

const api = Router()

api.post('/createComment', createComment)
api.get('/getComments/:postId', getComments)
api.put('/updateComment/:id', updateComment)
api.delete('/deleteComment/:id', deleteComment)

export default api