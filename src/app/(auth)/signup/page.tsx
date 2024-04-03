import Button from '../components/button'
import FormLabel from '../components/formlabel'
import FormInput from '../components/forminput'
import Link from 'next/link'

export default function SignUp(){
    return (
        <>
            <div className="flex xl:px-20 lg:px-20 lg:py-20 md:px-10 md:py-20 p-5 py-10 gap-y-10 flex-col w-full">
                <div className="flex flex-col gap-y-2">
                    <h2 className="font-semibold text-xl text-gray-600">
                        Create an Account
                    </h2>
                    <p className="text-gray-600 text-xs font-semibold">
                        Create an account and start selling your products throughout the world
                    </p>
                </div>
                <div className="flex flex-col">
                    <form action="" className='flex flex-col gap-y-5'>
                        <div className="flex flex-col gap-x-5 border border-gray-300 rounded-lg md:p-10 p-3">
                            <div className="mb-3 flex flex-col md:flex-row gap-x-3">
                                <div className="flex flex-col gap-x-3 w-full md:w-1/2">
                                    <FormLabel htmlFor='firstname'>First name</FormLabel>
                                    <FormInput type='text' id='firstname'></FormInput>
                                </div>
                                <div className="flex flex-col gap-x-3 w-full md:w-1/2">
                                    <FormLabel htmlFor='lastname'>Last name</FormLabel>
                                    <FormInput type='text' id='lastname'></FormInput>
                                </div>
                            </div>

                            <div className="mb-3 flex flex-col md:flex-row gap-x-3">
                                <div className="flex flex-col gap-x-3 w-full md:w-1/2">
                                    <FormLabel htmlFor='phonenumber'>Phone Number</FormLabel>
                                    <FormInput type='text' id='phonenumber'></FormInput>
                                </div>
                                <div className="flex flex-col gap-x-3 w-full md:w-1/2">
                                    <FormLabel htmlFor='email'>Email Address</FormLabel>
                                    <FormInput type='email' id='email'></FormInput>
                                </div>
                            </div>

                            <div className="mb-3 flex flex-col md:flex-row gap-x-3">
                                <div className="flex flex-col gap-x-3 w-full md:w-1/2">
                                    <FormLabel htmlFor='country'>Country</FormLabel>
                                    <select className='rounded-lg p-2 border border-gray-300 w-full ' title='Country' name="country" id="country">
                                        <option value="">Select Country</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-x-3 w-full md:w-1/2">
                                    <FormLabel htmlFor='account_type'>Account Type</FormLabel>
                                    <select className='rounded-lg p-2 border border-gray-300 w-full ' title='Account Type' name="account_type" id="account_type">
                                        <option value="">Select Account Type</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-3 flex flex-col md:flex-row gap-x-3">
                                <div className="flex flex-col gap-x-3 w-full md:w-1/2">
                                    <FormLabel htmlFor='password'>Password</FormLabel>
                                    <FormInput type='password' id='password'></FormInput>
                                </div>
                                <div className="flex flex-col gap-x-3 w-full md:w-1/2">
                                    <FormLabel htmlFor='password_confirmation'>Confirm Password</FormLabel>
                                    <FormInput type='password' id='password_confirmation'></FormInput>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row gap-x-2">
                                <FormInput className="w-fit border border-blue-600" type='checkbox' id='remember'></FormInput>
                                <FormLabel htmlFor='remember'>I agree to the terms and conditions</FormLabel>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between gap-x-10">
                            <Button type='submit' className='bg-blue-600 text-white px-5 py-3 rounded-md w-1/2'>
                                Sign Up
                            </Button>
                            <Link href="/signin" className='w-1/2'>
                                <Button type='button' className='bg-white border border-blue-600 text-blue-600 px-5 py-3 rounded-md w-full'>
                                    Sign In
                                </Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}