'use client'

import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading'

export default function About() {
	const { ref } = useSectionInView('About')

	return (
		<motion.section
			ref={ref}
			className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id='about'
		>
			<SectionHeading>Образование:</SectionHeading>
			<p className='mb-3  mt-0 text-2xl font-medium text-left'>
				Высшее: Военная академия связи - Эксплуатация и применение
				вычислительных систем, сетей и комплексов специального назначения
			</p>
		</motion.section>
	)
}
