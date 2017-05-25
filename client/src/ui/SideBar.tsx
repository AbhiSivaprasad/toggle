import * as React from "react";
import {SideBarClassList} from "./SideBarClassList";
import {ISideBarData} from "../data/ISideBarData";

export class SideBar extends React.Component<ISideBarProps, ISideBarState> {
    public state: ISideBarState;
    public props: ISideBarProps;


    public render() {
        return (
            <div className="class-side-bar">
                <SideBarClassList data={this.props.data.classes}/>
                <div className="title">updates</div>
                <div className="panel"></div>
                <div className="title">classmates</div>
                <div className="panel"></div>
                <div className="panel"></div>
            </div>
        )
    }
}

export interface ISideBarState {
}

export interface ISideBarProps {
    data: ISideBarData;
}