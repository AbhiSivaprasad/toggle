import * as React from "react";
import {IClassListItemData} from "../data/IClassListItemData";


export class SideBarClassListItem extends React.Component<ISideBarClassListItemProps, ISideBarClassListItemState> {
    public state: ISideBarClassListItemState;
    public props: ISideBarClassListItemProps;


    public render() {
        return (
            <div className="side-bar-class-list-item">
                <button type="button">{this.props.data}</button>
            </div>
        )
    }
}

export interface ISideBarClassListItemState {
}

export interface ISideBarClassListItemProps {
    data: IClassListItemData
}