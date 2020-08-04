import { createContext } from "react";

const AlgorithmsContext = createContext();

export const AlgorithmsProvider = AlgorithmsContext.Provider;
export const AlgorithmsConsumer = AlgorithmsContext.Consumer;

export default AlgorithmsContext;
