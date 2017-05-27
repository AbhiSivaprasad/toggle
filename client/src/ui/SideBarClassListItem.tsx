import * as React from "react";

export class SideBarClassListItem extends React.Component<ISideBarClassListItemProps, ISideBarClassListItemState> {
    public state: ISideBarClassListItemState;
    public props: ISideBarClassListItemProps;


    public render() {
        return (
            <button type="button" className="class-button">{this.props.classTitle}</button>
        )
    }
}

export interface ISideBarClassListItemState {
}

export interface ISideBarClassListItemProps {
    classTitle: string;
}