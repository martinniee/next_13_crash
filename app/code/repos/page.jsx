async function fetchRepos() {
	// 1.使用 fetch api 获取数据
	const response = await fetch(
		'https://api.github.com/users/bradtraversy/repos'
	);
	// 2.解析为 json 格式
	const repos = await response.json();
	return repos;
}

const ReposPage = async () => {
	const repos = await fetchRepos();
	console.log(repos);
	return <div>{repos[0].name}</div>;
};

export default ReposPage;
