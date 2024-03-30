"use client";
import Link from "next/link";
import React from "react";
import LoginForm from "./LoginForm";
import { useUser } from "@/lib/store/user";
import Profile from "./Profile";

const Navbar = () => {
	const user = useUser((state) => state.user);
	console.log("user: ", user);

	return (
		<nav className={`${user?.id ? "flex items-center justify-between" : "hidden"}`}>
			<div className='group'>
				{/* <div className='flex flex-col items-center cursor-pointer'>
					<small className='text-xs text-gray-400'>Share your thoughts anonymously</small>
				</div> */}
				<Link href={"/"} className='text-2xl font-semibold'>
					TheDarkPlace
				</Link>
				<div className='h-1 w-0 group-hover:w-full transition-all bg-red-600'></div>
			</div>
			{user?.id ? <Profile /> : <LoginForm />}
		</nav>
	);
};

export default Navbar;
