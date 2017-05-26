import * as React from "react";
import {ClassChatInputBar} from "./ClassChatInputBar";
import {ClassChatMessages} from "./ClassChatMessages";

export class ClassChat extends React.Component<IClassChatProps, IClassChatState> {
    public state: IClassChatState;
    public props: IClassChatProps;

    public render() {
        return (
            <div className="class-chat">
                <ClassChatMessages />
                <ClassChatInputBar />
            </div>
        );
    }
}

export interface IClassChatState {
}

export interface IClassChatProps {
}