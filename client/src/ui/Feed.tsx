import * as React from "react";
import {IFeedData} from "../data/IFeedData";
import {QuestionAnswerFeedItem} from "./QuestionAnswerFeedItem";
import {IQuestionFeedItemData} from "../data/IQuestionFeedItemData";

export class Feed extends React.Component<IFeedProps, IFeedState> {
    public state: IFeedState;
    public props: IFeedProps;

    public render() {
        return (
            <div className="feed">
                {
                    this.props.data.feedItems.map((item: IQuestionFeedItemData) => {
                        return <QuestionAnswerFeedItem data={item} key={item.id}/>;
                    })
                }
            </div>
        );
    }
}

export interface IFeedState {
}

export interface IFeedProps {
    data: IFeedData;
}