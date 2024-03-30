"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useUser } from "@/lib/store/user";
import { useIsFetching } from "@/lib/store/isFetching";

export default function Home() {
	const user = useUser((state) => state.user);
	const isFetching = useIsFetching((state) => state.isFetching);

	return (
		<React.Fragment>
			{isFetching ? (
				<div className='h-screen flex items-center justify-center'>
					<span className='animate-bounce text-2xl font-semibold'>Loading...</span>
				</div>
			) : user?.id ? (
				<div>show list</div>
			) : (
				<LampContainer>
					<motion.h1
						initial={{ opacity: 0.5, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							delay: 0.3,
							duration: 0.8,
							ease: "easeInOut",
						}}
						className='mt-8 bg-gradient-to-br from-white to-black py-4 bg-clip-text flex flex-col items-center text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl'>
						{/* A place for people who are not comfortable with sharing their thoughts online because what other people would
				think and have no one to talk about their problems, because they are lonely. */}
						<span>The Dark Place, share your thoughts anonymously.</span>
						<button className='inline-flex h-12 mt-10 animate-shimmer text-lg items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#4f5a6e,55%,#000103)] bg-[length:200%_100%] w-fit px-10 font-medium text-white transition-colors focus:outline-none'>
							Get Started
						</button>
					</motion.h1>
				</LampContainer>
			)}
		</React.Fragment>
	);
}

export const LampContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
	return (
		<div
			className={cn(
				"relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md z-0 ",
				className
			)}>
			<div className='relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 '>
				<motion.div
					initial={{ opacity: 0.5, width: "15rem" }}
					whileInView={{ opacity: 1, width: "30rem" }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					style={{
						backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
					}}
					className='absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-gray-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]'>
					<div className='absolute  w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]' />
					<div className='absolute  w-40 h-[100%] left-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]' />
				</motion.div>
				<motion.div
					initial={{ opacity: 0.5, width: "15rem" }}
					whileInView={{ opacity: 1, width: "30rem" }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					style={{
						backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
					}}
					className='absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-gray-500 text-white [--conic-position:from_290deg_at_center_top]'>
					<div className='absolute  w-40 h-[100%] right-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]' />
					<div className='absolute  w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]' />
				</motion.div>
				<div className='absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl'></div>
				<div className='absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md'></div>
				<div className='absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-gray-500 opacity-50 blur-3xl'></div>
				<motion.div
					initial={{ width: "8rem" }}
					whileInView={{ width: "16rem" }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className='absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-gray-400 blur-2xl'></motion.div>
				<motion.div
					initial={{ width: "15rem" }}
					whileInView={{ width: "30rem" }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className='absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-gray-400 '></motion.div>

				<div className='absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black '></div>
			</div>

			<div className='relative z-50 flex -translate-y-80 flex-col items-center px-5'>{children}</div>
		</div>
	);
};
