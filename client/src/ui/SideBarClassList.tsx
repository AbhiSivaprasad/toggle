import * as React from "react";
import {IClassListData} from "../data/IClassListData";
import {IClassListItemData} from "../data/IClassListItemData";
import {SideBarClassListItem} from "./SideBarClassListItem";

export class SideBarClassList extends React.Component<ISideBarClassListProps, ISideBarClassListState> {
    public state: ISideBarClassListState;
    public props: ISideBarClassListProps;


    public render() {
        return (
            <div className="side-bar-class-list">
                {this.props.data.classList.map((item: IClassListItemData, index: number) => {
                    return (<SideBarClassListItem data={item} key={index}/>)
                })}
            </div>
        )
    }
}

export interface ISideBarClassListState {
}

export interface ISideBarClassListProps {
    data: IClassListData;
}