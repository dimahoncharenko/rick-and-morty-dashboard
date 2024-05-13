import { Select, TextInput } from "@mantine/core";
import { Form, useForm } from "@mantine/form";

export default function Filter() {
    const form = useForm({
        initialValues: {
            name: "",
            species: "",
            gender: "",
            status: ""
        }
    })

    return (
        <Form form={form} className="flex gap-4">
            <TextInput {...form.getInputProps("name")}/>
            <Select />
            <Select />
            <Select />
        </Form>
    );
}