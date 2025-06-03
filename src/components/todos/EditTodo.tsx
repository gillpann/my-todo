"use client";

import { useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import Form from "../form/Form";
import { MdEdit } from "react-icons/md";
import { todoProps } from "@/types";

import * as actions from "@/actions";

const EditTodo = ({ todo }: { todo: todoProps }) => {
  const [editTodoState, setEditTodoState] = useState(false);

  const handleEdit = () => {
    if (todo.isCompleted) {
      return;
    }
    setEditTodoState(!editTodoState);
  };

  const handleSubmit = () => {
    setEditTodoState(false);
  };

  return (
    <div className="flex gap-2 items-center">
      <Button
        onClick={handleEdit}
        text={<MdEdit />}
        actionButton
        bgColor="bg-blue-500"
      />

      {editTodoState && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Edit Todo
            </h3>
            <Form action={actions.editTodo} onSubmit={handleSubmit}>
              <Input name="inputId" value={todo.id} type="hidden" />
              <div className="space-y-4">
                <Input
                  name="newTitle"
                  type="text"
                  placeholder="Edit Todo..."
                  defaultValue={todo.title || ""}
                />
                <Input
                  name="newDeadline"
                  type="datetime-local"
                  placeholder="New Deadline (optional)"
                />
                <div className="flex gap-2">
                  <Button type="submit" text="Save" bgColor="bg-green-500" />
                  <Button
                    type="button"
                    text="Cancel"
                    bgColor="bg-gray-500"
                    onClick={() => setEditTodoState(false)}
                  />
                </div>
              </div>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditTodo;
