import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import { FaLessThan } from "react-icons/fa";

const getLocalStorage = () => {
	let list = localStorage.getItem("list");
	if (list) {
		return JSON.parse(localStorage.getItem("list"));
	} else {
		return [];
	}
};

function App() {
	const [name, setName] = useState("");
	const [list, setList] = useState(getLocalStorage);
	const [isEditing, setIsEditing] = useState(false);
	const [editID, setEditID] = useState(null);
	const [alert, setAlert] = useState({
		show: false,
		type: "",
		msg: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name) {
			showAlert(true, "danger", "Please enter item!");
		} else if (name && isEditing) {
			// editing the item
			setList(
				list.map((item) => {
					if (item.id === editID) {
						return { ...list, title: name };
					}
					return item;
				})
			);
			setName("");
			setIsEditing(false);
			setEditID(null);
			showAlert(true, "success", "Item edited!");
		} else {
			const newItem = { id: new Date().getTime().toString(), title: name };
			setList([...list, newItem]);
			setName("");
			showAlert(true, "success", "Item added!");
		}
	};

	const showAlert = (show = false, type = "", msg = "") => {
		setAlert({ show, type, msg });
	};

	const clearList = () => {
		showAlert(true, "danger", "List Cleared!");
		setList([]);
		setName("");
	};

	const deleteItem = (id) => {
		showAlert(true, "danger", "Item removed!");
		setList(list.filter((item) => item.id !== id));
	};

	const editItem = (id) => {
		const specificItem = list.find((item) => item.id === id);
		setIsEditing(true);
		setEditID(id);
		setName(specificItem.title);
		console.log(specificItem);
	};

	// local storage
	useEffect(() => {
		localStorage.setItem("list", JSON.stringify(list));
	}, [list]);

	return (
		<section className="section-center">
			<form className="grocery-form" onSubmit={handleSubmit}>
				{alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
				<h3>Grocery Bud</h3>
				<div className="form-control">
					<input
						type="text"
						className="grocery"
						placeholder="eg. eggs"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<button type="submit" className="submit-btn">
						{isEditing ? "edit" : "submit"}
					</button>
				</div>
			</form>
			{list.length > 0 && (
				<div className="grocery-conteiner">
					<List items={list} deleteItem={deleteItem} editItem={editItem}></List>
					<button className="clear-btn" onClick={clearList}>
						Clear Items
					</button>
				</div>
			)}
		</section>
	);
}

export default App;
