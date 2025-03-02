'use client'

import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'

export default function About() {
	const { ref } = useSectionInView('Обо мне')

	return (
		<motion.section
			ref={ref}
			className='max-w-[45rem] text-center leading-8 scroll-mt-28'
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id='about'
		>
			{/* <div className='mt-16'>
				<SectionHeading>
					<div className='text-center'>Обо мне</div>
				</SectionHeading>
				<br />
				<div className='font-serif text-2xl font-medium text-center'>
					Я начинающий{' '}
					<span className='italic font-bold'>full-stack разработчик</span>. Мне
					нравится создавать сайты и приложения различной сложности. Пишу код на{' '}
					<span className='italic'>
						React (Next.js), Nest.js, Typescript, MongoDB и Prisma
					</span>
					.
				</div>
				<br />
				<div className='text-2xl font-medium text-center'>
					<span className='italic'>Возраст:</span>{' '}
					<span className='font-mono'>24</span>
				</div>
				<br />
				<span className='italic text-2xl font-medium text-left'>
					Образование:
				</span>
				<p className='ml-1 font-serif mt-0 text-2xl font-medium text-center'>
					Высшее: Военная академия связи - Эксплуатация и применение
					вычислительных систем, сетей и комплексов специального назначения
				</p>
			</div> */}

			<div className='mt-4 py-10 px-4 font-poppins rounded-lg dark:text-white dark:bg-white/10 dark:hover:bg-white/20'>
				<div className='max-w-4xl mx-auto'>
					<h1 className='text-5xl font-bold text-center text-gray-900 mb-10 animate-fade-in  dark:text-white'>
						Обо мне
					</h1>

					{/* Основная информация */}
					<div className=' rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up'>
						<p className='text-lg text-gray-700 mb-6  dark:text-white/70'>
							Я начинающий full-stack разработчик с большим энтузиазмом и
							стремлением к профессиональному росту. Мне нравится создавать
							современные, интуитивно понятные и высокопроизводительные
							веб-приложения, которые решают реальные задачи пользователей.
						</p>

						<div className='mb-6'>
							<h2 className='text-2xl font-semibold text-gray-800 mb-2  dark:text-white'>
								Возраст
							</h2>
							<p className='text-gray-600  dark:text-white/70'>24 года</p>
						</div>

						{/* Образование */}
						<div>
							<h2 className='text-2xl font-semibold text-gray-800 mb-2  dark:text-white'>
								Образование
							</h2>
							<p className='text-gray-600  dark:text-white/70'>
								Высшее: Военная академия связи - Эксплуатация и применение
								вычислительных систем, сетей и комплексов специального
								назначения
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* <div className='min-h-screen bg-gradient-to-br from-gray-50 to-white py-10 px-4'>
				<div className='max-w-4xl mx-auto'>
					<h1 className='text-5xl font-bold text-center text-gray-900 mb-10 animate-fade-in'>
						Обо мне
					</h1>

					<div className='bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up'>
						<p className='text-lg text-gray-700 mb-6'>
							Я начинающий full-stack разработчик. Мне нравится создавать сайты
							и приложения различной сложности. Пишу код на{' '}
							<span className='font-semibold text-blue-600'>
								React (Next.js)
							</span>
							, <span className='font-semibold text-green-600'>Nest.js</span>,{' '}
							<span className='font-semibold text-purple-600'>Typescript</span>,{' '}
							<span className='font-semibold text-yellow-600'>MongoDB</span> и{' '}
							<span className='font-semibold text-indigo-600'>Prisma</span>.
						</p>

						<div className='mb-6'>
							<h2 className='text-2xl font-semibold text-gray-800 mb-2'>
								Возраст
							</h2>
							<p className='text-gray-600'>24 года</p>
						</div>

						<div>
							<h2 className='text-2xl font-semibold text-gray-800 mb-2'>
								Образование
							</h2>
							<p className='text-gray-600'>
								Высшее: Военная академия связи - Эксплуатация и применение
								вычислительных систем, сетей и комплексов специального
								назначения
							</p>
						</div>
					</div>
				</div>
			</div> */}
		</motion.section>
	)
}
