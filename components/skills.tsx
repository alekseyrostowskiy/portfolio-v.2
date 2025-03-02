'use client'

import { useSectionInView } from '@/lib/hooks'

const skills = [
	{
		name: 'HTML',
		description:
			'Опыт работы с семантической версткой, создание адаптивных и кросс-браузерных интерфейсов.',
	},
	{
		name: 'CSS',
		description:
			'Глубокое понимание CSS, включая Flexbox, Grid, анимации и препроцессоры, такие как SASS.',
	},
	{
		name: 'JavaScript',
		description:
			'Разработка интерактивных веб-приложений, работа с DOM, асинхронными запросами и ES6+.',
	},
	{
		name: 'React',
		description:
			'Создание компонентных приложений, работа с хуками, контекстом и управление состоянием.',
	},
	{
		name: 'Tailwind CSS',
		description:
			'Использование утилитарных классов для быстрой и эффективной стилизации интерфейсов.',
	},
	{
		name: 'Next.js',
		description:
			'Разработка SSR и статических веб-приложений, работа с API-роутами, оптимизация производительности.',
	},
	{
		name: 'MongoDB',
		description:
			'Работа с NoSQL базами данных, проектирование схем, выполнение запросов и интеграция с приложениями.',
	},
	{
		name: 'Git',
		description:
			'Опыт работы с системой контроля версий, включая ветвление, слияние и разрешение конфликтов.',
	},
]

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
}

export default function Skills() {
	const { ref } = useSectionInView('Навыки')

	return (
		<section
			id='skills'
			ref={ref}
			className='mb-6 max-w-[53rem] scroll-mt-28 text-center sm:mb-10'
		>
			{/* <SectionHeading>
				<div className='text-center '>
					Мои <span className='lowercase'>Навыки</span>
				</div>
			</SectionHeading>
			<ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
				{skillsData.map((skill, index) => (
					<motion.li
						className='bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
						key={index}
						variants={fadeInAnimationVariants}
						initial='initial'
						whileInView='animate'
						viewport={{
							once: true,
						}}
						custom={index}
					>
						{skill}
					</motion.li>
				))}
			</ul> */}
			<div className='min-h-screen py-10 px-4  dark:text-white dark:bg-white/10 dark:hover:bg-white/20  '>
				<div className='max-w-4xl mx-auto'>
					<h1 className='text-5xl font-bold text-center text-gray-900 mb-10 animate-fade-in dark:text-white'>
						Мои навыки
					</h1>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						{skills.map((skill, index) => (
							<div
								key={index}
								className='bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up  dark:text-white dark:bg-white/10 dark:hover:bg-white/20'
							>
								<h2 className='text-2xl font-semibold text-gray-800 mb-2 dark:text-white'>
									{skill.name}
								</h2>
								<p className='text-gray-600 dark:text-white/70'>
									{skill.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
