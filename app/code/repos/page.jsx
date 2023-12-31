import Link from 'next/link';

import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

async function fetchRepos() {
	// 1.使用 fetch api 获取数据
	const response = await fetch(
		'https://api.github.com/users/bradtraversy/repos',
		{
			// 用于处理经常 请求的数据
			next: {
				revalidate: 60
			}
		}
	);

	// 等待 1s
	await new Promise((resolve) => {
		setTimeout(resolve, 1000);
	});

	// 2.解析为 json 格式
	const repos = await response.json();
	return repos;
}

const ReposPage = async () => {
	const repos = await fetchRepos();
	return (
		<div className='repos-container'>
			<h2>Repositories</h2>
			<ul className='repo-list'>
				{repos.map((repo) => (
					<li key={repo.id}>
						<Link href={`/code/repos/${repo.name}`}>
							<h3>{repo.name}</h3>
							<p>{repo.description}</p>
							<div className='repo-details'>
								<span>
									<FaStar /> {repo.stargazers_count}
								</span>
								<span>
									<FaCodeBranch /> {repo.forks_count}
								</span>
								<span>
									<FaEye /> {repo.watchers_count}
								</span>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ReposPage;
