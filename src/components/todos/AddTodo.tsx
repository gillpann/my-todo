import * as actions from "@/actions";
import Button from "../button/Button";
import Form from "../form/Form";
import Input from "../input/Input";

const AddTodo = () => {
  return (
    <div className="w-full max-w-2xl px-4">
      <Form action={actions.createTodo}>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="w-full sm:flex-1">
            <Input name="input" type="text" placeholder="Add Todo Here..." />
          </div>
          <div className="w-full sm:w-auto">
            <Button type="submit" text="Add" bgColor="bg-blue-600" />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AddTodo;
