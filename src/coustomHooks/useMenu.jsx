import { useEffect, useState } from "react";

const useMenu = () => {
	const [menu, setMenu] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch(`${import.meta.env.VITE_SERVER_API}/menu`)
			.then((res) => res.json())
			.then((data) => {
				setMenu(data);
				setLoading(false);
			});
	}, []);
	return [menu, loading];
};
export default useMenu;
