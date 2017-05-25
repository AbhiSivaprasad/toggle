import * as React from "react";
import {IAppData} from "../data/IAppData";
import {Feed} from "./Feed";
import {Tabs, TabList, Tab, TabPanel} from "react-tabs";
import {ClassViewSideBar} from "./ClassViewSideBar";

export class ClassView extends React.Component<IClassState, IClassState> {
    public state: IClassState;
    public props: IClassProps;

    private handleSelect(index: number, last: number) {

    }

    public render() {
        Tabs.setUseDefaultStyles(false);

        return (
            <div className="class-view">
                <Tabs
                    onSelect={this.handleSelect}
                    selectedIndex={0}
                >
                    <TabList>
                        <Tab>Q&amp;A</Tab>
                        <Tab>Files</Tab>
                        <Tab>Chat</Tab>
                    </TabList>
                    <TabPanel>
                        <Feed data={this.props.data.feed}/>
                    </TabPanel>
                    <TabPanel>
                        <h2>Files</h2>
                    </TabPanel>
                    <TabPanel>
                        <iframe src="http://deadsimplechat.com/+CcNKO" width="800px" height="600px"></iframe>
                    </TabPanel>
                </Tabs>
                <ClassViewSideBar/>
            </div>
        );
    }
}

export interface IClassState {
}

export interface IClassProps {
    data: IAppData;
}