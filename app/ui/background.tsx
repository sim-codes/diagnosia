import Image from "next/image"


export default function Background() {
    return (
        <div className="">
            <span className="absolute bg-[url('/drug.png')] top-0 left-0 w-40 h-40 bg-no-repeat bg-center bg-cover z-0 animate-move-bottom"
            ></span>

            <span className="absolute bg-[url('/drug2.png')] right-0 bottom-0 w-40 h-40 bg-no-repeat bg-center bg-cover z-0 animate-move-top"
            ></span>
        </div>
        
    )
}