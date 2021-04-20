import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Loading from "./Loading";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
	const [loading, setLoading] = useState(true);
	const [jobs, setJobs] = useState([]);
	const [value, setValue] = useState(0);

	const companies = jobs.map((company) => company.company);

	const fetchjobs = async () => {
		setLoading(true);
		try {
			const response = await fetch(url);
			const Alljobs = await response.json();
			setJobs(Alljobs);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const getJob = (value) => {
		const { title, company, duties, dates } = jobs[value];
		return (
			<>
				<h3>{title}</h3>
				<h4>{company}</h4>
				<p className="job-date">{dates}</p>
				{duties.map((duty, index) => {
					return (
						<div className="job-desc" key={index}>
							<FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
							<p>{duty}</p>
						</div>
					);
				})}
			</>
		);
	};

	const getValue = (company) => {
		setValue(company);
	};

	useEffect(() => {
		fetchjobs();
	}, []);

	if (loading) {
		return (
			<section className="section loading">
				<Loading></Loading>
			</section>
		);
	} else {
		return (
			<section className="section">
				<div className="title">
					<h2>Expierence</h2>
					<div className="underline"></div>
				</div>
				<div className="jobs-center">
					<div className="btn-container">
						{companies.map((company, index) => {
							const cia = companies.indexOf(company);
							return (
								<button
									className={`job-btn ${cia === value && "active-btn"}`}
									key={index}
									onClick={() => {
										getValue(cia);
										console.log(cia);
									}}
								>
									{company}
								</button>
							);
						})}
					</div>
					<article className="job-info">{getJob(value)}</article>
				</div>
				<button type="button" className="btn">
					more info
				</button>
			</section>
		);
	}
}

export default App;
