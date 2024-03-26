import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/nav/Navbar";
import SessionProvider from "@/components/session-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "The Dark Place",
	description: "A Dark Place where you can share your thoughts anonymously.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const accessToken = undefined;

	return (
		<html lang='en' suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider attribute='class' defaultTheme='dark' disableTransitionOnChange forcedTheme='dark'>
					<main className='max-w-7xl mx-auto p-10 space-y-5'>
						<Navbar />
						{children}
						<Toaster />
					</main>
				</ThemeProvider>
				<SessionProvider />
			</body>
		</html>
	);
}
