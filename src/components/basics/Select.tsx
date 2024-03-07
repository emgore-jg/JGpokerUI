interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: string[];
}

function Select({ className = "", options = [], children, ...rest }: Props) {
  return (
    <select className={`select select-bordered ${className}`} {...rest}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
