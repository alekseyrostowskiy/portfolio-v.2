'use client'

import { projectsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import React from 'react'
import Project from './project'
import SectionHeading from './section-heading'

export default function Projects() {
	const { ref } = useSectionInView('Проекты', 0.5)

	return (
		<section ref={ref} id='projects' className='scroll-mt-28 mb-28 mt-4'>
			<SectionHeading>
				<div className='text-center'>
					Мои <span className='lowercase'>проекты</span>
				</div>
			</SectionHeading>
			<div>
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	)
}
