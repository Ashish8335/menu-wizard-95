// Additional button variants for the food ordering app
import { cva } from "class-variance-authority";

export const foodAppButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        "add-to-cart": "bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary-dark hover:to-brand-primary text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200",
        "cart-action": "bg-white border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
        "checkout": "bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary-dark hover:to-brand-primary text-white font-bold shadow-lg transform hover:scale-[1.02] transition-all duration-200",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "add-to-cart",
      size: "default",
    },
  }
);