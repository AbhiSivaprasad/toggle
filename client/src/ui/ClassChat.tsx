import * as React from "react";
import {IAppData} from "../data/IAppData";
import {Feed} from "./Feed";
import {Tabs, TabList, Tab, TabPanel} from "react-tabs";

export class ClassChat extends React.Component<IClassState, IClassState> {
    public state: IClassState;
    public props: IClassProps;

    private handleSelect(index: number, last: number) {

    }

    public render() {
        Tabs.setUseDefaultStyles(true);

        return (
            <div className="class-chat">

            </div>
        );
    }
}

export interface IClassState {
}

export interface IClassProps {
    data: IAppData;
}