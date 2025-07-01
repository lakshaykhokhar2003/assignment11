import React from 'react'
import {activityProps} from "@/types";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {avatarNameConverter} from "@/lib/utils";

const Activity = ({values}:{values:activityProps[]}) => {
    return (
        <div className="w-full bg-card">
        <h1 className="text-xl font-semibold text-gray-900 w-full p-6 px-8 border rounded-lg">Recent Projects</h1>
            <div className="p-3 flex flex-col items-center justify-between border rounded-lg">
                {values.map((detail, index) => (
                    <div key={index} className="flex p-3 items-center gap-3 w-full cursor-pointer">
                        <Avatar>
                            <AvatarImage src="" className="" />
                            <AvatarFallback className={`${detail.avatarClassName} text-white tracking-normal text-sm`}>{avatarNameConverter(detail.name)}</AvatarFallback>
                        </Avatar>
                        <div className="">
                            <h3 className="text-lg font-semibold text-gray-900">{detail.description}</h3>
                            <span className="text-base font-sm text-gray-600">{detail.time}</span>
                        </div>
                    </div>
                ))}
            </div>
    </div>)
}
export default Activity

export const ActivityValues: activityProps[] = [
    {
        name: "Sarah Wilson",
        avatarClassName: "bg-green-500",
        description: "Sarah Wilson completed the wireframes",
        time: "2 hours ago"
    },
    {
        name: "Mike Johnson",
        avatarClassName: "bg-orange-500",
        description: "Mike Johnson uploaded new assets",
        time: "2 hours ago"
    },
    {
        name: "Emily Brown",
        avatarClassName: "bg-violet-500",
        description: "Emily Brown left a comment",
        time: "2 hours ago"
    }
];
