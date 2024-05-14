import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import dayjs from "dayjs"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (raw: string) => {
  return dayjs(raw).format("DD MMM, YYYY (HH:mm:ss)");
}