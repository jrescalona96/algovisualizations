import { createContext } from "react";

const ControlsContext = createContext();

export const ControlsProvider = ControlsContext.Provider;
export const ControlsConsumer = ControlsContext.Consumer;

export default ControlsContext;
