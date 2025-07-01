import React from 'react'
import {actionsProps} from "@/types";
import {Plus,UserPlus} from "lucide-react"

const Actions = ({values}: { values: actionsProps[] }) => {
    return (
        <div className="w-full bg-card">
            <h1 className="text-xl font-semibold text-gray-900 w-full p-6 px-8 border rounded-lg">Quick Actions</h1>
            <div className="p-3 flex flex-col items-center justify-between border rounded-lg gap-3">
                {values.map((detail, index) => (
                    <div key={index} className={`${detail.backgroundClass} flex p-4 items-center gap-3 w-full rounded-md`}>
                        <div className={`p-2 rounded-md text-white ${detail.iconClassName}`}>
                        {detail.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{detail.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Actions


export const ActionValues: actionsProps[] = [
    {
        icon:<Plus/>,
        iconClassName: "bg-blue-500",
        title:"New Project",
        backgroundClass:"bg-blue-100"
    },{
        icon:<UserPlus />,
        iconClassName:'bg-green-500',
        title:"Invite Team",
        backgroundClass:"bg-green-100"
    }
]