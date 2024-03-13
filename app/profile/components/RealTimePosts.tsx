"use client";
import { supabaseClient } from "@/lib/supabase/client";
import { Post } from "@/lib/types/supabase";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { BsHeartFill, BsRepeat } from "react-icons/bs";

type Props = {
	serverPosts: Post[];
	userId?: string;
};

const RealTimePosts = ({ serverPosts, userId }: Props) => {
	const [posts, setPosts] = useState(serverPosts);

	useEffect(() => {
		const channel = supabaseClient
			.channel("realtime posts")
			.on(
				"postgres_changes",
				{
					event: "INSERT",
					schema: "public",
					table: "posts",
					filter: userId ? `userId=eq.${userId}` : undefined,
				},
				(payload: any) => {
					setPosts([payload.new, ...posts]);
				}
			)
			.subscribe();
		return () => {
			supabaseClient.removeChannel(channel);
		};
	}, [supabaseClient]);

	return posts.length > 0 ? (
		<div>
			{posts.map((post, index) => (
				<div
					key={index}
					className='px-5 py-3 rounded-lg my-5 bg-black flex flex-col hover:shadow-lg hover:shadow-gray-900 transition-all duration-200'>
					<div className='flex flex-row justify-between'>
						<span>{post.text}</span>
						<span className='text-xs text-gray-500 min-w-fit'>{moment(post.created_at).fromNow()}</span>
					</div>
					<div className='flex items-center justify-end gap-x-3'>
						<div className='flex flex-row items-center justify-end gap-x-1'>
							<BsHeartFill size={12} /> {post.likes}
						</div>
						<div className='flex flex-row items-center justify-end gap-x-1'>
							<BsRepeat size={12} /> {post.reposts}
						</div>
					</div>
				</div>
			))}
		</div>
	) : (
		<div className='px-5 py-3 '>Nothing to show yet</div>
	);
};

export default RealTimePosts;
