import dbConnect from "@/server/utils/dbConnect";
import Todo from "@/server/models/todo";

dbConnect();

const handler = async (req, res) => {
    const {method,body} = req ;
    const {formData} = body ;
    
    if (method === "POST") {
        await Todo.create({title:formData.title , description:formData.description});
        const todos = await Todo.find({}) ;
        return res.status(201).json({ message: "Todo Added", todos: todos });
    } else if (method === "GET") {
        const todos = await Todo.find({})
        return res.status(200).json({ todos: todos });
    }
};

export default handler;
