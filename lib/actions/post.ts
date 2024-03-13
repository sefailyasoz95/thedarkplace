"use server";

import { supabaseServerClient } from "../supabase";

export async function createPost(text: string) {
	const supabase = await supabaseServerClient();
	const { data } = await supabase.auth.getSession();
	try {
		const result = await supabase.from("posts").insert({
			text,
			userId: data.session?.user.id,
		});
		if (result.error) {
			return {
				error: true,
				message: JSON.stringify(result),
			};
		} else {
			return {
				error: false,
				message: result.statusText,
			};
		}
	} catch (error) {
		return {
			error: true,
			message: JSON.stringify(error),
		};
	}
}

export async function getMyPosts() {
	const supabase = await supabaseServerClient();
	const { data } = await supabase.auth.getSession();
	try {
		const result = await supabase
			.from("posts")
			.select(`text, created_at,isUpdated,likes,reposts, users(email,display_name)`)
			.filter("userId", "eq", data.session?.user.id)
			.order("created_at", { ascending: false });

		if (!result.error) {
			return {
				data: result.data,
				error: false,
			};
		} else {
			return {
				data: [],
				error: true,
			};
		}
	} catch (error: any) {
		return {
			data: [],
			error: true,
		};
	}
}
export async function getAllPosts() {
	const supabase = await supabaseServerClient();
	try {
		const result = await supabase
			.from("posts")
			.select(`text, created_at,isUpdated,likes,reposts, users(email,display_name)`)
			.order("created_at", { ascending: false });

		if (!result.error) {
			return {
				data: result.data,
				error: false,
			};
		} else {
			return {
				data: [],
				error: true,
			};
		}
	} catch (error: any) {
		return {
			data: [],
			error: true,
		};
	}
}
