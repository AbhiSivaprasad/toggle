import * as React from "react";
import {ClassChatInputBarOptions} from "./ClassChatInputBarOptions";

export class ClassChatInputBar extends React.Component<IChatInputBarProps, IChatInputBarState> {
    public state: IChatInputBarState;
    public props: IChatInputBarProps;

    constructor(props: IChatInputBarProps) {
        super(props);

        this.state = {messageValue: ""};

        this.updateState = this.updateState.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    updateState(event) {
        this.setState({messageValue: event.target.value});
    }

    submitHandler(event) {
        event.preventDefault();
        this.props.messageSendHandler(this.state.messageValue);
        this.setState({messageValue: ""});
    }

    public render() {
        return (
            <form className="class-chat-input-bar" onSubmit={this.submitHandler}>
                <input type="text" className="message"
                    value={this.state.messageValue}
                    onChange={this.updateState}
                    placeholder="Type a message..."
                    required />

                {/* <div className="send-options">
                    <button className="send">Send</button>
                    <ClassChatInputBarOptions/>
                </div> */}
            </form>
        );
    }
}

export interface IChatInputBarState {
    messageValue: string;
}

export interface IChatInputBarProps {
    messageSendHandler(event): void;
}