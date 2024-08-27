import clsx from "clsx";
import s from "./Button.module.css";
import {ComponentPropsWithoutRef, ForwardedRef, forwardRef} from "react";

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    label: string,
    variant?: "fill-primary" | "fill-secondary" | "outline-primary" | "outline-secondary",
}


const Button = forwardRef(
({type = "button", variant = "fill-primary", label, className,...rest}: ButtonProps, ref: ForwardedRef<HTMLButtonElement>
) => {
    return (
        <button
            {...rest}
            ref={ref}
            type={type}
            className={clsx(s.root, s[variant], className)}
        >
            {label}
        </button>
    );
});

export default Button;
