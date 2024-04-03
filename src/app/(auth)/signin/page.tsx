import Button from '../components/button'
import FormLabel from '../components/formlabel'
import FormInput from '../components/forminput'
import { BsGoogle,BsFacebook } from 'react-icons/bs';
import Link from 'next/link'

export default function SignIn(){
    return (
        <>
            <div className="flex xl:px-40 lg:px-20 lg:py-10 md:px-10 md:py-10 p-5 py-10 gap-y-10 flex-col w-full">
                <div className="flex flex-col gap-y-2">
                    <h2 className="font-semibold text-xl text-gray-600">
                        Sign In
                    </h2>
                    <p className="text-gray-600 text-xs font-semibold">
                        Sign In to your account
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-y-3 justify-between gap-x-10">
                    <Button type='button' className='bg-blue-600 text-white px-5 py-3 rounded-md w-full lg:w-1/2 flex flex-row items-center gap-x-3 justify-center'>
                        <BsGoogle />
                        Sign in with Google
                    </Button>
                    <Button type='button' className='bg-blue-900 text-white px-5 py-3 rounded-md w-full lg:w-1/2 flex flex-row items-center gap-x-3 justify-center'>
                        <BsFacebook />
                        Sign in with Facebook
                    </Button>
                </div>
                <div className="flex flex-row items-center gap-x-1">
                    <hr className='w-1/3'/>
                    <p className='w-1/3 text-xs text-gray-600 text-center'>Or Sign In With</p>
                    <hr className='w-1/3'/>
                </div>
                <div className="flex flex-col">
                    <form action="" className='flex flex-col gap-y-5'>
                        <div className="flex flex-col gap-x-5 border border-gray-300 rounded-lg md:p-10 p-3">
                            <div className="mb-3 flex flex-col gap-x-3">
                                <FormLabel htmlFor='email'>Email</FormLabel>
                                <FormInput type='email' id='email'></FormInput>
                            </div>
                            <div className="mb-3 flex flex-col gap-x-3">
                                <FormLabel htmlFor='password'>Password</FormLabel>
                                <FormInput type='password' id='password'></FormInput>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row gap-x-2">
                                <FormInput className="w-fit border border-blue-600" type='checkbox' id='remember'></FormInput>
                                <FormLabel htmlFor='remember'>Remember Me</FormLabel>
                            </div>
                            <div className="flex w-1/2 justify-end">
                                <p className="text-blue-600 text-xs font-bold">Forgot Password?</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between gap-x-10">
                            <Button type='submit' className='bg-blue-600 text-white px-5 py-3 rounded-md w-1/2'>
                                Sign In
                            </Button>
                            <Link href="/signup" className='w-1/2'>
                                <Button type='button' className='bg-white border border-blue-600 text-blue-600 px-5 py-3 rounded-md w-full'>
                                    Sign Up
                                </Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}