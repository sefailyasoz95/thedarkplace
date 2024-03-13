"use client";

import React from "react";
import { Button } from "../ui/button";
import { SiGoogle } from "react-icons/si";
import { createBrowserClient } from "@supabase/ssr";
import { usePathname } from "next/navigation";

const LoginForm = () => {
	const pathname = usePathname();
	const supabase = createBrowserClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);
	const handleLogin = () => {
		supabase.auth.signInWithOAuth({
			provider: "google",
			options: {
				redirectTo: `${location.origin}/auth/callback?next=${pathname}`,
			},
		});
	};
	return (
		<Button
			variant={"outline"}
			className='inline-flex gap-x-1.5 animate-shimmer items-center justify-center bg-[linear-gradient(110deg,#000103,45%,#4f5a6e,55%,#000103)] bg-[length:200%_100%] font-medium  transition-colors focus:outline-none'
			onClick={handleLogin}>
			Sign In With
			<SiGoogle />
		</Button>
	);
};

export default LoginForm;
