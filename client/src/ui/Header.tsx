import * as React from "react";
import {IHeaderData} from "../data/IHeaderData";

export class Header extends React.Component<IHeaderProps, any> {
    public props: IHeaderProps;

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="header">
                <div className="logo">Y Teacher</div>
                <div className="current-class">
                    {this.props.data.currentClassName} &nbsp;
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
                <div className="profile">{this.props.data.profile.name}</div>
            </div>
        );
    }
}

export interface IHeaderProps {
    data: IHeaderData;
}