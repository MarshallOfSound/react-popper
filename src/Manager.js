// @flow
import * as React from "react";

export const ManagerContext = React.createContext<*>({ getReferenceRef: undefined, referenceNode: undefined });

export type ManagerProps = {
  children: React.Node,
};
type ManagerState = {
  context: {
    getReferenceRef?: (?HTMLElement) => void,
    referenceNode?: ?HTMLElement,
  },
};

export default class Manager extends React.Component<ManagerProps, ManagerState> {
  constructor() {
    super();
    this.state = {
      context: {
        getReferenceRef: this.getReferenceRef,
        referenceNode: undefined,
      },
    };
  }

  getReferenceRef = (referenceNode: ?HTMLElement) =>
    this.setState(({ context }) => ({
      context: { ...context, referenceNode },
    }));

  render() {
    return (
      <ManagerContext.Provider value={this.state.context}>
        {this.props.children}
      </ManagerContext.Provider>
    );
  }
}
