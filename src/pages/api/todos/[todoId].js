import Todo from "@/server/models/todo";
import dbConnect from "@/server/utils/dbConnect";

dbConnect();
const handler = async (req, res) => {
    const { todoId } = req.query;
    const { method } = req;
    if (method === "DELETE") {
        await Todo.findByIdAndDelete(todoId);
        const todos = await Todo.find({});
        return res
            .status(200)
            .json({ message: "todo is deleted", todos: todos });
    } else if (method === "GET") {
        const todo = await getOneTodo(todoId);
        return res.status(200).json({ message: "todo loaded", todo: todo });
    } else if(method === "PUT") {
        const {formData} = req.body
        const todo = await getOneTodo(todoId) ;
        todo.title = formData.title ;
        todo.description = formData.description ;
        await todo.save() ;
        const todos = await Todo.find({});
        return res
            .status(200)
            .json({ message: "todo updated", todos: todos });
    }
};

export default handler;

export const getOneTodo = async (todoId) => {
    const todo = await Todo.findById(todoId);
    return todo;
};
