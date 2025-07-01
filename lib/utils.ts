import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const dateConverter = (date: string) => new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

export const avatarNameConverter = (avatarName: string) => {
    const str = avatarName.split(" ")
    if (str.length < 1) return ""
    return str[0][0].toUpperCase() + str[1][0].toUpperCase()
}
