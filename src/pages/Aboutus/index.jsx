import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

const AboutusPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gradient4  flex flex-col font-poppins items-center justify-end mx-auto pt-[37px] w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1321px] mx-auto md:px-5 w-full">
            <Text
              className="mb-[5px] sm:text-[25px] md:text-[27px] text-[29px] text-white-A700"
              size="txtPoppinsExtraBold29"
            >
              LOGO
            </Text>
            <div className="md:h-[102px] sm:h-[41px] h-[43px] md:mt-0 mt-1.5 relative w-[51%] md:w-full">
              <div className="absolute flex md:flex-col flex-row gap-[37px] h-max inset-[0] items-center justify-between m-auto w-full">
                <div className="flex flex-col items-center justify-start">
                  <div className="flex flex-row gap-[88px] items-start justify-start w-auto sm:w-full">
                    <Text
                      className="common-pointer text-base text-white-A700 w-12"
                      size="txtPoppinsRegular16"
                      onClick={() => navigate("/home1")}
                    >
                      Home
                    </Text>
                    <Text
                      className="text-base text-white-A700 w-[70px]"
                      size="txtPoppinsRegular16"
                    >
                      About us
                    </Text>
                    <Text
                      className="common-pointer text-base text-white-A700 w-[65px]"
                      size="txtPoppinsRegular16"
                      onClick={() => navigate("/services")}
                    >
                      Portfolio
                    </Text>
                    <Text
                      className="common-pointer text-base text-white-A700 w-[42px]"
                      size="txtPoppinsRegular16"
                      onClick={() => navigate("/news")}
                    >
                      News
                    </Text>
                  </div>
                </div>
                <Button
                  className="common-pointer cursor-pointer leading-[normal] min-w-[131px] rounded-md text-[13px] text-center"
                  onClick={() => navigate("/")}
                  color="yellow_900"
                  size="xs"
                  variant="fill"
                >
                  Contact us
                </Button>
              </div>
              <Img
                className="absolute bottom-[0] h-1 left-[19%]"
                src="images/img_group94.svg"
                alt="groupNinetyFour"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start mt-[34px] md:px-5 w-[93%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start w-[32%] md:w-full">
                <Text
                  className="text-white-A700 text-xs"
                  size="txtPoppinsRegular12"
                >
                  <span className="text-white-A700 font-poppins text-left font-normal">
                    <>Home &gt; </>
                  </span>
                  <span className="text-orange-800 font-poppins text-left font-normal">
                    About us
                  </span>
                </Text>
                <Text
                  className="leading-[180.50%] mt-[41px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-full"
                  size="txtPoppinsBold30"
                >
                  Lorem Ipsum is simply dummy text of the printing and.
                </Text>
                <Text
                  className="leading-[208.50%] mt-6 text-[15px] text-white-A700 w-[98%] sm:w-full"
                  size="txtPoppinsRegular15"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s.
                  </>
                </Text>
                <div className="flex flex-col items-center justify-start mt-[57px] w-[42%] md:w-full">
                  <Input
                    name="groupSeven"
                    placeholder="Get in touch"
                    className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                    wrapClassName="flex rounded-[23px] w-full"
                    suffix={
                      <Img
                        className="mt-[7px] mb-1 h-3 ml-5"
                        src="images/img_arrow_6.svg"
                        alt="arrow 6"
                      />
                    }
                    size="xs"
                    variant="gradient"
                    color="orange_700_orange_A200"
                  ></Input>
                </div>
              </div>
              <div className="h-[656px] relative w-[56%] md:w-full">
                <div className="bg-purple-50 h-[9px] ml-auto mr-[126px] mt-[120px] rounded w-[9px]"></div>
                <div className="absolute h-[656px] inset-[0] justify-center m-auto w-full">
                  <Img
                    className="h-[656px] m-auto object-cover w-full"
                    src="images/img_rectangle6.png"
                    alt="rectangleSix"
                  />
                  <Input
                    name="groupOne"
                    placeholder="1 of 2"
                    className="font-medium p-0 placeholder:text-white-A700 text-base text-left w-full"
                    wrapClassName="bottom-[0] flex left-[0] w-1/4"
                    prefix={
                      <Img
                        className="mt-1.5 mb-[5px] h-3 mr-[29px] right-[4%] absolute inset-y-[1%]"
                        src="images/img_arrow_7.svg"
                        alt="arrow 7"
                      />
                    }
                    suffix={
                      <Img
                        className="mt-1.5 mb-[5px] h-3 ml-[27px] left-[4%] absolute inset-y-[1%]"
                        src="images/img_arrow_6.svg"
                        alt="arrow 6"
                      />
                    }
                    shape="square"
                    color="blue_gray_900_01"
                    size="md"
                    variant="fill"
                  ></Input>
                </div>
              </div>
            </div>
            <Text
              className="mt-[149px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
              size="txtPoppinsSemiBold25"
            >
              Why work with us
            </Text>
            <div className="flex md:flex-col flex-row gap-[43px] items-center justify-start mt-16 w-[92%] md:w-full">
              <div className="bg-gray-900 flex flex-col gap-[25px] items-start justify-center p-[37px] sm:px-5 rounded-[20px] shadow-bs1 w-[31%] md:w-full">
                <Text
                  className="bg-purple-A700_1c h-[39px] justify-center mt-[27px] pb-[7px] pl-3.5 sm:pr-5 pr-[35px] pt-2.5 rounded-lg text-sm text-white-A700 w-[140px]"
                  size="txtPoppinsRegular14"
                >
                  Lorem ipsum
                </Text>
                <div className="flex flex-col gap-[17px] items-start justify-start mb-[27px]">
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    Lorem Ipsum
                  </Text>
                  <Text
                    className="leading-[187.50%] text-sm text-white-A700 w-full"
                    size="txtPoppinsRegular14"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                    </>
                  </Text>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-[43px] grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-900 flex flex-col items-center justify-center p-[37px] sm:px-5 rounded-[20px] w-full">
                  <div className="flex flex-col gap-[25px] items-start justify-start my-[27px] w-full">
                    <Button
                      className="cursor-pointer min-w-[140px] rounded-lg text-center text-sm"
                      shape="round"
                      color="orange_900_1c"
                      size="xs"
                      variant="fill"
                    >
                      Lorem ipsum
                    </Button>
                    <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        Lorem Ipsum
                      </Text>
                      <Text
                        className="leading-[187.50%] text-sm text-white-A700 w-full"
                        size="txtPoppinsRegular14"
                      >
                        <>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&#39;s standard dummy text ever since the
                          1500s,
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 flex flex-col items-center justify-center p-[37px] sm:px-5 rounded-[20px] w-full">
                  <div className="flex flex-col gap-[25px] items-start justify-start my-[27px] w-full">
                    <Button
                      className="cursor-pointer min-w-[140px] rounded-lg text-center text-sm"
                      shape="round"
                      color="green_A400_1c"
                      size="xs"
                      variant="fill"
                    >
                      Lorem ipsum
                    </Button>
                    <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        Lorem Ipsum
                      </Text>
                      <Text
                        className="leading-[187.50%] text-sm text-white-A700 w-full"
                        size="txtPoppinsRegular14"
                      >
                        <>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&#39;s standard dummy text ever since the
                          1500s,
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[147px] w-full">
            <div className="bg-gray-900 flex flex-col items-start justify-start pt-[110px] md:px-10 sm:px-5 px-[110px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[95px] items-start justify-start mt-[3px] w-[93%] md:w-full">
                <Img
                  className="h-[490px] sm:h-auto object-cover w-[45%] md:w-full"
                  src="images/img_rectangle25_490x496.png"
                  alt="rectangleTwentyFive"
                />
                <div className="flex flex-col gap-4 items-start justify-start md:mt-0 mt-[26px] w-[48%] md:w-full">
                  <Text
                    className="text-base text-white-A700"
                    size="txtPoppinsMedium16"
                  >
                    Lorem ipsum
                  </Text>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                      <Text
                        className="leading-[157.50%] sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
                        size="txtPoppinsSemiBold28"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                      </Text>
                      <Text
                        className="leading-[202.50%] text-base text-white-A700 w-full"
                        size="txtPoppinsRegular16"
                      >
                        <>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&#39;s standard dummy text ever since the
                          1500s, when an unknown printer took a galley of type
                          and scrambled it to make a type specimen book. It has
                          survived not only five centuries,
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-14 items-start justify-start max-w-[1264px] mt-[151px] mx-auto md:px-5 w-full">
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtPoppinsSemiBold25"
              >
                Our Team
              </Text>
              <List
                className="sm:flex-col flex-row gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-900 flex flex-1 flex-col gap-1.5 items-center justify-end p-[33px] sm:px-5 rounded-[20px] w-full">
                  <Img
                    className="h-[123px] md:h-auto object-cover w-[123px]"
                    src="images/img_bill1.png"
                    alt="billOne"
                  />
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-[19px] text-white-A700"
                      size="txtPoppinsSemiBold19"
                    >
                      John peter
                    </Text>
                    <Text
                      className="text-base text-gray-200"
                      size="txtPoppinsLight16"
                    >
                      COO
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-900 flex flex-1 flex-col gap-1.5 items-center justify-end p-[33px] sm:px-5 rounded-[20px] w-full">
                  <Img
                    className="h-[117px] md:h-auto mt-[7px] object-cover w-[117px]"
                    src="images/img_beverly1.png"
                    alt="beverlyOne"
                  />
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-[19px] text-white-A700"
                      size="txtPoppinsSemiBold19"
                    >
                      John peter
                    </Text>
                    <Text
                      className="text-base text-gray-200"
                      size="txtPoppinsLight16"
                    >
                      COO
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-900 flex flex-1 flex-col gap-2.5 items-center justify-end p-[33px] sm:px-5 rounded-[20px] w-full">
                  <Img
                    className="h-[109px] md:h-auto mt-[11px] object-cover w-[109px]"
                    src="images/img_claudia1.png"
                    alt="claudiaOne"
                  />
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-[19px] text-white-A700"
                      size="txtPoppinsSemiBold19"
                    >
                      John peter
                    </Text>
                    <Text
                      className="text-base text-gray-200"
                      size="txtPoppinsLight16"
                    >
                      COO
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-900 flex flex-1 flex-col gap-[11px] items-center justify-end p-[33px] sm:px-5 rounded-[20px] w-full">
                  <Img
                    className="h-[106px] md:h-auto mt-[13px] object-cover w-[106px]"
                    src="images/img_avatar1.png"
                    alt="avatarOne"
                  />
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-[19px] text-white-A700"
                      size="txtPoppinsSemiBold19"
                    >
                      John peter
                    </Text>
                    <Text
                      className="text-base text-gray-200"
                      size="txtPoppinsLight16"
                    >
                      COO
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col md:gap-10 gap-[71px] items-start justify-start max-w-[1170px] mt-[166px] mx-auto md:px-5 w-full">
              <div className="flex flex-col gap-[17px] items-start justify-start">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                  size="txtPoppinsSemiBold30"
                >
                  Lorem Ipsum
                </Text>
                <Text
                  className="leading-[187.50%] text-base text-white-A700 w-full"
                  size="txtPoppinsRegular16"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </Text>
              </div>
              <div className="bg-gray-900_01 flex md:flex-col flex-row gap-[42px] items-center justify-start p-[42px] md:px-10 sm:px-5 rounded-[15px] w-full">
                <div className="flex flex-col gap-[7px] items-start justify-start ml-3.5 md:ml-[0]">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtPoppinsMedium30"
                  >
                    Stay in the loop
                  </Text>
                  <Text
                    className="text-[17px] text-white-A700"
                    size="txtPoppinsRegular17"
                  >
                    <>
                      Subscribe to receive the latest news and updates about
                      TDA.
                      <br />
                      We promise not to spam you!{" "}
                    </>
                  </Text>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-row items-center justify-between md:mt-0 my-7 p-[5px] rounded-lg w-[36%] md:w-full">
                  <Text
                    className="ml-[29px] text-[13px] text-blue_gray-400 text-center"
                    size="txtPoppinsLight13"
                  >
                    Enter email address
                  </Text>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[105px] rounded-lg text-[13px] text-center"
                    shape="round"
                    color="orange_800_01"
                    size="xs"
                    variant="fill"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-black-900 h-[376px] sm:h-[419px] md:h-[652px] mt-[153px] md:px-5 py-[30px] relative w-full">
              <Text
                className="absolute left-[7%] text-2xl md:text-[22px] text-white-A700 sm:text-xl top-[19%]"
                size="txtPoppinsExtraBold24"
              >
                LOGO
              </Text>
              <div className="absolute bottom-[8%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
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
                            <a
                              href="javascript:"
                              className="text-[17px] text-white-A700"
                            >
                              <Text size="txtPoppinsMedium17">Contact us</Text>
                            </a>
                            <Text
                              className="mt-[19px] text-base text-white-A700 w-full"
                              size="txtPoppinsRegular16"
                            >
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.{" "}
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
            </div>
            <div className="flex flex-col mt-[702px] md:px-5 relative w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto p-[45px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col md:gap-10 gap-[74px] items-start justify-start mb-[260px] w-[87%] md:w-full">
                  <div className="flex flex-col gap-8 items-start justify-start">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                      size="txtPoppinsSemiBold30"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="leading-[187.50%] text-base text-white-A700 w-full"
                      size="txtPoppinsRegular16"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </Text>
                  </div>
                  <div className="bg-gray-900_01 flex md:flex-col flex-row gap-[42px] items-center justify-start p-10 sm:px-5 rounded-[15px] w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start mb-0.5 ml-4 md:ml-[0]">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                        size="txtPoppinsMedium30"
                      >
                        Stay in the loop
                      </Text>
                      <Text
                        className="text-[17px] text-white-A700"
                        size="txtPoppinsRegular17"
                      >
                        <>
                          Subscribe to receive the latest news and updates about
                          TDA.
                          <br />
                          We promise not to spam you!{" "}
                        </>
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex md:flex-1 flex-row items-center justify-between md:mt-0 my-[30px] p-[5px] rounded-lg w-[36%] md:w-full">
                      <Text
                        className="ml-[15px] text-[13px] text-blue_gray-400 text-center"
                        size="txtPoppinsLight13"
                      >
                        Enter email address
                      </Text>
                      <Button
                        className="cursor-pointer leading-[normal] min-w-[105px] rounded-lg text-[13px] text-center"
                        shape="round"
                        color="orange_800_01"
                        size="xs"
                        variant="fill"
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-black-900 sm:h-[126px] md:h-[365px] h-[376px] mt-[-142px] mx-auto py-[29px] w-full z-[1]">
                <Img
                  className="absolute h-8 left-[7%] object-cover top-[19%] w-[6%]"
                  src="images/img_asset21.png"
                  alt="assetTwentyOne"
                />
                <div className="absolute bottom-[8%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                  <div className="flex flex-col items-center justify-start w-[85%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                          <div className="flex flex-col gap-[25px] items-start justify-start mb-[9px] md:mt-0 mt-[46px]">
                            <Text
                              className="text-base text-white-A700 w-full"
                              size="txtPoppinsRegular16"
                            >
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.{" "}
                            </Text>
                            <Text
                              className="text-base text-white-A700"
                              size="txtPoppinsRegular16"
                            >
                              @Zeux
                            </Text>
                          </div>
                          <div className="h-[161px] relative w-[42%] md:w-full">
                            <Text
                              className="absolute bottom-[2%] leading-[186.30%] left-[0] text-base text-white-A700"
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
                            <div className="absolute flex flex-col h-full inset-y-[0] items-start justify-start my-auto right-[0]">
                              <a
                                href="javascript:"
                                className="text-[17px] text-white-A700"
                              >
                                <Text size="txtPoppinsMedium17">
                                  Contact us
                                </Text>
                              </a>
                              <Text
                                className="mt-5 text-base text-white-A700 w-full"
                                size="txtPoppinsRegular16"
                              >
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.{" "}
                              </Text>
                              <Text
                                className="mt-[11px] text-base text-white-A700 w-1/2 sm:w-full"
                                size="txtPoppinsRegular16"
                              >
                                +908 89097 890
                              </Text>
                            </div>
                          </div>
                          <div className="flex md:flex-1 flex-row gap-4 items-center justify-between mb-2.5 md:mt-0 mt-[117px] w-[16%] md:w-full">
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
                                alt="facebookOne_One"
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
                                alt="instagramOne_One"
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
                                alt="twitterOne_One"
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
                                alt="linkedinOne_One"
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-blue_gray-100_01 h-px mt-[53px] w-full" />
                  <Text
                    className="mt-7 text-[13px] text-white-A700"
                    size="txtPoppinsRegular13"
                  >
                    Copyright ® 2021 KodeX All rights Rcerved
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutusPage;
