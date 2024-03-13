import { Button } from "@/components/ui/button";
import Image from "next/image";
import NewPostArea from "./profile/components/NewPostArea";
import { getAllPosts } from "@/lib/actions/post";
import RealTimePosts from "./profile/components/RealTimePosts";

export default async function Home() {
	const { data } = await getAllPosts();
	return (
		<div>
			<NewPostArea />
			{data.length > 0 ? <RealTimePosts serverPosts={data as any} /> : <div>nothing to show yet</div>}
		</div>
	);
}
