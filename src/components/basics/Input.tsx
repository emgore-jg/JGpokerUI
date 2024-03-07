interface props extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input({ className = "", ...rest }: props) {
  return (
    <input className={`input input-bordered w-full ${className}`} {...rest} />
  );
}

export default Input;
