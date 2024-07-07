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
      return image?.data?.attributes?.url;
    case MediaType.Multiple:
      return image?.attributes?.url;
  }
}
export const formatRONPrice = (price: number) => {
  if (!price) return null;
  return price.toLocaleString("ro-RO", {
    style: "currency",
    currency: "RON",
    minimumFractionDigits: 0,
  });
};

export const formatMDLPrice = (price: number) => {
  if (!price) return null;
  return price.toLocaleString("ro-RO", {
    style: "currency",
    currency: "MDL",
    minimumFractionDigits: 0,
  });
};

export function generateYears(start: number, end: number) {
  const years = [];
  for (let year = end; year >= start; year--) {
    years.push(year.toString());
  }
  return years;
}

export function generateMonths() {
  const months = [];
  for (let month = 1; month <= 12; month++) {
    months.push(month.toString().padStart(2, "0"));
  }
  return months;
}

export function dateFormater(data: string) {
  const date = new Date(data);

  const year = date.getUTCFullYear();
  const month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
  const day = ("0" + date.getUTCDate()).slice(-2);
  return `${month}/${day}/${year}`;
}
