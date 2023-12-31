import React from "react";

const sizeClasses = {
  txtPoppinsLight13: "font-light font-poppins",
  txtPoppinsLight16: "font-light font-poppins",
  txtPoppinsBold30: "font-bold font-poppins",
  txtPoppinsSemiBold30: "font-poppins font-semibold",
  txtRubikBold25: "font-bold font-rubik",
  txtPoppinsMedium13: "font-medium font-poppins",
  txtPoppinsSemiBold35: "font-poppins font-semibold",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsRegular13: "font-normal font-poppins",
  txtRubikRegular20: "font-normal font-rubik",
  txtPoppinsSemiBold33: "font-poppins font-semibold",
  txtPoppinsRegular30: "font-normal font-poppins",
  txtPoppinsMedium30: "font-medium font-poppins",
  txtRubikMedium35: "font-medium font-rubik",
  txtPoppinsMedium17: "font-medium font-poppins",
  txtPoppinsSemiBold19: "font-poppins font-semibold",
  txtRubikMedium18: "font-medium font-rubik",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtRubikBold31: "font-bold font-rubik",
  txtPoppinsBold20: "font-bold font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular15: "font-normal font-poppins",
  txtRubikRegular16: "font-normal font-rubik",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsLight20: "font-light font-poppins",
  txtPoppinsRegular17: "font-normal font-poppins",
  txtPoppinsSemiBold25: "font-poppins font-semibold",
  txtRubikRegular14: "font-normal font-rubik",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtRubikMedium22: "font-medium font-rubik",
  txtPoppinsBold50: "font-bold font-poppins",
  txtPoppinsSemiBold23: "font-poppins font-semibold",
  txtPoppinsExtraBold24: "font-extrabold font-poppins",
  txtPoppinsSemiBold28: "font-poppins font-semibold",
  txtPoppinsExtraBold29: "font-extrabold font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
