const NovaPostInput = ({ value, onClick, children, ...rest }) => {
  return (
    <label>
      {children}
      <input type="text"
        style={{
          width: "290px",
          height: "50px",
          borderRadius: "8px",
          border: "1px solid #209487",
          paddingLeft: "26px",
          fontFamily: "Mariupol , sans-serif",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "19.26px",
          outline: "none",
        }}
        {...rest} onClick={onClick} value={value} />
    </label>
  );
};

export { NovaPostInput };
