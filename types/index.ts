import React from "react";

export type detailsCardProps = {
    iconClassName?: string;
    icon: React.ReactNode;
    title:string;
    count: number;
}

export type projectCardProps = {
    iconClassName?: string;
    icon: React.ReactNode;
    title: string;
    dueDate: string;
    status: string;
    statusClassName?: string;
}

export type activityProps = {
    name:string;
    avatar?: string;
    avatarClassName?: string;
    description: string;
    time: string;
}


export type actionsProps = {
 icon: React.ReactNode;
 iconClassName?: string;
 title: string;
 backgroundClass?: string;
}