// 1.从 nextjs 内置字体引入 google font
import { Poppins } from 'next/font/google';
import './globals.css';

// 2.创建一个字体对象
const poppins = Poppins({
	weight: ['400', '700'],
	subsets: ['latin']
});

export const metadata = {
	title: 'Traversy Media',
	description: 'Web Development tutorials and course materials',
	keywords: 'web development, web design, javascript,css'
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			{/* 3.从配置对象中获取类名用于应用到字体上 */}
			<body className={poppins.className}>
				<main className='container'>{children}</main>
			</body>
		</html>
	);
}
