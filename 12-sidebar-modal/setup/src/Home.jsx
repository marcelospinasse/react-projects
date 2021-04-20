import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./context"; //useGlobalContext (custom hook) não sendo usado aqui... só em Sidebar e Model

const Home = () => {
	const { openSidebar, openModal } = useContext(AppContext);
	return (
		<main>
			<button className="sidebar-toggle" onClick={openSidebar}>
				<FaBars />
			</button>
			<button className="btn" onClick={openModal}>
				show modal
			</button>
		</main>
	);
};

export default Home;
