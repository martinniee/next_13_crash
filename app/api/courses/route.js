// 1.导入 nextjs response 用于响应
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import courses from './data.json';

export async function GET(request) {
	// 2.响应返回 json 格式数据
	return NextResponse.json(courses);
}
export async function POST(request) {
	const { title, description, level, link } = await request.json();

	const newCourse = {
		id: uuidv4(),
		title,
		description,
		level,
		link
	};
	courses.push(newCourse);

	const courses = await request.json(courses);
}
