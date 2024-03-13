import { useUser } from "@/lib/store/user";
import Image from "next/image";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Link from "next/link";
import { Button } from "../ui/button";
import { LogOut, UserIcon } from "lucide-react";
import { createBrowserClient } from "@supabase/ssr";
import { useRouter } from "next/navigation";

type Props = {};

const Profile = (props: Props) => {
	const user = useUser((state) => state.user);
	const setUser = useUser((state) => state.setUser);
	const router = useRouter();
	const supabase = createBrowserClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);
	const handleLogout = async () => {
		await supabase.auth.signOut();
		setUser(undefined);
		router.push("/");
	};
	return (
		<Popover>
			<PopoverTrigger>
				<Image
					src={user?.user_metadata.avatar_url}
					alt={user?.email || "profile picture"}
					width={50}
					height={50}
					className='rounded-full'
				/>
			</PopoverTrigger>
			<PopoverContent className='p-2 space-y-3 rounded-lg'>
				<div className='px-4 text-sm'>
					<p>{user?.user_metadata.name}</p>
					<p className='text-gray-500'>{user?.user_metadata.email}</p>
				</div>
				<Link className='block' href={"/profile/posts"}>
					<Button variant={"ghost"} className='w-full flex items-center justify-between'>
						Profile
						<UserIcon />
					</Button>
				</Link>
				<Button variant={"destructive"} className='w-full flex items-center justify-between' onClick={handleLogout}>
					Logout
					<LogOut />
				</Button>
			</PopoverContent>
		</Popover>
	);
};

export default Profile;
