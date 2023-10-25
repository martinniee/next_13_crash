// 1.导入 nextjs response 用于响应
import { NextResponse } from 'next/server';
import courses from './data.json';

export async function GET(request) {
	// 2.响应返回 json 格式数据
	return NextResponse.json(courses);
}
