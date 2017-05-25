import * as React from "react";
import {IFeedItemData} from "../data/IFeedItemData";

export class FeedItem extends React.Component<IFeedItemProps, IFeedItemState> {
    public render() {
        return (
            <div className="feed-item">feed item</div>
        );
    }
}

export interface IFeedItemState {
}

export interface IFeedItemProps {
    data: IFeedItemData;
}