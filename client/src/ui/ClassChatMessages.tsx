import * as React from "react";
import {ClassChatInputBar} from "./ClassChatInputBar";
import {IMessagesData} from "../data/IMessagesData";
import {IMessageData} from "../data/IMessageData";
import {ClassChatSingleMessage} from "./ClassChatSingleMessage";

export class ClassChatMessages extends React.Component<IClassChatMessagesProps, IClassChatMessagesState> {
    public state: IClassChatMessagesState;
    public props: IClassChatMessagesProps;

    public render() {
        return (
            <div className="class-chat-messages">
                {this.props.data.messages.map((item: IMessageData, index: number) => {
                    return (
                        <ClassChatSingleMessage
                            key={index}
                            data={item} />
                    );
                })}
            </div>
        );
    }

    private componentdidUpdate() {
        const messagesObj = document.getElementById("class-chat-messages");
        messagesObj.scrollTop = messagesObj.scrollHeight;
    }
}

export interface IClassChatMessagesState {

}

export interface IClassChatMessagesProps {
    data: IMessagesData;
}