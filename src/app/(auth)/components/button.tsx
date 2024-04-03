interface ButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

export default function Button({
    children,type='button',className='p-5'
}:ButtonProps){
    return (
        <>
            <button className={className} type={type}>
                {children}
            </button>
        </>
    )
}