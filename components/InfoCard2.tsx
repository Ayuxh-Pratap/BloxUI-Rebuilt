import React from 'react'
import Image from "next/image";

export default function InfoCard() {
    return (
        <div className="relative h-[32vh] w-full">
            <div className="absolute border rounded-lg bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="flex mt-20 justify-center items-center">
                    <button className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                        Button
                    </button>
                </div>

            </div>
        </div>

    )
}