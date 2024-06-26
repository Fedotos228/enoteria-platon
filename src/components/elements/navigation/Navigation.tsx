import { Button } from "@/components/ui/button";
import { NAVIGATION_ITEMS } from "@/constants/navigation";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface INavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  screenWidth: number;
}

export default function Navigation({
  isOpen,
  setIsOpen,
  screenWidth,
}: INavigationProps) {
  const pathname = usePathname();

<<<<<<< HEAD
	return (
		<>
			{screenWidth < 767 && (
				<div
					onClick={() => setIsOpen(false)}
					className={`fixed inset-0 backdrop-blur-md transition-all duration-300 bg-opacity-75 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
						}`}
				></div>
			)}
			<nav
				className={`flex justify-start md:justify-center transition-all duration-300 gap-6 ml:gap-8 fixed inset-y-0 md:inset-0 w-full bg-background flex-col pl-10 pt-14 md:p-0 md:items-center items-start md:flex-row md:bg-transparent h-full max-w-lg md:relative ${isOpen ? 'right-0' : '-right-full'
					}`}
			>
				{screenWidth < 767 && (
					<Button
						className='absolute top-4 right-4 md:hidden'
						onClick={() => setIsOpen(false)}
						variant='ghost'
						size='icon'
					>
						<X size={24} />
					</Button>
				)}
				{NAVIGATION_ITEMS.map(
					(item, i) =>
						item.href && (
							<Link
								href={item.href}
								key={i}
								className={`text-white hover:text-bordo-hover transition-colors duration-300 md:text-base text-lg md:text-background text-foreground ${pathname === item.href
										? 'font-semibold !text-bordo'
										: ''
									}`}
							>
								{item.title}
							</Link>
						),
				)}
			</nav>
		</>
	)
=======
  return (
    <>
      {screenWidth < 767 && (
        <div
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0 bg-opacity-75 backdrop-blur-md transition-all duration-300 md:hidden ${
            isOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
        ></div>
      )}
      <nav
        className={`fixed inset-y-0 flex h-full w-full max-w-lg flex-col items-start justify-start gap-6 bg-background pl-10 pt-14 transition-all duration-300 md:relative md:inset-0 md:flex-row md:items-center md:justify-center md:bg-transparent md:p-0 ml:gap-8 ${
          isOpen ? "right-0" : "-right-full"
        }`}
      >
        {screenWidth < 767 && (
          <Button
            className="absolute right-4 top-4 md:hidden"
            onClick={() => setIsOpen(false)}
            variant="ghost"
            size="icon"
          >
            <X size={24} />
          </Button>
        )}
        {NAVIGATION_ITEMS.map(
          (item, i) =>
            item.url && (
              <Link
                href={item.url}
                onClick={() => setIsOpen(false)}
                key={i}
                className={`text-lg text-foreground transition-colors duration-300 hover:text-bordo-hover md:text-base md:text-background md:text-white ${
                  pathname === item.url ? "font-semibold !text-bordo" : ""
                }`}
              >
                {item.title}
              </Link>
            ),
        )}
      </nav>
    </>
  );
>>>>>>> fdb488d3becc77d94b8fba8fad7a8e0b174a295a
}
