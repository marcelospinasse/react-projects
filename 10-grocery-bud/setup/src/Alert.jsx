import React, { useEffect } from "react";

const Alert = ({ msg, type, removeAlert, list }) => {
	useEffect(() => {
		const timeout = setTimeout(() => {
			removeAlert(); //(false, "", "")
		}, 2000);
		return () => {
			clearInterval(timeout);
		};
	}, [list]);
	return <p className={`alert-${type}`}>{msg}</p>;
};

export default Alert;
