import { createContext } from "react";

const DataContext = createContext();

export const DataProvider = DataContext.Provider;
export const DataConsumer = DataContext.Consumer;

export default DataContext;
