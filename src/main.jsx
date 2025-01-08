import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Create a client
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AuthProvider>
			// Provide the client to your App
			<QueryClientProvider client={queryClient}>
				<HelmetProvider>
					<div className='max-w-screen-2xl mx-auto'>
						<RouterProvider router={router}></RouterProvider>
					</div>
				</HelmetProvider>
			</QueryClientProvider>
		</AuthProvider>
	</StrictMode>
);
