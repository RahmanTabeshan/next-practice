import axios from "axios";
import { useState } from "react";
import TodoForm from "@/components/AddNewTodo";
import TodoList from "@/components/todoList/todoList";
import Layout from "@/containers/layout/layout";
import Todo from "@/server/models/todo";
import dbConnect from "@/server/utils/dbConnect";

export default function Home({ todos }) {
    const [data, setData] = useState(todos);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const deleteHandler = async (id) => {
        setLoading(true);
        try {
            const { data } = await axios.delete(`/api/todos/${id}`);
            setData(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            console.log(err);
        }
    };

    const addTodo = async (e, formData) => {
        setLoading(true);
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/todos/", { formData });
            setData(data);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setError(err.message);
        }
    };

    const completeHandle = async (id) => {
        setLoading(true);
        try {
            const { data } = await axios.put(`/api/todos/complete/${id}`);
            setData(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Layout>
            <div className="container p-2 xl:max-w-screen-xl mx-auto">
                <section className="flex flex-col md:flex-row md:items-start md:justify-center gap-x-8 gap-y-8">
                    <TodoForm submitHandler={addTodo} />
                    <div className="w-full max-w-screen-md bg-white p-2 md:p-4 rounded-xl">
                        {loading ? (
                            <div>Loading...</div>
                        ) : error ? (
                            <div>error</div>
                        ) : (
                            <TodoList
                                data={data}
                                onDelete={deleteHandler}
                                onComplete={completeHandle}
                            />
                        )}
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    dbConnect();
    const todos = await Todo.find({});
    return {
        props: {
            todos: JSON.parse(JSON.stringify(todos)),
        },
    };
}
