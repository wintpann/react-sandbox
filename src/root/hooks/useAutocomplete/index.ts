import { useCallback, useEffect, useState } from 'react';
import { Lazy } from 'fp-ts/function';

type AutocompleteState<T> = {
    search: string;
    pageIndex: number;
    hasNextPage: boolean;
    autocompletedItems: T[];
};

type AutocompleteOptions<T> = {
    items: T[];
    pageSize: number;
    predicate: (item: T, search: string) => boolean;
};

type AutocompleteResult<T> = [T[], (search: string) => void, Lazy<void>];

export const useAutocomplete = <T>(options: AutocompleteOptions<T>): AutocompleteResult<T> => {
    const [state, setState] = useState<AutocompleteState<T>>({
        search: '',
        pageIndex: 0,
        hasNextPage: false,
        autocompletedItems: options.items.slice(0, options.pageSize),
    });

    const setSearch = useCallback((search: string) => {
        setState((prev) => ({ ...prev, search }));
    }, []);

    const getMatchedItems = useCallback((
        search: string,
        items: T[],
        predicate: (item: T, searchString: string) => boolean,
    ) => {
        const noSearch = search.trim().length === 0;
        return noSearch ? items : items.filter((item) => predicate(item, search));
    }, []);

    useEffect(
        () => setState((prev) => {
            const matchedItems = getMatchedItems(state.search, options.items, options.predicate);
            const autocompletedItems = matchedItems.slice(0, options.pageSize);
            const nextItems = matchedItems.slice(options.pageSize, options.pageSize * 2);
            const hasNextPage = nextItems.length > 0;
            return {
                ...prev,
                pageIndex: 0,
                hasNextPage,
                autocompletedItems,
            };
        }),
        [getMatchedItems, options.items, options.pageSize, options.predicate, state.search],
    );

    const loadNext = useCallback(() => {
        setState((prev) => {
            if (prev.hasNextPage) {
                const pageIndex = prev.pageIndex + 1;
                const [offsetStart, offsetEnd, nextOffsetEnd] = [
                    pageIndex * options.pageSize,
                    pageIndex * options.pageSize + options.pageSize,
                    pageIndex * options.pageSize + options.pageSize * 2,
                ];
                const matchedItems = getMatchedItems(
                    prev.search,
                    options.items,
                    options.predicate,
                );
                const autocompletedItems = [
                    ...prev.autocompletedItems,
                    ...matchedItems.slice(offsetStart, offsetEnd)
                ];
                const nextItems = matchedItems.slice(offsetEnd, nextOffsetEnd);
                const hasNextPage = nextItems.length > 0;
                return {
                    ...prev,
                    pageIndex,
                    autocompletedItems,
                    hasNextPage,
                };
            }

            return prev;
        });
    }, [
        getMatchedItems,
        options.items,
        options.pageSize,
        options.predicate,
    ]);

    return [state.autocompletedItems, setSearch, loadNext];
};
