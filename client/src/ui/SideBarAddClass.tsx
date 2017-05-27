import * as React from "react";
import {SideBarClassList} from "./SideBarClassList";
import {ISideBarData} from "../data/ISideBarData";
import {SideBarClassListItem} from "./SideBarClassListItem";

export class SideBarAddClass extends React.Component<ISideBarAddClassProps, ISideBarAddClassState> {
    public state: ISideBarAddClassState;
    public props: ISideBarAddClassProps;


    public render() {
        return (
            <SideBarClassListItem classTitle="Add Class" />
        )
    }
}

export interface ISideBarAddClassState {
}

export interface ISideBarAddClassProps {
}