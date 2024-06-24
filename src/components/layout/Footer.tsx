import { contacts, NAVIGATION_ITEMS } from "@/constants/navigation";
import Image from "next/image";
import FooterColumn from "../elements/FooterColumn";
import Socials from "../elements/Socials";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-5 bg-[#222024]">
      <Container className="py-10">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div className="flex flex-col justify-between gap-6">
            <Image
              src={"/logos/logoWhite.svg"}
              alt="logo"
              width={174}
              height={32}
            />
            <Socials />
          </div>
          <div className="flex flex-wrap gap-14">
            <FooterColumn title="Navigatie" items={NAVIGATION_ITEMS} />
            <FooterColumn title="Contacte" items={contacts} />
          </div>
        </div>
      </Container>
      <div className="bg-[#1a181c] py-4 text-center text-sm text-gray-300">
        &copy; 2022 Enoteria Platon. Toate drepturile rezervate.
      </div>
    </footer>
  );
}
