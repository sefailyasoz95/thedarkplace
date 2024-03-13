import React from "react";
import NavTabs from "./components/NavTabs";

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='space-y-5'>
			<NavTabs />
			{children}
		</div>
	);
};

export default layout;
