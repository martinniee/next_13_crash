'use client';
import Courses from './components/Courses';
import Link from 'next/link';
// loading 会自动应用在 server-components,如果要在 client-components
// 使用，需要手动使用
import LoadingPage from './loading';
import { useEffect, useState } from 'react';
const HomePage = () => {
	const [courses, setCourses] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCourses = async () => {
			const res = await fetch('/api/courses');
			const data = await res.json();

			setCourses(data);
			// 默认 loading 为 true,如果为 false，说明使用的是 client-components 方式
			setLoading(false);
		};

		fetchCourses();
	}, []);

	if (loading) {
		return <LoadingPage />;
	}

	return (
		<div>
			<h1>Welcom to Traversy Media</h1>
			<Courses courses={courses} />
		</div>
	);
};

export default HomePage;
