import Image from 'next/image';


export default function HeroImages(){
    return (
        <div className="flex gap-2 w-2/4 justify-center">
            <div className="grid grid-flow-row grid-rows-5 gap-2">
                <div className="bg-[url('/doc1.png')] bg-no-repeat bg-center bg-cover row-span-3 min-w-[130px] min-h-[200px]
                md:w-[230px] md:h-[300px] rounded-xl"></div>
                <div className="bg-[url('/doc2.png')] bg-no-repeat bg-center bg-cover row-span-2 md:w-[230px] w-[130px] h-full
                md:h-full rounded-xl"></div>
            </div>
            <div className="grid grid-flow-row grid-rows-5 gap-2">
                <div className="bg-[url('/docf1.png')] bg-no-repeat bg-center bg-cover row-span-2 md:w-[230px] min-w-[130px] min-h-full
                md:h-full rounded-xl"></div>
                <div className="bg-[url('/docf2.png')] bg-no-repeat bg-center bg-cover row-span-3 md:w-[230px] min-sw-[130px] min-h-[200px]
                md:h-[300px] rounded-xl"></div>
            </div>
        </div>
    )
}