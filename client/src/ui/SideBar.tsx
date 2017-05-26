import * as React from "react";
import {SideBarClassList} from "./SideBarClassList";
import {ISideBarData} from "../data/ISideBarData";
import {SideBarAddClass} from "./SideBarAddClass";

export class SideBar extends React.Component<ISideBarProps, ISideBarState> {
    public state: ISideBarState;
    public props: ISideBarProps;


    public render() {
        return (
            <div className="class-side-bar">
                <div className="side-bar-class-list">
                    <SideBarClassList data={this.props.data.classes} />
                    <SideBarAddClass />
                </div>
            </div>
        )
    }
}

export interface ISideBarState {
}

export interface ISideBarProps {
    data: ISideBarData;
}