import {IFeedData} from "./IFeedData";
import {IHeaderData} from "./IHeaderData";
import {ISideBarData} from "./ISideBarData";

export interface IAppData {
    feed: IFeedData;
    header: IHeaderData;
    sidebar: ISideBarData;
}