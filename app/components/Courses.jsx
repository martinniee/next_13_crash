import Link from 'next/link';

async function fetchCourses() {
	const response = await fetch('http://localhost:3000//api/courses');
	const courses = await response.json();
	return courses;
}

const Courses = async () => {
	const courses = await fetchCourses();
	return (
		<div className='courses'>
			{courses.map((courses) => (
				<div key={courses.id} className='card'>
					<h2>{courses.title}</h2>
					<small>Level:{courses.level}</small>
					<p>{courses.description}</p>
					<Link href={courses.link} target='_blank' className='btn'>
						Go to Course
					</Link>
				</div>
			))}
		</div>
	);
};

export default Courses;
