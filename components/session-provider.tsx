"use client";
import { useIsFetching } from "@/lib/store/isFetching";
import { useUser } from "@/lib/store/user";
import { createBrowserClient } from "@supabase/ssr";
import React, { useEffect } from "react";

const SessionProvider: React.FC = () => {
	const setUser = useUser((state) => state.setUser);
	const setIsFetching = useIsFetching((state) => state.setIsFetching);
	const supabase = createBrowserClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);
	const readUserSession = async () => {
		setIsFetching(true);
		const { data } = await supabase.auth.getSession();
		setUser(data.session?.user);
		setIsFetching(false);
	};
	useEffect(() => {
		readUserSession();
	}, []);

	return <></>;
};

export default SessionProvider;
