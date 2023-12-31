import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gradient5  flex flex-col font-poppins items-center justify-end mx-auto pt-[37px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
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
                      className="common-pointer text-base text-white-A700 w-[70px]"
                      size="txtPoppinsRegular16"
                      onClick={() => navigate("/aboutus")}
                    >
                      About us
                    </Text>
                    <Text
                      className="text-base text-white-A700 w-[65px]"
                      size="txtPoppinsRegular16"
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
                className="absolute bottom-[0] h-1 left-[44%]"
                src="images/img_group94.svg"
                alt="groupNinetyFour"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[47px] items-center justify-start max-w-[1140px] mt-28 mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-base text-white-A700"
                size="txtPoppinsRegular16"
              >
                <span className="text-white-A700 font-poppins text-left font-normal">
                  <>Home &gt; </>
                </span>
                <span className="text-orange-800 font-poppins text-left font-normal">
                  Services
                </span>
              </Text>
              <Text
                className="mt-7 sm:text-[29px] md:text-[31px] text-[33px] text-center text-white-A700"
                size="txtPoppinsSemiBold33"
              >
                Lorem Ipsum is simply dummy text of the printing and.
              </Text>
              <Text
                className="mt-[19px] text-base text-center text-white-A700"
                size="txtPoppinsMedium16"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </Text>
            </div>
            <div className="font-rubik sm:h-[200px] h-[242px] md:h-[919px] relative w-full">
              <div className="absolute backdrop-opacity-[0.5] bg-gray-900_5f blur-[114.00px] bottom-[0] h-[189px] inset-x-[0] mx-auto rounded-[10px] w-[94%]"></div>
              <div className="absolute bg-gray-900 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-end mx-auto p-[37px] sm:px-5 rounded-[10px] top-[0] w-full">
                <Button
                  className="flex h-[55px] items-center justify-center md:mt-0 my-[35px] rounded-[27px] w-[55px]"
                  color="red_50"
                  size="md"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_heroiconssmuser.svg"
                    alt="heroiconssmuser"
                  />
                </Button>
                <div className="flex flex-col gap-[7px] items-start justify-start ml-9 md:ml-[0]">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                    size="txtRubikBold25"
                  >
                    90+
                  </Text>
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtRubikRegular20"
                  >
                    Clients
                  </Text>
                </div>
                <Line className="bg-blue_gray-50 md:h-0.5 h-[125px] md:ml-[0] ml-[118px] w-0.5 md:w-full" />
                <Button
                  className="flex h-[55px] items-center justify-center md:ml-[0] ml-[111px] md:mt-0 my-[35px] rounded-[27px] w-[55px]"
                  color="red_50"
                  size="md"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_gridiconslocation.svg"
                    alt="gridiconslocati"
                  />
                </Button>
                <div className="flex md:flex-1 flex-col items-center justify-start ml-9 md:ml-[0] w-[9%] md:w-full">
                  <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                      size="txtRubikBold25"
                    >
                      30+
                    </Text>
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtRubikRegular20"
                    >
                      Countries
                    </Text>
                  </div>
                </div>
                <Line className="bg-blue_gray-50 md:h-0.5 h-[125px] md:ml-[0] ml-[134px] w-0.5 md:w-full" />
                <Button
                  className="flex h-[55px] items-center justify-center md:ml-[0] ml-[89px] md:mt-0 my-[35px] rounded-[27px] w-[55px]"
                  color="red_50"
                  size="md"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_bxbxsserver.svg"
                    alt="bxbxsserver"
                  />
                </Button>
                <div className="flex md:flex-1 flex-col items-center justify-start ml-9 md:ml-[0] mr-[46px] w-[8%] md:w-full">
                  <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                      size="txtRubikBold25"
                    >
                      50+
                    </Text>
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtRubikRegular20"
                    >
                      Projects
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1184px] mt-[77px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="h-[354px] relative w-[57%] md:w-full">
                  <Img
                    className="h-[354px] m-auto object-cover rounded-[16px] w-full"
                    src="images/img_videoimage.png"
                    alt="videoimage"
                  />
                  <Img
                    className="absolute h-14 inset-[0] justify-center m-auto"
                    src="images/img_overflowmenu.svg"
                    alt="overflowmenu"
                  />
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start mb-[5px] w-[37%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="leading-[180.50%] text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-[90%] sm:w-full"
                      size="txtPoppinsBold30"
                    >
                      Lorem Ipsum is simply dummy text.
                    </Text>
                    <Text
                      className="leading-[187.50%] mt-[11px] text-sm text-white-A700 w-full"
                      size="txtPoppinsRegular14"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.Lorem Ipsum is simply dummy .
                    </Text>
                    <div className="flex flex-row gap-2.5 items-start justify-start mt-[30px] w-[45%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_bxbxscheckcircle.svg"
                        alt="bxbxscheckcircl"
                      />
                      <Text
                        className="text-sm text-white-A700"
                        size="txtPoppinsRegular14"
                      >
                        Lorem Ipsum is simply
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start mt-[21px] w-[45%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_bxbxscheckcircle.svg"
                        alt="bxbxscheckcircl_One"
                      />
                      <Text
                        className="text-sm text-white-A700"
                        size="txtPoppinsRegular14"
                      >
                        Lorem Ipsum is simply
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start mt-[21px] w-[45%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_bxbxscheckcircle.svg"
                        alt="bxbxscheckcircl_Two"
                      />
                      <Text
                        className="text-sm text-white-A700"
                        size="txtPoppinsRegular14"
                      >
                        Lorem Ipsum is simply
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start mt-[21px] w-[45%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_bxbxscheckcircle.svg"
                        alt="bxbxscheckcircl_Three"
                      />
                      <Text
                        className="text-sm text-white-A700"
                        size="txtPoppinsRegular14"
                      >
                        Lorem Ipsum is simply
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[182px] w-[99%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                      size="txtPoppinsMedium30"
                    >
                      <>
                        Lorem Ipsum is simply dummy <br />
                        text dummy text{" "}
                      </>
                    </Text>
                  </div>
                  <Text
                    className="mt-[43px] text-[17px] text-white-A700 w-full"
                    size="txtPoppinsRegular17"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries,
                    </>
                  </Text>
                  <Text
                    className="mt-[18px] text-[17px] text-white-A700 w-[95%] sm:w-full"
                    size="txtPoppinsRegular17"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </Text>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[177px] mt-[46px] text-base text-center"
                    shape="square"
                    color="orange_800_01"
                    size="sm"
                    variant="fill"
                  >
                    Read more
                  </Button>
                </div>
              </div>
              <Img
                className="h-[489px] md:h-auto object-cover"
                src="images/img_rectangle25_489x496.png"
                alt="rectangleTwentyFive"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[189px] w-[97%] md:w-full">
              <Img
                className="h-[489px] md:h-auto object-cover"
                src="images/img_rectangle25_490x496.png"
                alt="rectangleTwentySix"
              />
              <div className="flex flex-col items-center justify-start">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                      size="txtPoppinsMedium30"
                    >
                      <>
                        Lorem Ipsum is simply dummy <br />
                        text dummy text{" "}
                      </>
                    </Text>
                  </div>
                  <Text
                    className="mt-[43px] text-[17px] text-white-A700 w-full"
                    size="txtPoppinsRegular17"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries,
                    </>
                  </Text>
                  <Text
                    className="mt-[18px] text-[17px] text-white-A700 w-[95%] sm:w-full"
                    size="txtPoppinsRegular17"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </Text>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[177px] mt-[46px] text-base text-center"
                    shape="square"
                    color="orange_800_01"
                    size="sm"
                    variant="fill"
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[183px] w-[99%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                      size="txtPoppinsMedium30"
                    >
                      <>
                        Lorem Ipsum is simply dummy <br />
                        text dummy text{" "}
                      </>
                    </Text>
                  </div>
                  <Text
                    className="mt-[43px] text-[17px] text-white-A700 w-full"
                    size="txtPoppinsRegular17"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries,
                    </>
                  </Text>
                  <Text
                    className="mt-[18px] text-[17px] text-white-A700 w-[95%] sm:w-full"
                    size="txtPoppinsRegular17"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </Text>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[177px] mt-[46px] text-base text-center"
                    shape="square"
                    color="orange_800_01"
                    size="sm"
                    variant="fill"
                  >
                    Read more
                  </Button>
                </div>
              </div>
              <Img
                className="h-[489px] md:h-auto object-cover"
                src="images/img_rectangle25_1.png"
                alt="rectangleTwentyFive_One"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[168px] w-full">
            <div className="bg-gray-900 flex flex-col items-end justify-start p-[31px] sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start mb-[29px] mt-[57px] md:px-5 w-[95%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-[50px] items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start mb-[22px] w-[66%] md:w-full">
                    <Text
                      className="leading-[50.00px] sm:text-[31px] md:text-[33px] text-[35px] text-center text-white-A700 w-[53%] sm:w-full"
                      size="txtRubikMedium35"
                    >
                      Trusted by Thousands of Happy Customer
                    </Text>
                    <Text
                      className="leading-[187.50%] mt-5 text-center text-sm text-white-A700 w-[66%] sm:w-full"
                      size="txtPoppinsRegular14"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.Lorem Ipsum is simply dummy .
                    </Text>
                    <div className="flex flex-col gap-3 items-start justify-start mt-[67px] w-full">
                      <div className="flex md:flex-col flex-row md:gap-[50px] items-start justify-between w-full">
                        <div className="h-[300px] relative w-[48%] md:w-full">
                          <div className="absolute backdrop-opacity-[0.5] bg-gray-900_5f blur-[114.00px] h-[300px] inset-[0] justify-center m-auto rounded-[10px] w-4/5"></div>
                          <div className="absolute bg-black-900_01 border-2 border-orange-800_01 border-solid flex flex-col inset-x-[0] items-center justify-end mx-auto p-[25px] sm:px-5 rounded-[10px] top-[0] w-full">
                            <div className="flex flex-col gap-5 items-center justify-start mt-[5px] w-[98%] md:w-full">
                              <div className="flex flex-row font-rubik items-center justify-start w-full">
                                <div className="flex flex-col items-center justify-start w-[54%]">
                                  <div className="flex flex-row gap-5 items-center justify-between w-full">
                                    <Img
                                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                                      src="images/img_ellipse175.png"
                                      alt="ellipse175"
                                    />
                                    <div className="flex flex-col items-start justify-start">
                                      <Text
                                        className="text-center text-lg text-white-A700"
                                        size="txtRubikMedium18"
                                      >
                                        Viezh Robert
                                      </Text>
                                      <Text
                                        className="mt-0.5 text-blue_gray-700 text-center text-sm"
                                        size="txtRubikRegular14"
                                      >
                                        Warsaw, Poland
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <Text
                                  className="ml-[108px] text-base text-white-A700"
                                  size="txtRubikRegular16"
                                >
                                  4.5
                                </Text>
                                <Img
                                  className="h-4 ml-2.5 w-4"
                                  src="images/img_antdesignstarfilled.svg"
                                  alt="antdesignstarfi"
                                />
                              </div>
                              <Text
                                className="leading-[187.50%] text-sm text-white-A700 w-full"
                                size="txtPoppinsRegular14"
                              >
                                <>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry&#39;s standard dummy
                                  text ever since the 1500s,
                                </>
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="border-2 border-gray-300 border-solid flex md:flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-[10px] w-[48%] md:w-full">
                          <div className="flex flex-col gap-2 items-center justify-start mb-3 w-full">
                            <div className="flex flex-row font-rubik items-center justify-between w-full">
                              <div className="flex flex-col items-center justify-start w-3/5">
                                <div className="flex flex-row gap-5 items-center justify-between w-full">
                                  <Img
                                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                                    src="images/img_ellipse175_50x50.png"
                                    alt="ellipse175_One"
                                  />
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-lg text-white-A700"
                                      size="txtRubikMedium18"
                                    >
                                      Yessica Christy
                                    </Text>
                                    <Text
                                      className="text-blue_gray-700 text-sm"
                                      size="txtRubikRegular14"
                                    >
                                      Shanxi, China
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row gap-2.5 items-center justify-between w-[15%]">
                                <Text
                                  className="text-base text-white-A700"
                                  size="txtRubikRegular16"
                                >
                                  4.5
                                </Text>
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_antdesignstarfilled.svg"
                                  alt="antdesignstarfi_One"
                                />
                              </div>
                            </div>
                            <Text
                              className="leading-[187.50%] text-sm text-white-A700 w-full"
                              size="txtPoppinsRegular14"
                            >
                              Lorem Ipsum is simply dummy text of the printing
                              and{" "}
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Img
                        className="h-[15px]"
                        src="images/img_group1300.svg"
                        alt="group1300"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col md:gap-10 gap-[60px] justify-start md:mt-0 mt-60 w-[31%] md:w-full">
                    <div className="border-2 border-gray-300 border-solid flex flex-col items-center justify-start p-[30px] sm:px-5 rounded-[10px] w-full">
                      <div className="flex flex-col items-center justify-start mb-[17px] w-full">
                        <div className="flex flex-row font-rubik items-center justify-between w-full">
                          <div className="flex flex-col items-center justify-start w-[59%]">
                            <div className="flex flex-row gap-5 items-center justify-between w-full">
                              <Img
                                className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                                src="images/img_ellipse175_1.png"
                                alt="ellipse175_Two"
                              />
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-lg text-white-A700"
                                  size="txtRubikMedium18"
                                >
                                  Kim Young Jou
                                </Text>
                                <Text
                                  className="text-blue_gray-700 text-sm"
                                  size="txtRubikRegular14"
                                >
                                  Seoul, South Korea
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-2.5 items-center justify-between w-[15%]">
                            <Text
                              className="text-base text-white-A700"
                              size="txtRubikRegular16"
                            >
                              4.5
                            </Text>
                            <Img
                              className="h-4 w-4"
                              src="images/img_antdesignstarfilled.svg"
                              alt="antdesignstarfi_Two"
                            />
                          </div>
                        </div>
                        <Text
                          className="leading-[187.50%] mt-[3px] text-sm text-white-A700 w-full"
                          size="txtPoppinsRegular14"
                        >
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[100px] w-[35%] md:w-full">
                      <Button
                        className="flex h-[60px] items-center justify-center rounded-[50%] w-[60px]"
                        shape="circle"
                        color="orange_800_01"
                        size="md"
                        variant="outline"
                      >
                        <Img
                          className="h-[30px]"
                          src="images/img_evaarrowbackfill.svg"
                          alt="evaarrowbackfil"
                        />
                      </Button>
                      <Button
                        className="border-2 border-orange-800_01 border-solid flex h-[60px] items-center justify-center rounded-[50%] shadow-bs2 w-[60px]"
                        shape="circle"
                        color="orange_800_01"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-[30px]"
                          src="images/img_evaarrowbackfill_white_a700.svg"
                          alt="evaarrowbackfil_One"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-[71px] items-start justify-start max-w-[1170px] mt-[136px] mx-auto md:px-5 w-full">
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
              <div className="bg-gray-900_02 flex md:flex-col flex-row gap-[42px] items-center justify-start p-[42px] md:px-10 sm:px-5 rounded-[15px] w-full">
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
            <Footer className="bg-black-900 flex items-center justify-center mt-36 md:px-5 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
