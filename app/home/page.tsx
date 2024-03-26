import { getAllPosts } from "@/lib/actions/post";
import NewPostArea from "../profile/components/NewPostArea";
import RealTimePosts from "../profile/components/RealTimePosts";

export default async function Home() {
	const { data } = await getAllPosts();
	return (
		<div>
			<NewPostArea />
			{data.length > 0 ? <RealTimePosts serverPosts={data as any} /> : <div>nothing to show yet</div>}
		</div>
	);
}
