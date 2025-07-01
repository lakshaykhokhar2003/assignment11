import DetailsCard, {cardValues} from "@/components/DetailsCard";
import Projects, {projectValues} from "@/components/Projects";
import React from "react";
import Activity, {ActivityValues} from "@/components/Activity";
import Actions, {ActionValues} from "@/components/Actions";

export default function Home() {
    return (
        <div className="">
            <div className="">
                <h1 className="text-2xl font-bold text-gray-900">
                    Welcome Back, John!
                </h1>
                <small className="text-gray-600 text-sm">Here&apos;s what&apos;s happening with your projects
                    today.</small>
            </div>
            <div className="flex flex-col my-4">
                <DetailsCard values={cardValues}/>
                <div className="my-4 flex flex-row justify-between">
                    <Projects values={projectValues}/>
                    <div className="flex flex-col justify-between max-w-1/3 w-full gap-5">
                        <Activity values={ActivityValues}/>
                        <Actions values={ActionValues}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
