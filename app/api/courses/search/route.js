import { NextResponse } from 'next/server';

import courses from '../data.json';

export async function GET(request) {
	// 1.获取请求 url 的 query parameters对象 {key:value} 格式
	const { searchParams } = new URL(request.url);
	// 2.获取指定 key 为 'query' 的 value
	const query = searchParams.get('query');

	// 3.忽略大小写过滤出结果
	const filteredCourses = courses.filter(
		(course = course.title.toLowerCase().includes(query.toLowerCase()))
	);
	return NextResponse.json(filteredCourses);
}
