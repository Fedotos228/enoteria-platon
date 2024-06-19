export default function IntroductionTitle({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<h1
			className={`text-xl xs:text-2xl md:text-3xl text-white text-center font-semibold leading-[160%] ${className}`}
		>
			{children}
		</h1>
	)
}
