import ecommerceImg from '@/public/ecommerce.png'
import ecommerceAdminImg from '@/public/ecommerceAdmin.png'
import game from '@/public/game.png'
import Marvel from '@/public/Marvel.png'

export const links = [
	{
		name: 'Главная',
		hash: '#home',
	},
	{
		name: 'Обо мне',
		hash: '#about',
	},
	{
		name: 'Проекты',
		hash: '#projects',
	},
	{
		name: 'Навыки',
		hash: '#skills',
	},
	// {
	// 	name: 'Опыт',
	// 	hash: '#experience',
	// },
	// {
	// 	name: 'Контакты',
	// 	hash: '#contact',
	// },
] as const

// export const experiencesData = [
// 	{
// 		title: 'Graduated bootcamp',
// 		location: 'Miami, FL',
// 		description:
// 			'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
// 		icon: React.createElement(LuGraduationCap),
// 		date: '2019',
// 	},
// 	{
// 		title: 'Front-End Developer',
// 		location: 'Orlando, FL',
// 		description:
// 			'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
// 		icon: React.createElement(CgWorkAlt),
// 		date: '2019 - 2021',
// 	},
// 	{
// 		title: 'Full-Stack разработчик',
// 		location: 'Houston, TX',
// 		description:
// 			'Я являюсь начинающим full-stack разработчиком. Специализируюсь на React, Next.js, Nest.js, TypeScript, Tailwind, Prisma and MongoDB.',
// 		icon: React.createElement(FaReact),
// 		date: '2021 - present',
// 	},
// ] as const

export const projectsData = [
	{
		title: 'Интернет-магазин',
		description:
			'Реализованы функции аутентификации, просмотра товаров по категориям, добавления их в корзину, оформления заказа',
		tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'MongoDB', 'Prisma'],
		imageUrl: ecommerceImg,
		siteUrl: 'https://e-commerce-front-eta-five.vercel.app/',
	},
	{
		title: 'Административная панель интернет-магазина',
		description:
			'Реализованы функции аутентификации, разграничения доступа, добавления и удаления категорий и товаров, просмотра данных о заказах',
		tags: ['Next.js', 'TypeScript', 'React', 'Tailwind', 'MongoDB', 'Prisma'],
		imageUrl: ecommerceAdminImg,
		siteUrl: 'https://e-commerce-admin-25gw.vercel.app/',
	},
	{
		title: 'Marvel',
		description:
			'Приложение на React с подключением стороннего API. Реализована функция поиска',
		tags: ['React', 'SCSS'],
		imageUrl: Marvel,
		siteUrl: 'https://marvel-nine-eosin.vercel.app/',
	},
	{
		title: 'Крестики-нолики',
		description: 'Приложение написано на Javascript с применени MVC-паттерна',
		tags: ['JavaScript', 'HTML', 'CSS'],
		imageUrl: game,
		siteUrl: 'https://marvel-nine-eosin.vercel.app/',
	},
] as const

export const skillsData = [
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React',
	'Next.js',
	'Node.js',
	'Git',
	'Tailwind',
	'Prisma',
	'MongoDB',
	'Redux',
	'GraphQL',
	'Apollo',
	'Express',
	'PostgreSQL',
	'Python',
	'Django',
	'Framer Motion',
] as const
