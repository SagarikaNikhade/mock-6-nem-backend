const mongoose = require("mongoose");

const boardSchema = mongoose.Schema ({
    board : {type:String , require:true},
    
},{
    versionKey : false
})

const BoardModel = mongoose.model("board",boardSchema)

module.exports = {BoardModel}