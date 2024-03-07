interface props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ className = "", children, ...rest }: props) {
  return (
    <button className={`btn w-fit ${className}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
