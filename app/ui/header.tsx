 import Link
 
 from "next/link"
 export default function Nav(){
    return (
        <nav className="h-10 flex items-center justify-between gap-5 bg-transparent text-black mb-8" role="navigation">
            <Link href="/" className="font-bold text-2xl text-[#0085FF]">Diagnosia</Link>

            <div className="gap-7 hidden md:flex">
                <Link href="/" className="text-[#0085FF] font-bold">Home</Link>
                <Link href="#" className="text-[#6D6D6D]">Packages</Link>
                <Link href="#" className="text-[#6D6D6D]">Test</Link>
                <Link href="#" className="text-[#6D6D6D]">Services</Link>
            </div>

            <button 
            className="bg-[#0085FF] max-w-40 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >Log In
            </button>
        </nav>
    )
 }