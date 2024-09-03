import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}




export const cardsContent = {
  "comparison": [
    {
      "feature": "Card type",
      "description": "Personalize settings of your One card (included).",
      "Discover Plus Card": "Physical",
      "Discover Premium Card": "Physical & Virtual"
    },
    {
      "feature": "Accounts",
      "description": "Create several accounts with individual IBANs.",
      "Discover Plus Card": "2",
      "Discover Premium Card": "5"
    },
    {
      "feature": "Card payment limits",
      "description": "Per calendar month",
      "Discover Plus Card": "$50,000",
      "Discover Premium Card": "$200,000"
    },
    {
      "feature": "Cash withdrawal limits",
      "description": "Per calendar month",
      "Discover Plus Card": "$2,500",
      "Discover Premium Card": "$5,000"
    },
    {
      "feature": "Card Insurance",
      "description": "Per account Momento",
      "Discover Plus Card": "Fraudulent payments",
      "Discover Premium Card": "Premium coverage"
    }
  ]
}


export interface CardsContent {
    feature: string;
    description: string;
    discoverPlusCard: string;
    discoverPremiumCard: string
}