const CustomFormInput = ({
  error,
  value,
  onChange,
  name,
  placeholder,
  submitted,
  ...props
}) => {
  const handleChange = (e) => {
    onChange && onChange(e);
  };
  return (
    <div>
      <input
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        {...props}
      />
      {error && (
        <span
          className="text-danger"
          style={{ fontSize: "0.8rem", margin: 0, padding: 0 }}
        >
          {error || ""}
        </span>
      )}
    </div>
  );
};

export default CustomFormInput;
