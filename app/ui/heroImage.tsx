import Image from 'next/image';


export default function HeroImages(){
    return (
        <div className="flex gap-2 w-2/4 justify-center">
            <div className="grid grid-flow-row grid-rows-5 gap-2">
                <div className="relative bg-black row-span-3 min-w-[130px] min-h-[200px]
                md:w-[230px] md:h-[300px] rounded-xl">
                    <Image src="/doc1.png" alt="Male Doctor" layout="fill" className="rounded-xl" objectFit="cover" />
                </div>
                <div className="relative bg-black row-span-2 md:w-[230px] w-[130px] h-full
                md:h-full rounded-xl">
                    <Image src="/doc2.png" alt="Male Doctor" layout="fill" className="rounded-xl" objectFit="cover" />
                </div>
            </div>
            <div className="grid grid-flow-row grid-rows-5 gap-2">
                <div className="relative bg-black row-span-2 md:w-[230px] min-w-[130px] min-h-full
                md:h-full rounded-xl">
                    <Image src="/docf1.png" alt="Female Doctor" layout="fill" className="rounded-xl" objectFit="cover" />
                </div>
                <div className="relative bg-black row-span-3 md:w-[230px] min-sw-[130px] min-h-[200px]
                md:h-[300px] rounded-xl">
                    <Image src="/docf2.png" alt="Female Doctor" layout="fill" className="rounded-xl" objectFit="cover" />
                </div>
            </div>
        </div>
    )
}