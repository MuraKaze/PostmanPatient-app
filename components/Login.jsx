import Link from "next/link"

export default function Login() {
    return (
        <div>
            <div className='max-w-xs my-2 overflow-hidden rounded shadow-lg'>
                <div className='px-6 py-4'>
                    <div className='mb-2 text-xl font-bold'>Login</div>
                    <form className='flex flex-col'>
                        <label htmlFor='name' className='mb-2 italic'>Email</label>
                        <input className='mb-4 border-b-2' id='name' name='name' type='text' autoComplete='name' required />
                        <label htmlFor='name' className='mb-2 italic'>Password</label>
                        <input className='mb-4 border-b-2' id='name' name='name' type='password' autoComplete='name' required />
                        <Link href='/'>
                            <button type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Login
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
