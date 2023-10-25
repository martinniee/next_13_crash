import Link from 'next/link';

const Courses = ({ courses }) => {
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
