import React from 'react'

type SectionHeadingProps = {
	children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
	return (
		<h2 className='text-4xl font-bold capitalize mb-4 text-left'>{children}</h2>
	)
}
