import dbConnect from "@/server/utils/dbConnect";
import Todo from "@/server/models/todo";
dbConnect();
const handler = async (req, res) => {
    const { todoId } = req.query;
    const { method } = req;
    if(method === "PUT"){
        const todo = await Todo.findById(todoId) ;
        todo.isCompleted = !todo.isCompleted ;
        await todo.save() ;
        const todos = await Todo.find({}) ;
        return res.status(200).json({message:"todo is completed" , todos:todos})
    }
};

export default handler ;
