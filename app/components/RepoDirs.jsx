import Link from 'next/link';

async function fetchRepoContents(name) {
	await new Promise((resolve) => {
		setTimeout(resolve, 3000);
	});

	const response = await fetch(
		`https://api.github.com/repos/bradtraversy/${name}/contents`
	);
	const contents = await response.json();
	return contents;
}

const RepoDirs = async ({ name }) => {
	const contents = await fetchRepoContents(name);
	// 获取指定仓库下的所有目录
	const dirs = contents.filter((content) => content.type === 'dir');
	return (
		<>
			<h3>Directories</h3>
			<ul>
				{dirs.map((dir) => (
					<li key={dir.path}>
						<Link href={`/code/repos/${name}/${dir.path}`}>
							{dir.path}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default RepoDirs;
