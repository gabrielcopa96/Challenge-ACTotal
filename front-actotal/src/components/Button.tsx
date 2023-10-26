import { PropsWithChildren } from "react"

interface ButtonProps extends PropsWithChildren {
    onClick?: (e: any) => void;
    disabled?: boolean;
}

const Button = ({ children, onClick, disabled }: ButtonProps) => {
  return (
    <button className="btn" onClick={onClick} disabled={disabled}>{ children }</button>
  )
}

export default Button;