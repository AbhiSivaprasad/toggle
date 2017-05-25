import {IFeedItemData} from "./IFeedItemData";
import {IAnswerData} from "./IAnswerData";

export interface IQuestionFeedItemData extends IFeedItemData {
    authorId: string;
    authorName: string;
    question: string;
    bestAnswer: IAnswerData;
    otherAnswers: IAnswerData[];
}