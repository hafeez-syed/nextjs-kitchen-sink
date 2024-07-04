import { notFound } from "next/navigation";

const fetchTodo = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
  );
  return await response.json();
};

export default async function Todo({ params }: any) {
  const todo = await fetchTodo(params.id);
  console.log(todo, params.id);

  if (!todo || !todo.title) return notFound();

  return (
    <>
      <h2>
        {todo.id}: {todo.title}
      </h2>
    </>
  );
}
