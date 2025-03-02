'use client'

import { useActiveSectionContext } from '@/context/active-section-context'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsTelegram } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'

export default function Intro() {
	const { ref } = useSectionInView('Главная', 0.5)
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

	return (
		<section
			ref={ref}
			id='home'
			className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
		>
			{/* <div className='flex justify-center'>
				<div className='relative'>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'tween',
							duration: 0.2,
						}}
					>
						<Image
							src='https://storage.yandexcloud.net/next-ecommerce-alex/photos%20for%20projects/photo_2024-01-07_22-13-19.jpg'
							alt='Ricardo portrait'
							width='250'
							height='250'
							quality='100'
							priority={true}
							className='h-42 w-42 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
						/>
					</motion.div>
				</div>
				<motion.h1
					className=' text-left  content-center ml-5 mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
				>
					<div>РОСТОВСКИЙ</div>
					<div>АЛЕКСЕЙ</div>
				</motion.h1>
			</div> */}

			<div className='flex items-center justify-center '>
				<div className='text-center'>
					{/* Фото */}
					<div className='w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-300'>
						<img
							src='https://storage.yandexcloud.net/next-ecommerce-alex/photos%20for%20projects/photo_2024-01-07_22-13-19.jpg' // Замените на вашу ссылку
							alt='Фото'
							className='w-full h-full object-cover'
						/>
					</div>

					{/* Имя и фамилия */}
					<h1 className='text-5xl md:text-6xl font-bold text-gray-900 animate-fade-in  dark:text-white'>
						Алексей Ростовский
					</h1>

					{/* Должность */}
					<p className='text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in-up  dark:text-white/80'>
						Full-Stack Разработчик
					</p>
				</div>
			</div>

			<motion.div
				className='mt-2  flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1,
				}}
			>
				<Link
					href='#contact'
					className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
					onClick={() => {
						// setActiveSection('Контакты')
						setTimeOfLastClick(Date.now())
					}}
				>
					Связаться со мной{' '}
					<BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
				</Link>

				{/* <a
					className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
					href='/CV.pdf'
					download
				>
					Загрузить резюме{' '}
					<HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
				</a> */}

				<a
					className='bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
					href='https://t.me/alekseyrostowskiy'
					target='_blank'
				>
					<BsTelegram />
				</a>

				<a
					className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
					href='https://github.com/alekseyrostowskiy?tab=repositories'
					target='_blank'
				>
					<FaGithubSquare />
				</a>
			</motion.div>
		</section>
	)
}
