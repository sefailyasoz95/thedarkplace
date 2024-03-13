import { getMyPosts } from "@/lib/actions/post";
import React from "react";
import NewPostArea from "../components/NewPostArea";
import RealTimePosts from "../components/RealTimePosts";
import { supabaseServerClient } from "@/lib/supabase";

const ProfilePosts = async () => {
	const myPosts = await getMyPosts();
	const supabase = await supabaseServerClient();
	const { data } = await supabase.auth.getSession();
	return (
		<div className='flex flex-col w-full gap-y-5'>
			<NewPostArea />
			<RealTimePosts serverPosts={myPosts.data as any} userId={data.session?.user.id} />
		</div>
	);
};

export default ProfilePosts;
