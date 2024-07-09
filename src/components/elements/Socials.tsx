import { MediaType, imageStrapUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Socials({ socials }: { socials: any }) {
  if (!socials) return null;
  return (
    <div className="flex gap-3">
      {socials.map((social: any) => (
        <Link
          href={social.href}
          key={social.id}
          className="flex items-center justify-center rounded-full border border-white/10 p-3 transition-all hover:scale-110"
        >
          {social.icon && (
            <Image
              src={imageStrapUrl(social.icon, MediaType.Single)}
              alt={social.id}
              width={19}
              height={19}
            />
          )}
        </Link>
      ))}
    </div>
  );
}
