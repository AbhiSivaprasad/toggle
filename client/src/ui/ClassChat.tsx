import * as React from "react";
import {ClassChatInputBar} from "./ClassChatInputBar";
import {ClassChatMessages} from "./ClassChatMessages";
import {IMessagesData} from "../data/IMessagesData";
import {IMessageData} from "../data/IMessageData";
import {IClassChatData} from "../data/IClassChatData";

export class ClassChat extends React.Component<IClassChatProps, IClassChatState> {
    public state: IClassChatState;
    public props: IClassChatProps;

    constructor() {
        super();

        let emptyMessages: IMessagesData = {messages: []};
        this.state = {data: emptyMessages};

        this.messageSendHandler = this.messageSendHandler.bind(this);
    }

    public messageSendHandler(userMessage: string) {
        let messageObj:IMessageData = {
            username: this.props.data.username,
            time: new Date(),
            isFromMe: true,
            message: userMessage
        };


        this.pushMessage(messageObj);
    }

    public pushMessage(message: IMessageData) {
        let messageData:IMessagesData = this.state.data;
        messageData.messages.push(message);
        this.setState({data: messageData});
    }

    public render() {
        return (
            <div className="class-chat">
                <ClassChatMessages data={this.state.data} />
                <ClassChatInputBar messageSendHandler={this.messageSendHandler} />
            </div>
        );
    }
}

export interface IClassChatState {
    data: IMessagesData;
}

export interface IClassChatProps {
    data: IClassChatData;
}