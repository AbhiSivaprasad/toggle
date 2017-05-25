export enum IFeedItemDataType {
    QuestionAnswer = 0,
    File = 1,
}

export interface IFeedItemData {
    type: IFeedItemDataType;
    id: string;
}