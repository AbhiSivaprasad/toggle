import * as React from "react";

export class ClassViewSideBar extends React.Component<IClassSideBarProps, IClassSideBarState> {
    public state: IClassSideBarState;
    public props: IClassSideBarProps;


    public render() {
        return (
            <div className="class-side-bar">
                <div className="title">updates</div>
                <div className="panel"></div>
                <div className="title">classmates</div>
                <div className="panel"></div>
                <div className="panel"></div>
            </div>
        )
    }
}

export interface IClassSideBarState {
}

export interface IClassSideBarProps {
}