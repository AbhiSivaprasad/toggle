import * as React from "react";
import {ClassChatInputBar} from "./ClassChatInputBar";
import {ClassChatMessages} from "./ClassChatMessages";
import {IMessagesData} from "../data/IMessagesData";
import {IMessageData} from "../data/IMessageData";
import {IClassChatData} from "../data/IClassChatData";

export class ClassChat extends React.Component<IClassChatProps, IClassChatState> {
    public state: IClassChatState;
    public props: IClassChatProps;
    public webSocket;

    constructor() {
        super();

        let emptyMessages: IMessagesData = {messages: []};
        this.state = {data: emptyMessages};

        this.initializeSocket();
        this.webSocket.onmessage = this.receivedMessage.bind(this);

        this.messageSendHandler = this.messageSendHandler.bind(this);

        console.log("console works");
    }

    public messageSendHandler(userMessage: string) {
        let messageObj:IMessageData = {
            username: this.props.data.username,
            time: new Date(),
            isFromMe: true,
            message: userMessage
        };

        this.sendMessageToServer(userMessage);

        this.pushMessage(messageObj);
    }

    public sendMessageToServer(message: string) {
        if(message !== "") {
            this.webSocket.send(message);
        }
    }

    public pushMessage(message: IMessageData) {
        const messageData:IMessagesData = this.state.data;
        messageData.messages.push(message);
        this.setState({data: messageData});
    }

    public receivedMessage(m) {

        let messageObj:IMessageData = {
            username: this.props.data.username,
            time: new Date(),
            isFromMe: false,
            message: m.data
        };

        this.pushMessage(messageObj);
    }

    public initializeSocket() {
        if ('WebSocket' in window) {
            this.webSocket = new WebSocket('ws://' + window.location.host + '/chat');
        } else {
            console.log('Error: WebSocket is not supported by this browser.');
            return;
        }
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