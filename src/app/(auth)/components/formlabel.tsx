interface Props {
    htmlFor: string;
    children: React.ReactNode;
}

export default function FormLabel({htmlFor,children}:Props){
    return (
        <>
            <label className="text-xs text-gray-600 font-semibold" htmlFor={htmlFor}>{children}</label>
        </>
    )
}