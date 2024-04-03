interface Props {
    type: string;
    id: string;
    className?: string;
}

export default function FormInput({type,id, className = ""}:Props){
    let classes = `rounded-lg p-2 border border-gray-300 w-full ${className}`;
    return (
        <>
            <input id={id} type={type} className={classes} />
        </>
    )
}