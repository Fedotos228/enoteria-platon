"use client";

import React from "react";
import Image from "next/image";
import { imageStrapUrl, MediaType } from "@/lib/utils";
import Link from 'next/link'

const AcceptedCards = () => {
  //temporar
  const cards = [
    {
      name: "MasterCard",
      thumbnail: "https://placehold.co/30x30",
      href: "https://www.mastercard.com",
    },
    {
      name: "Visa",
      thumbnail: "https://placehold.co/30x30",
      href: "https://www.visa.com",
    },
    {
      name: "American Express",
      thumbnail: "https://placehold.co/30x30",
      href: "https://www.americanexpress.com",
    },
    {
      name: "Discover",
      thumbnail: "https://placehold.co/30x30",
      href: "https://www.discover.com",
    },
    {
      name: "PayPal",
      thumbnail: "https://placehold.co/30x30",
      href: "https://www.paypal.com",
    },
  ];

  return (
    <div className="flex w-full flex-col gap-2 text-xs font-light">
      <p className="text-gray-500">Acceptăm</p>
      <ul className="flex gap-2">
        {cards.map((card, index) => (
          <li key={index}>
            <Link href={card.href} target="_blank">
              <Image
                src={imageStrapUrl("", MediaType.Single)}
                alt={card.name}
                width={30}
                height={30}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AcceptedCards;
