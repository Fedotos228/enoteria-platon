"use client";

import { NAVIGATION_ITEMS } from "@/constants/navigation";
import { blocksService } from "@/services/blocks/blocks.service";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import FooterColumn from "../elements/FooterColumn";
import Socials from "../elements/Socials";
import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { data, isLoading } = useQuery({
    queryKey: ["contact"],
    queryFn: () => blocksService.getPage("contact"),
    select: (data) => data.data.data.attributes,
  });

  return (
    <footer className="mt-5 bg-[#222024] pt-10 sm:pt-14">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:gap-4">
          <div className="flex flex-col justify-between gap-5">
            <Image
              src={"/logos/logoWhite.svg"}
              alt="logo"
              width={174}
              height={32}
            />
            <Socials socials={data?.socials} />
          </div>
          <div className="flex flex-col gap-10 xxs:flex-row sm:gap-14">
            <FooterColumn title="Navigatie" items={NAVIGATION_ITEMS} />
            <FooterColumn title="Contacte" items={data?.contactList} />
          </div>
        </div>
      </Container>
      <div className="mt-10 bg-[#1a181c] px-4 py-4 text-center text-sm text-gray-300">
        &copy; {currentYear} Enoteria Platon. Toate drepturile rezervate.
      </div>
    </footer>
  );
}
