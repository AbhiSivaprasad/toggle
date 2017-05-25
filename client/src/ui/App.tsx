import * as React from "react";
import {IAppData} from "../data/IAppData";
import {Header} from "./Header";
import {ClassChat} from "./ClassChat";
import {ClassViewSideBar} from "./ClassViewSideBar";

export class App extends React.Component<any, IAppState> {
    public state: IAppState;

    constructor(props: any) {
        super(props);

        this.state = {
            data: require("!json-loader!../../json/test-data.json")
        };
    }

    public render() {
        return (
            <div className="app">
                <Header data={this.state.data.header}/>
                <ClassChat data={this.state.data}/>
            </div>
        );
    }
}

export interface IAppState {
    data: IAppData;
}