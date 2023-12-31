import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  gradient: { orange_700_orange_A200: "bg-gradient  text-white-A700" },
  fill: {
    blue_gray_900_01: "bg-blue_gray-900_01 text-white-A700",
    gray_900: "bg-gray-900",
    white_A700_11: "bg-white-A700_11",
  },
};
const shapes = { square: "rounded-none", round: "rounded-[9px]" };
const sizes = {
  xs: "pb-[13px] pt-2.5 px-2.5",
  sm: "pb-2.5 pt-[11px] px-2.5",
  md: "pb-[22px] pt-5 px-5",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["gradient", "fill"]),
  color: PropTypes.oneOf([
    "orange_700_orange_A200",
    "blue_gray_900_01",
    "gray_900",
    "white_A700_11",
  ]),
};

export { Input };
