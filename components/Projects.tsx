import React from 'react'
import {projectCardProps} from "@/types";
import {BaggageClaim, SmartphoneCharging,RefreshCcw} from "lucide-react";
import {Badge} from "@/components/ui/badge"
import {dateConverter} from "@/lib/utils";

const Projects = ({values}: { values: projectCardProps[] }) => {
    return (
        <div className="container max-w-full lg:max-w-[60%]">
            <h1 className="text-xl bg-white font-semibold text-gray-900 w-full p-6 px-8 border rounded-lg">Recent Projects</h1>
            <div className="bg-white flex flex-col gap-4 p-6 px-8 border rounded-lg">
                {values.map((detail, index) => (
                    <div key={index} className="bg-gray-50 rounded-md p-3 flex items-center justify-between">
                        <div className="flex flex-row items-center justify-center gap-4">
                            <div className={`${detail.iconClassName} p-2 rounded-md`}>
                                {detail.icon}
                            </div>
                            <div className="">
                                <h3 className="text-lg font-normal text-gray-900">{detail.title}</h3>
                                <span className="text-base font-sm text-gray-600">{dateConverter(detail.dueDate)}</span>
                            </div>
                        </div>
                        <Badge variant="default" className={`${detail.statusClassName}`}>{detail.status}</Badge>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Projects;

export const projectValues: projectCardProps[] = [
    {
        iconClassName: "bg-blue-200",
        icon: <BaggageClaim className="text-blue-700"/>,
        title: "E-Commerce Website",
        dueDate: "2024-12-15",
        status: "Completed",
        statusClassName: "bg-green-200 text-green-700"
    }, {
        iconClassName: "bg-violet-200",
        icon: <SmartphoneCharging className="text-violet-700"/>,
        title: "Mobile App Design",
        dueDate: "2024-12-20",
        status: "In Progress",
        statusClassName: "bg-yellow-200 text-yellow-700"
    }, {
        iconClassName: "bg-green-200",
        icon: <RefreshCcw className="text-green-700"/>,
        title: "E-Commerce Website",
        dueDate: "2024-12-20",
        status: "Review",
        statusClassName: "bg-blue-200 text-blue-700"
    },
]
