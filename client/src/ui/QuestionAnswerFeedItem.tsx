import * as React from "react";
import {IQuestionFeedItemData} from "../data/IQuestionFeedItemData";

export class QuestionAnswerFeedItem extends React.Component<IQuestionAnswerFeedItemProps, IQuestionAnswerFeedItemState> {
    public props: IQuestionAnswerFeedItemProps;
    public state: IQuestionAnswerFeedItemState;

    public render() {
        return (
            <div className="question-answer-feed-item">
                <div className="question-author">
                    {this.props.data.authorName}
                </div>
                <div className="question">
                    {this.props.data.question}
                </div>
                <div className="best-answer">
                    {this.props.data.bestAnswer.answerText}
                </div>
                <div className="best-answer-author">
                    (
                    <span className="upvotes">+{this.props.data.bestAnswer.upvotes}</span> and
                    <span className="downvotes">&nbsp;-{this.props.data.bestAnswer.downvotes}</span>
                    ) {this.props.data.bestAnswer.authorName}
                </div>
            </div>
        );
    }
}

export interface IQuestionAnswerFeedItemState {
}

export interface IQuestionAnswerFeedItemProps {
    data: IQuestionFeedItemData;
}