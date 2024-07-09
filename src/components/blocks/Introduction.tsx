import { MediaType, imageStrapUrl } from "@/lib/utils";
import Container from "../layout/Container";

import { Damion } from "next/font/google";

const damion = Damion({
  weight: "400",
  subsets: ["latin"],
});

type Props = {
  title: string;
  background: {
    data: {
      url: string;
    } | null;
  };
};

export default function Introduction({ content }: { content: Props }) {
  if (!content) return null;

  const { background, title } = content;

  return (
    <Container>
      <div
        style={{
          background: `url(${
            background.data
              ? imageStrapUrl(background, MediaType.Single)
              : "/images/Banner.png"
          }) 50% 50% / cover no-repeat`,
        }}
        className="mb-8 mt-5 flex w-full flex-col items-center justify-center rounded-xl bg-cover bg-center py-16"
      >
        <IntroductionTitle>{title}</IntroductionTitle>
      </div>
    </Container>
  );
}

function IntroductionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`${damion.className} text-center text-2xl font-semibold leading-[160%] text-white xs:text-4xl md:text-4xl ${className}`}
    >
      {children}
    </h1>
  );
}
