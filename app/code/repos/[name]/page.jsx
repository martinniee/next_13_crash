import React from 'react';

// 在 Dynamic route 组件中获取 路由路径 参数
const RepoPage = ({ params: { name } }) => {
	return (
		<div className='card'>
			<h2>{name}</h2>
			<p>Repo Details</p>
		</div>
	);
};

export default RepoPage;
