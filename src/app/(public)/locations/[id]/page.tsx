import LocationDetails from "@/modules/LocationDetails";

type Props = {
    params: { id: string }
}

export default function Page({ params: { id } }: Props) {
    return (
        <>
            <LocationDetails id={id}/>
        </>
    );
}