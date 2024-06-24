import { cn } from "@/lib/utils";
import { CirclePercent } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { Card, CardFooter } from "../ui/card";

const backgroundImage = {
  backgroundImage: "url(/images/bg.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden",
};

export default function ProductCard({ product }: any) {
  const { title, price_mdl, thumbnail, discount, slug } = product.attributes;

  const price = discount ? price_mdl - (price_mdl * discount) / 100 : price_mdl;

  return (
    <Card className="relative shadow transition-transform duration-300 hover:scale-[1.02]">
      <div
        style={backgroundImage}
        className="relative flex h-[230px] w-full items-center justify-center rounded-t-lg md:h-[280px]"
      >
        {thumbnail?.data?.attributes?.url && (
          <Image
            src={
              process.env.NEXT_PUBLIC_BASE_URL +
              thumbnail?.data?.attributes?.url
            }
            alt={title}
            width={320}
            height={350}
          />
        )}
        {discount && (
          <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-md bg-red-500/70 px-2 py-1">
            <CirclePercent color="white" opacity="70" />
            <p className="text-sm text-white">{discount}% reducere</p>
          </div>
        )}
      </div>
      <Link href={`shop/${slug}`} className="after:absolute after:inset-0">
        <h6 className="m-4">{title}</h6>
      </Link>
      <CardFooter className="flex-wrap justify-between gap-2">
        <div className="flex gap-1 font-semibold">
          {price_mdl && (
            <>
              {discount && <p className="text-bordo">{price} lei</p>}

              <p className={`${discount && "line-through opacity-50"}`}>
                {discount ? price_mdl : price} lei
              </p>
            </>
          )}
        </div>
        {price_mdl ? (
          <Button className="relative z-10 ml-auto">Adaugă</Button>
        ) : (
          <Link
            href="/contacts"
            className={`${cn(
              buttonVariants({
                variant: "default",
              }),
            )} relative z-10`}
          >
            Află prețul
          </Link>
        )}
        {/* <Button className='bg-green-700'>Adaugat (5)</Button> */}
      </CardFooter>
    </Card>
  );
}
