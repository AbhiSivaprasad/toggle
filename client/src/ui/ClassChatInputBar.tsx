import * as React from "react";
import {ClassChatInputBarOptions} from "./ClassChatInputBarOptions";

export class ClassChatInputBar extends React.Component<IChatInputBarProps, IChatInputBarState> {
    public state: IChatInputBarState;
    public props: IChatInputBarProps;

    constructor(props: IChatInputBarProps) {
        super(props);

        this.state = {
            messageValue: "Type a message..."
        };

        this.updateState = this.updateState.bind(this);
    }

    updateState(e) {
        this.setState({messageValue: e.target.value});
    }

    public render() {
        return (
            <div className="class-chat-input-bar">
                <input type="text" className="message" value={this.state.messageValue}
                    onChange={this.updateState} />
                <div className="send-options">
                    <button className="send">Send</button>
                    <ClassChatInputBarOptions/>
                </div>
            </div>
        );
    }
}

export interface IChatInputBarState {
    messageValue: string;
}

export interface IChatInputBarProps {
}