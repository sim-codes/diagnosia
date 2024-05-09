'use client';

import { useState, useEffect } from "react"
import { ArrowRightIcon } from "@heroicons/react/16/solid"
import { PlayIcon } from "@heroicons/react/24/outline"
import HeroImages from "./heroImage"
import clsx from "clsx"

export default function Hero() {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    return (
        <div className={
            clsx("relative flex flex-row flex-wrap-reverse items-center group bg-transparent md:pl-10 gap-10 justify-around ",
                "transition-all 2s-ease-in duration-1000", loaded ? "left-0" : "-left-full"
            )
            }>
            <div className="flex gap-3 flex-col p-10">
                <h3 className="text-3xl font-bold text-wrap">
                    Uncovering <span className="text-[#0085FF]">Clarity:</span> <br className="hidden md:block" />
                    Find answers to your health concerns
                </h3>
                <p className="text-sm">
                    Navigate Your Health Journey with Confidence, <br className="hidden md:block" />
                    Trusted Insights to Guide Your Path to Wellness
                </p>

                <div className="md:flex gap-5 items-center">
                    <button 
                        className="flex justify-between bg-[#0085FF] md:w-1/2 mb-2 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-lg">Book an appointment
                        <ArrowRightIcon className="w-6 h-6" />
                    </button>

                    <div className="relative flex items-center gap-4">
                        <span
                            className="flex motion-safe:animate-spin items-center min-h-14 min-w-14
                            font-bold p-2 rounded-full border-2 border-zinc-400 border-dotted"
                        ></span>
                        <div className="absolute left-2 place- text-white bg-[#0085FF] p-2 rounded-full">
                            <PlayIcon className="w-6 h-6" />
                        </div>
                        <p>Watch videos</p>
                    </div>
                </div>
            </div>

            <HeroImages />

        </div>
    )
}