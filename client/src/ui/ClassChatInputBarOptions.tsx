import * as React from "react";

export class ClassChatInputBarOptions extends React.Component<IChatInputBarOptionsProps, IChatInputBarOptionsState> {
    public state: IChatInputBarOptionsState;
    public props: IChatInputBarOptionsProps;

    public render() {
        return (
            <button className="options">options</button>
        );
    }
}

export interface IChatInputBarOptionsState {
}

export interface IChatInputBarOptionsProps {
}