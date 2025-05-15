'use strict'
import Comment from "./comments.model.js"

export const createComment = async (req, res) => {
    try {
        const data = req.body
        const comment = new Comment(data)
        await comment.save()

        return res.status(201).send(
            {
                success: true,
                message: 'Comment created successfully'
                
            }
        )
    } catch (error) {
        console.error(error)
        return res.status(500).send(
            {
                message: 'Error creating comment', error
            }
        )
    }
}

export const getComments = async (req, res) => {
    try {
        const comments = await Comment.find().populate({ path: 'post', select: '-_id -__v' })

        if (!comments) {
            return res.status(404).send(
                {
                    success: false,
                    message: 'No comments found'
                }
            )
        }
        return res.status(200).send(
            {
                success: true,
                message: 'Comments found',
                comments
            }
        )
    } catch (error) {
        console.error(error)
        return res.status(500).send(
            {
                success: false,
                message: 'Error getting comments', error
            }
        )
    }
}

export const updateComment = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body

        const comment = await Comment.findByIdAndUpdate(id, data, { new: true })
        if (!comment) {
            return res.status(404).send(
                {
                    success: false,
                    message: 'Comment not found'
                }
            )
        }
        return res.status(200).send(
            {
                success: true,
                message: 'Comment updated successfully'
                
            }
        )
        
    } catch (error) {
        console.error(error)
        return res.status(500).send(
            {
                message: 'Error updating comment', error
            }
        )
        
    }
}

export const deleteComment = async (req, res) => {
    try {
        const { id } = req.params

        const comment = await Comment.findByIdAndDelete(id)
        if (!comment) {
            return res.status(404).send(
                {
                    success: false,
                    message: 'Comment not found'
                }
            )
        }
        return res.status(200).send(
            {
                success: true,
                message: 'Comment deleted successfully'
                
            }
        )
        
    } catch (error) {
        console.error(error)
        return res.status(500).send(
            {
                message: 'Error deleting comment', error
            }
        )
        
    }
}