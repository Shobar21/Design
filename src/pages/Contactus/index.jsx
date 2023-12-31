import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";

const ContactusPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gradient1  flex flex-col font-poppins items-center justify-end mx-auto pt-[37px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between max-w-[1321px] mx-auto md:px-5 w-full">
            <Text
              className="mb-[3px] sm:text-[25px] md:text-[27px] text-[29px] text-white-A700"
              size="txtPoppinsExtraBold29"
            >
              LOGO
            </Text>
            <div className="flex md:flex-1 md:flex-col flex-row gap-[37px] items-center justify-between md:mt-0 mt-1.5 w-[51%] md:w-full">
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
                className="cursor-pointer leading-[normal] min-w-[131px] rounded-md text-[13px] text-center"
                color="yellow_900"
                size="xs"
                variant="fill"
              >
                Contact us
              </Button>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[127px] items-start justify-end mt-[105px] md:px-5 w-[73%] md:w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-base text-white-A700"
                size="txtPoppinsRegular16"
              >
                <span className="text-white-A700 font-poppins text-left font-normal">
                  <>Home &gt; </>
                </span>
                <span className="text-orange-800 font-poppins text-left font-normal">
                  Contact us
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
            <div className="bg-purple-50 h-[9px] mb-[86px] md:mt-0 mt-[50px] rounded w-[9px]"></div>
          </div>
          <Img
            className="h-[537px] max-w-[1060px] mt-[95px] mx-auto w-full"
            src="images/img_hugeglobal.svg"
            alt="hugeglobal"
          />
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1188px] mt-[62px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[16%] md:w-full">
              <Text
                className="text-base text-white-A700"
                size="txtPoppinsRegular16"
              >
                Follow us
              </Text>
              <Input
                name="groupTwelve"
                placeholder=""
                className="p-0 w-full"
                wrapClassName="flex w-full"
                prefix={
                  <Img
                    className="mt-auto mb-px h-3 mr-[35px]"
                    src="images/img_facebook_1.svg"
                    alt="facebook 1"
                  />
                }
                suffix={
                  <Img
                    className="h-[13px] ml-[35px] my-auto"
                    src="images/img_twitter_1.svg"
                    alt="twitter 1"
                  />
                }
                size="sm"
              ></Input>
            </div>
            <Line className="bg-white-A700 h-[102px] md:h-px md:ml-[0] ml-[97px] md:w-full w-px" />
            <div className="h-[102px] sm:h-[184px] md:ml-[0] ml-[104px] relative w-[68%] md:w-full">
              <div className="absolute flex sm:flex-col flex-row sm:gap-10 h-max inset-[0] items-center justify-between m-auto w-full">
                <div className="flex sm:flex-1 flex-row gap-[25px] items-center justify-start w-[28%] sm:w-full">
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_call.svg"
                    alt="call"
                  />
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtPoppinsLight20"
                  >
                    +94 4444 5555 6
                  </Text>
                </div>
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-[19px] items-start justify-start w-[47%] sm:w-full">
                  <Img
                    className="h-[29px] sm:mt-0 mt-[5px] w-[29px]"
                    src="images/img_gps1.svg"
                    alt="gpsOne"
                  />
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtPoppinsLight20"
                  >
                    <>
                      but also the leap into electronic <br />
                      typesetting
                    </>
                  </Text>
                </div>
              </div>
              <Line className="absolute bg-white-A700 h-[102px] inset-y-[0] left-[41%] my-auto w-px" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[147px] w-full">
            <div className="sm:h-[729px] md:h-[841px] h-[858px] md:px-5 relative w-full">
              <div className="bg-gray-900 sm:h-[729px] md:h-[841px] h-[858px] m-auto md:pr-10 sm:pr-5 pr-[63px] pt-[63px] w-full">
                <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto w-[47%]">
                  <div className="flex flex-col gap-1.5 items-center justify-start">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                      size="txtPoppinsRegular30"
                    >
                      Say hello
                    </Text>
                    <Text
                      className="text-[13px] text-center text-white-A700"
                      size="txtPoppinsMedium13"
                    >
                      Lorem Ipsum is simply dummy text of the printing .
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[81px] w-full">
                    <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                      <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row gap-[27px] items-center justify-between w-full">
                          <div className="flex md:flex-1 flex-col gap-2 items-start justify-start w-[48%] md:w-full">
                            <Text
                              className="text-gray-800 text-sm tracking-[-0.30px]"
                              size="txtPoppinsMedium14"
                            >
                              First Name
                            </Text>
                            <Input
                              name="rectangleThree"
                              placeholder=""
                              className="p-0 w-full"
                              wrapClassName="border border-blue_gray-100 border-solid flex h-14 w-full"
                              shape="round"
                              color="white_A700_11"
                              variant="fill"
                            ></Input>
                          </div>
                          <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start w-[48%] md:w-full">
                            <Text
                              className="text-gray-800 text-sm tracking-[-0.30px]"
                              size="txtPoppinsMedium14"
                            >
                              Last Name
                            </Text>
                            <Input
                              name="rectangleThree_One"
                              placeholder=""
                              className="p-0 w-full"
                              wrapClassName="border border-blue_gray-100 border-solid flex h-14 w-full"
                              shape="round"
                              color="white_A700_11"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                          <Text
                            className="text-gray-800 text-sm tracking-[-0.30px]"
                            size="txtPoppinsMedium14"
                          >
                            Email Address
                          </Text>
                          <Input
                            name="rectangleThree_Two"
                            placeholder=""
                            className="p-0 w-full"
                            wrapClassName="border border-blue_gray-100 border-solid flex h-14 w-full"
                            shape="round"
                            color="white_A700_11"
                            variant="fill"
                          ></Input>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-gray-800 text-sm tracking-[-0.30px]"
                          size="txtPoppinsMedium14"
                        >
                          Message
                        </Text>
                        <div className="bg-white-A700_11 border border-blue_gray-100 border-solid h-[232px] mt-0.5 rounded-[9px] w-full"></div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer min-w-[193px] mt-[51px] text-base text-center"
                    shape="round"
                    color="orange_800_01"
                    size="md"
                    variant="fill"
                  >
                    Get in touch
                  </Button>
                </div>
                <Img
                  className="absolute bottom-[0] h-[255px] left-[0]"
                  src="images/img_vector4.svg"
                  alt="vectorFour"
                />
              </div>
              <Img
                className="absolute h-[265px] object-cover right-[0] top-[0]"
                src="images/img_vector3.png"
                alt="vectorThree"
              />
            </div>
            <div className="flex flex-col md:gap-10 gap-[71px] items-start justify-start max-w-[1170px] mt-[159px] mx-auto md:px-5 w-full">
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
              <div className="bg-gray-900 flex md:flex-col flex-row gap-[42px] items-center justify-start p-[42px] md:px-10 sm:px-5 rounded-[15px] w-full">
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
            <Footer className="bg-black-900 flex items-center justify-center mt-[148px] md:px-5 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactusPage;
