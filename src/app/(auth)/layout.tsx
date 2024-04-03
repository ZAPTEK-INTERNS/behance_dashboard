import BG from '../../../public/authbg.svg'
import Image from 'next/image'

export default function Auth({
    children,
}:{
    children: React.ReactNode
}){
    return (
        <>
            <section className="flex h-screen w-full">
                <div className="flex flex-row h-full w-full">
                    <div className="w-1/3 bg-blue-600 md:flex justify-center items-center hidden relative">
                        <Image src={BG} alt="" className='absolute top-0 left-0 object-cover' fill={true}></Image>
                        <h1 className="text-white text-3xl font-semibold z-10">
                            Big Bazzar
                        </h1>
                    </div>
                    <div className="md:w-2/3 w-full flex justify-center items-center">
                        {children}
                    </div>
                </div>
            </section>
        </>
    );
}