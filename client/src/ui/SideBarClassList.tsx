import * as React from "react";
import {IClassListData} from "../data/IClassListData";
import {SideBarClassListItem} from "./SideBarClassListItem";

export class SideBarClassList extends React.Component<ISideBarClassListProps, ISideBarClassListState> {
    public state: ISideBarClassListState;
    public props: ISideBarClassListProps;


    public render() {
        for(var i = 0; i <= 3; i++) {
            console.log("data is: " + this.props.data.classList[i]);
        }

        //console.log("atm data is: " + this.props.data.classList);
        return (
            <div className="side-bar-current-class-list">
                {this.props.data.classList.map((item: string, index: number) => {
                    return (<SideBarClassListItem classTitle={item} key={index}/>)
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