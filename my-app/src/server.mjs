import mongoose from 'mogoose'
import express from 'express'
mongoose.connect("mongodb+srv://Shivamkuma:mongo@shivam.sdorocx.mongodb.net/")
mongoose.on('connected', ()=>{
    console.log('mongoose connected')
})
mongoose.on('error',()=>{
    console.log('not connected')
})

