import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="border-solid border-2 border-b-gray-200 ">
            {/*
            //* The first div for the top elements 
            */}
            <div className=" container flex mt-2 mr-2 items-center">
                <Image src='/mri.png' width={75} height={50} className="" />
                <h5>Awesome Company</h5>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
                    Profile
                </button>
                {/*
                // TODO: Don't forget to align the button of login, it has something to do with flex
                 */}
            </div>


            {/* 
            // * ye neeche wala hisa ha with them links you know ;)
             */}
            <div className="flex justify-end">

                <ul className="flex">
                    <li className="mr-6">
                        <Link href="/appointment">
                            <a className="text-blue-500 hover:text-blue-800" >Appointments</a>
                        </Link>
                    </li>
                    <li className="mr-6">
                        <Link href="/mri">
                            <a className="text-blue-500 hover:text-blue-800" >MRIs</a>
                        </Link>
                    </li>
                    <li className="mr-6">
                        <Link href="/prescription">
                            <a className="text-blue-500 hover:text-blue-800" >Prescriptions</a>
                        </Link>
                    </li>
                </ul>

            </div>
            
        </nav>
    )
}
