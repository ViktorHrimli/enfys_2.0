const NovaPostInput = ({ value, onClick, children, ...rest }) => {
  return (
    <label>
      {/* adada */}
      {children}
      <input type="text" {...rest} onClick={onClick} value={value} />
    </label>
  );
};

export { NovaPostInput };
