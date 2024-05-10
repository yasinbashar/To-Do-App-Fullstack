const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/todo")
.then(() => console.log("MongoDB connected..."))
.catch((err) => console.log(err));;

const toDoSchema = new mongoose.Schema({
  toDo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ToDo", toDoSchema);
