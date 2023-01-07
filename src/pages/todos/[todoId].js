import Layout from "@/containers/layout/layout";
import dbConnect from "@/server/utils/dbConnect";
import { getOneTodo } from "@/api/todos/[todoId]";

const TodoPage = ({ todo }) => {
    return (
        <Layout>
            <div className="flex flex-col items-center">
                <h1 className="mt-4 text-xl font-bold">Todo Detail Page</h1>
                <h2 className="mt-4 text-lg font-bold">title : {todo.title}</h2>
                <p className="mt-4">desc : {todo.description}</p>
            </div>
        </Layout>
    );
};

export default TodoPage;

export async function getServerSideProps(context) {
    dbConnect();
    const { query } = context;
    const todo = await getOneTodo(query.todoId);
    return {
        props: {
            todo: JSON.parse(JSON.stringify(todo)),
        },
    };
}
