"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { createPost } from "@/lib/actions/post";
import { CgSpinner } from "react-icons/cg";

const NewPostArea = () => {
	const [inputValue, setInputValue] = useState("");
	const [loading, setLoading] = useState(false);
	const { toast } = useToast();
	const handleCreate = async () => {
		setLoading(true);
		const result = await createPost(inputValue);
		if (!result.error) {
			setInputValue("");
			toast({
				title: "Posted Successfully",
			});
		} else {
			toast({
				title: result.message,
			});
		}
		setLoading(false);
	};
	return (
		<div className='flex flex-row gap-x-4'>
			<div className='flex flex-col flex-1'>
				<Input
					placeholder='Only you know, who you are...'
					maxLength={500}
					value={inputValue}
					onChange={(event) => setInputValue(event.currentTarget.value)}
				/>
				{inputValue.length === 500 && (
					<span className='text-xs text-red-400 font-semibold mt-2'>
						Your post length cannot be more than 500 characters
					</span>
				)}
			</div>
			<Button disabled={loading || inputValue.length === 500} variant={"secondary"} onClick={handleCreate}>
				{loading ? <CgSpinner className='animate-spin' /> : "Post"}
			</Button>
		</div>
	);
};

export default NewPostArea;
