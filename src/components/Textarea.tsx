interface props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

function Textarea({ className = "", ...rest }: props) {
  return (
    <textarea className={`textarea textarea-bordered ${className}`} {...rest} />
  );
}

export default Textarea;
