'use client';
import Link from 'next/link';
import { useState } from 'react';
// 默认 和 page 组件相邻的 components组件是  server components
// several components 不能使用诸如  userState 等 hooks
// 如果想要将 默认的 server components 变为 client components
// 需要在文件顶部声明 'use client'
const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='logo'>
					<Link href='/'>Traversy Meida</Link>
				</div>
			</div>
			<div className='links'>
				<Link href='/about'>About</Link>
				<Link href='/about/team'>Our Team</Link>
				<Link href='/code/repos'>Code</Link>
			</div>
		</header>
	);
};

export default Header;
