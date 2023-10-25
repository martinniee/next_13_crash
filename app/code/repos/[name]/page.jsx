import { Suspense } from 'react';
import Link from 'next/link';
import Repo from '@/app/components/Repo';
import RepoDirs from '@/app/components/RepoDirs';

// 在 Dynamic route 组件中获取 路由路径 参数
const RepoPage = ({ params: { name } }) => {
	return (
		<div className='card'>
			<Link href='/code/repos' className='btn btn-back'>
				Back to Respositories
			</Link>
			<Suspense fallback={<div>Loading repo.......</div>}>
				<Repo name={name} />
			</Suspense>
			<Suspense fallback={<div>Loading repoDirs......</div>}>
				<RepoDirs name={name} />
			</Suspense>
		</div>
	);
};

export default RepoPage;
