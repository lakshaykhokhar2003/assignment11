import React from 'react'
import {detailsCardProps} from "@/types";
import {CircleCheck, Clock4, ClockArrowUp, TriangleAlert} from 'lucide-react';
import {Card, CardContent} from "@/components/ui/card";

const DetailsCard = ({values}:{values:detailsCardProps[]}) => {
    return (
        <div className="w-full flex flex-row justify-between my-4">
            {values.map((detail, index) => (
                <Card key={index} className="pr-4 sm:pr-8 md:pr-10 md:bg-none lg:pr-15 xl:pr-20">
                    <CardContent>
                        <div key={index} className="bg-white flex items-center justify-items-start gap-4">
                            <div className={`${detail.iconClassName} p-2 rounded-md text-white`}>
                                {detail.icon}
                            </div>
                            <div>
                                <h3 className="text-base font-semibold md:text-sm">{detail.title}</h3>
                                <span className="text-lg font-bold">{detail.count}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
export default DetailsCard

export const cardValues: detailsCardProps[] = [{
    iconClassName: "bg-blue-500",
    icon:<ClockArrowUp className=""/>,
    title:"Total Projects",
    count:24
},{
    iconClassName: "bg-green-500",
    icon:<CircleCheck className=""/>,
    title:"Completed",
    count:18
},{
    iconClassName: "bg-yellow-500",
    icon:<Clock4 className="" />,
    title:"In Progress",
    count:4
},{
    iconClassName: "bg-red-500",
    icon:<TriangleAlert className=""/>,
    title:"Overdue",
    count:2
}
]