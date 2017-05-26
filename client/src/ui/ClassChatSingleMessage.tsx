import * as React from "react";
import {ClassChatInputBar} from "./ClassChatInputBar";
import {IMessageData} from "../data/IMessageData";

export class ClassChatSingleMessage extends React.Component<IChatSingleMessageProps, IChatSingleMessageState> {
    public state: IChatSingleMessageState;
    public props: IChatSingleMessageProps;

    public render() {
        const isFromMe = this.props.data.isFromMe ? "from-me" : "";

        return (
            <div className={"message ${isFromMe}"}>
                <div className="username">
                    {this.props.data.username}
                </div>
                <div className="timestamp">
                    {this.props.data.time}
                </div>
                <div className="message-body">
                    {this.props.data.message}
                </div>
            </div>
        );
    }
}

export interface IChatSingleMessageState {

}

export interface IChatSingleMessageProps {
    data: IMessageData;
}