export const partialComponent = (Component: any, partialProps: any) => {
  return (props: any) => {
    return <Component {...partialProps} {...props} />;
  };
};

export const Button = ({ size, color, text, ...props }: any) => {
  return (
    <button
      style={{
        fontSize: size === "small" ? "20px" : "42px",
        backgroundColor: color + " !important",
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export const BlueButtonPartial = partialComponent(Button, {
  color: "blue",
});
