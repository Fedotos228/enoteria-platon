import Link from 'next/link'
import { Button } from '../ui/button'

type Props = {
	title: string
	link: string
}

export default function SectionHeader({ title, link }: Props) {
	return (
		<div className='flex items-center justify-between mb-8'>
			<h4 className='text-2xl'>{title}</h4>
			<Button>
				<Link href={link}>Vezi mai multe</Link>
			</Button>
		</div>
	)
}
