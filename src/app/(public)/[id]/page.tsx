import CharacterDetails from "@/modules/CharacterDetails";

type Props = {
    params: { id: string }
}

export default function Page({ params }: Props) {
    const { id } = params;

    return (
        <>
            <CharacterDetails id={id} />  
        </>
    );  
}