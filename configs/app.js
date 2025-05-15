'use strict'


import express from "express"
import cors from "cors"
import morgan from "morgan"
import helmet from "helmet"
import commentsRoutes from "../src/comments/comments.routes.js"
import postRoutes from "../src/post/post.routes.js"

const configs = (app)=>{
    app.use(express.json())
    app.use(express.urlencoded({extended:false}))
    app.use(cors())
    app.use(helmet())
    app.use(morgan('dev'))
}

const routes = (app)=>{
    app.use('/v1/comments', commentsRoutes)
    app.use('/v1/post', postRoutes)
}

export const initServer = () => {
    const app = express()
    try{
        configs(app)
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Servidor ejecutándose en el puerto ${process.env.PORT}`) 

    }catch (error){
        
        console.error('Error en el Servidor', error)
    }
}