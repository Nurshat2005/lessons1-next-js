"use client";
import styles from "./TodoList.module.scss";

import { SubmitHandler, useForm } from "react-hook-form";

interface ITodoList {
  name: string;
  image: string;
  email: string;
  descrpition: string;
}
const TodoList = () => {
  const Patern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const { register, handleSubmit, reset } = useForm<ITodoList>();

  const AddToDo: SubmitHandler<ITodoList> = (data) => {
    reset();
  };
  return (
    <section className={styles.TodoList}>
      <div className="container">
        <div className={styles.content}>
          <h1> TodoList</h1>
          <form onSubmit={handleSubmit(AddToDo)}>
            <input
              type="text"
              placeholder="name"
              {...register("name", { required: true })}
            />
            <input
              type="text"
              placeholder="image"
              {...register("image", {
                required: true,
                minLength: 5,
                maxLength: 10,
              })}
            />
            <input
              type="text"
              placeholder="email"
              {...register("email", {
                required: true,
                minLength: 5,
                maxLength: 10,
                pattern: Patern,
              })}
            />
            <input
              type="text"
              placeholder="descrpition"
              {...register("descrpition", {
                required: true,
                minLength: 5,
                maxLength: 10,
              })}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TodoList;
