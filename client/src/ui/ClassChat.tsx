import * as React from "react";
import {ClassChatInputBar} from "./ClassChatInputBar";

export class ClassChat extends React.Component<IClassProps, IClassState> {
    public state: IClassState;
    public props: IClassProps;

    public render() {
        return (
            <div className="class-chat">
                <ClassChatInputBar />
            </div>
        );
    }
}

export interface IClassState {
}

export interface IClassProps {
}