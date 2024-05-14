"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Select, TextInput } from "@mantine/core";
import { Form, useForm } from "@mantine/form";
import { useDebouncedState } from "@mantine/hooks";
import { useEffect } from "react";
import { Search, LucideType, PersonStanding, Zap } from "lucide-react";

import { Gender, Status } from "@/shared/types"; 

const statuses: Status[] = ["Alive", "Dead", "unknown"];
const genders: Gender[] = ["Female", "Male", "Genderless", "unknown"];

export default function Filter() {
    const searchParams = useSearchParams();
    const [name, setName] = useDebouncedState("", 300);
    const [type, setType] = useDebouncedState("", 300);
    const router = useRouter();

    const form = useForm({
        initialValues: {
            species: "",
            gender: "",
            status: ""
        }
    });    

    useEffect(() => {
        const params = new URLSearchParams();
        form.values.gender && params.append("gender", form.values.gender);
        type && params.append("type", type);
        form.values.status && params.append("status", form.values.status);
        name && params.append("name", name);
        // If there is sorting, preserve it
        searchParams.has("sort") && params.append("sort", searchParams.get("sort")!);

        router.push(`/?${params}`, );
    }, [form.values.gender, type, form.values.status, name])

    return (
        <Form form={form} className="flex flex-col md:flex-row gap-2 justify-between py-4">
            <TextInput leftSection={<Search size={16}/>} placeholder="Name" defaultValue={name} onChange={e => setName(e.target.value)} classNames={{ input: "filter-input" }} />
            <Select leftSection={<Zap size={16} />} placeholder="Status" data={statuses} {...form.getInputProps("status")} classNames={{ input: "filter-input" }} />
            <Select leftSection={<PersonStanding size={16} />} placeholder="Gender" data={genders} {...form.getInputProps("gender")} classNames={{ input: "filter-input" }} />
            <TextInput leftSection={<LucideType size={16} />} placeholder="Type" defaultValue={type} onChange={e => setType(e.target.value)} classNames={{ input: "filter-input" }} />
        </Form>
    );
}