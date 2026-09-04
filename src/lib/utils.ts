import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function pick<T>(arr: readonly T[], seed: number): T {
  const idx = ((seed % arr.length) + arr.length) % arr.length;
  return arr[idx];
}
