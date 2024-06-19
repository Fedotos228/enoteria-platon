'use client'

import Founders from '@/components/blocks/Founders'
import Introduction from '@/components/blocks/Introduction'
import SimpleBlock from '@/components/blocks/SimpleBlock'
import Loader from '@/components/elements/Loader'
import { blocksService } from '@/services/blocks/blocks.service'
import { useQuery } from '@tanstack/react-query'
export default function AbouPage() {
	const { data: blocks, isLoading } = useQuery({
		queryKey: ['about'],
		queryFn: () => blocksService.getAboutBlocks(),
		select: data => data.data.data.attributes.blocks
	})

	const sectionComponents: { [key: string]: React.ComponentType<any> } = {
		'blocks.introduction': Introduction,
		'blocks.simple-block': SimpleBlock,
	}

	if (isLoading) return <Loader loading={isLoading} />

	return (
		<>
			{blocks?.map((blocks: any, index: number) => {
				const Component = sectionComponents[blocks.__component]
				return Component ? <Component key={index} content={blocks} /> : null
			})}
			<Founders />
		</>
	)
}
