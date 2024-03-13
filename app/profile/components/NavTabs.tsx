"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsHeartFill, BsPerson, BsNewspaper } from "react-icons/bs";

const NavTabs = () => {
	const pathname = usePathname();
	const tabs = [
		{
			href: "/profile",
			text: "Profile",
			Icon: BsPerson,
		},
		{
			href: "/profile/posts",
			text: "Posts",
			Icon: BsNewspaper,
		},
		{
			href: "/profile/likes",
			text: "Likes",
			Icon: BsHeartFill,
		},
	];
	return (
		<div className='flex items-center gap-5 border-b pb-2 w-full '>
			{tabs.map(({ Icon, href, text }, index) => (
				<Link
					href={href}
					key={index}
					className={cn("flex items-center border w-full justify-center transition-all ", {
						"text-red-500 border-red-600 shadow-lg shadow-gray-800": pathname === href,
					})}>
					<Button variant={"outline"} className='font-semibold gap-2 w-full text-lg'>
						<Icon />
						{text}
					</Button>
				</Link>
			))}
		</div>
	);
};

export default NavTabs;
