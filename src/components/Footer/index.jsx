import React from "react";

import { Button, Img, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="h-[272px] sm:h-[369px] md:h-[602px] mb-[30px] mt-[73px] relative w-full">
          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
            <div className="flex flex-col items-center justify-start w-[85%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                    <div className="flex flex-col gap-[27px] items-start justify-start mb-[5px] md:mt-0 mt-[46px]">
                      <Text
                        className="text-base text-white-A700 w-full"
                        size="txtPoppinsRegular16"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                      </Text>
                      <Text
                        className="text-base text-white-A700"
                        size="txtPoppinsRegular16"
                      >
                        @Lorem
                      </Text>
                    </div>
                    <div className="h-40 md:h-[156px] relative w-[42%] md:w-full">
                      <Text
                        className="absolute bottom-[0] leading-[186.30%] left-[0] text-base text-white-A700"
                        size="txtPoppinsRegular16"
                      >
                        <>
                          Zeux
                          <br />
                          Portfolio
                          <br />
                          Careers
                          <br />
                          Contact us
                        </>
                      </Text>
                      <Text
                        className="absolute left-[0] text-[17px] text-white-A700 top-[0]"
                        size="txtPoppinsMedium17"
                      >
                        About us
                      </Text>
                      <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start my-auto right-[0]">
                        <Text
                          className="text-[17px] text-white-A700"
                          size="txtPoppinsMedium17"
                        >
                          Contact us
                        </Text>
                        <Text
                          className="mt-[19px] text-base text-white-A700 w-full"
                          size="txtPoppinsRegular16"
                        >
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.{" "}
                        </Text>
                        <Text
                          className="mt-[11px] text-base text-white-A700"
                          size="txtPoppinsRegular16"
                        >
                          +908 89097 890
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-row gap-4 items-center justify-between mb-[9px] md:mt-0 mt-[117px] w-[16%] md:w-full">
                      <Button
                        className="flex h-[34px] items-center justify-center w-[34px]"
                        shape="circle"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          className="h-3"
                          src="images/img_facebook1_black_900_01.svg"
                          alt="facebookOne"
                        />
                      </Button>
                      <Button
                        className="flex h-[34px] items-center justify-center w-[34px]"
                        shape="circle"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                      >
                        <Img
                          className="h-[13px]"
                          src="images/img_instagram1.svg"
                          alt="instagramOne"
                        />
                      </Button>
                      <Button
                        className="flex h-[34px] items-center justify-center w-[34px]"
                        shape="circle"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                      >
                        <Img
                          className="h-[13px]"
                          src="images/img_twitter1_black_900_01.svg"
                          alt="twitterOne"
                        />
                      </Button>
                      <Button
                        className="flex h-[34px] items-center justify-center w-[34px]"
                        shape="circle"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          className="h-[11px]"
                          src="images/img_linkedin1.svg"
                          alt="linkedinOne"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Line className="bg-blue_gray-100_01 h-px mt-[53px] w-full" />
            <Text
              className="mt-8 text-[13px] text-white-A700"
              size="txtPoppinsRegular13"
            >
              Copyright ® 2022 prodesigner All rights Rcerved
            </Text>
          </div>
          <Text
            className="absolute left-[7%] text-2xl md:text-[22px] text-white-A700 sm:text-xl top-[0]"
            size="txtPoppinsExtraBold24"
          >
            LOGO
          </Text>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
