import { createContext, ReactNode, useContext, useState } from "react";
import {IFilm} from "../../hooks/useFilms";

interface IHistoryContext {
    historyItems: IFilm[];
    addHistoryItem: (item: IFilm) => void;
    isWatched: (id:number) => boolean;
}

const initialValue: IHistoryContext = {
    historyItems: [],
    addHistoryItem: (item: IFilm) => {},
    isWatched: (id: number) => {
        return false;
    },
};

export const HistoryContext = createContext<IHistoryContext>(initialValue);

export function useHistoryContext() {
    return useContext(HistoryContext);
}

interface IHistoryContextProviderProps {
    children: ReactNode;
}

export function HistoryContextProvider(props: IHistoryContextProviderProps) {
    const { children } = props;
    const [historyItems, setHistoryItems] = useState<IFilm[]>([]);
    function addHistoryItem(item: IFilm){
        const tempArray = [...historyItems, item];
        setHistoryItems(tempArray);
    }

    function isWatched(id: number){
        return Boolean(historyItems.find((item) => item.id === id));
    }

    const Provider = HistoryContext.Provider;
    return (
        <Provider value={{ historyItems: historyItems, addHistoryItem: addHistoryItem, isWatched: isWatched }}>
            {children}
        </Provider>
    );
}