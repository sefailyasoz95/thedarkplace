import { create } from "zustand";

interface IsFetchingState {
	isFetching: boolean | undefined;
	setIsFetching: (isFetching: boolean | undefined) => void;
}

export const useIsFetching = create<IsFetchingState>()((set) => ({
	isFetching: true,
	setIsFetching: (isFetching) => set(() => ({ isFetching })),
}));
