import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[10px]",
  square: "rounded-none",
  circle: "rounded-[50%]",
};
const variants = {
  gradient: { orange_700_orange_A200: "bg-gradient  text-white-A700" },
  fill: {
    orange_900_1c: "bg-orange-900_1c text-white-A700",
    green_A400_1c: "bg-green-A400_1c text-white-A700",
    orange_800_01: "bg-orange-800_01 text-white-A700",
    red_A100: "bg-red-A100 text-white-A700",
    deep_orange_A200: "bg-deep_orange-A200 text-gray-50",
    green_600: "bg-green-600 text-gray-50",
    purple_500: "bg-purple-500 text-gray-50",
    white_A700_1c: "bg-white-A700_1c text-white-A700",
    red_50: "bg-red-50",
    yellow_900: "bg-yellow-900 text-white-A700",
    white_A700: "bg-white-A700 shadow-bs",
    indigo_A700: "bg-indigo-A700 text-gray-50",
  },
  outline: { orange_800_01: "border-2 border-orange-800_01 border-solid" },
};
const sizes = { xs: "p-2", sm: "p-3", md: "p-4" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["gradient", "fill", "outline"]),
  color: PropTypes.oneOf([
    "orange_700_orange_A200",
    "orange_900_1c",
    "green_A400_1c",
    "orange_800_01",
    "red_A100",
    "deep_orange_A200",
    "green_600",
    "purple_500",
    "white_A700_1c",
    "red_50",
    "yellow_900",
    "white_A700",
    "indigo_A700",
  ]),
};

export { Button };
