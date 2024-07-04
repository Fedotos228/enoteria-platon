import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export enum MediaType {
  Single,
  Multiple,
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isClient = typeof window !== "undefined";

export function imageStrapUrl(image: any, type: MediaType) {
  if (!image) return "";
  switch (type) {
    case MediaType.Single:
      return process.env.NEXT_PUBLIC_BASE_URL + image?.data?.attributes?.url;
    case MediaType.Multiple:
      return process.env.NEXT_PUBLIC_BASE_URL + image?.attributes?.url;
  }
}
export const formatRONPrice = (price: number) => {
  return price.toLocaleString("ro-RO", {
    style: "currency",
    currency: "RON",
    minimumFractionDigits: 0,
  });
};

export const formatMDLPrice = (price: number) => {
  return price.toLocaleString("ro-RO", {
    style: "currency",
    currency: "MDL",
    minimumFractionDigits: 0,
  });
};

// temporary
export function generateYears(startYear: number, endYear: number) {
  const years = [];
  for (let year = endYear; year >= startYear; year--) {
    years.push(year.toString());
  }
  return years;
}

export function generateMonths() {
  const months = [];
  for (let month = 1; month <= 12; month++) {
    months.push(month.toString().padStart(2, '0')); 
  }
  return months;
}