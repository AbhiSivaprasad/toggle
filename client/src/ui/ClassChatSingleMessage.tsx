import * as React from "react";
import {ClassChatInputBar} from "./ClassChatInputBar";
import {IMessageData} from "../data/IMessageData";

export class ClassChatSingleMessage extends React.Component<IChatSingleMessageProps, IChatSingleMessageState> {
    public state: IChatSingleMessageState;
    public props: IChatSingleMessageProps;

    public render() {
        const isFromMe = this.props.data.isFromMe ? "from-me" : "";

        const items = [
            <div className="message-icon" key={1}>

            </div>,
            <div className="message-body" key={2}>
                {this.props.data.message}
            </div>
        ];
        return (
            <div className={"message " + isFromMe}>
                {items}
            </div>
        );
    }


}

export interface IChatSingleMessageState {

}

export interface IChatSingleMessageProps {
    data: IMessageData;
}