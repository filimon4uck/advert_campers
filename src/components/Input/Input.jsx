const Input = ({
  className,
  type,
  name,
  placeholder,
  value,
  onChange,
  required,
}) => {
  return (
    <input
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};
export default Input;
