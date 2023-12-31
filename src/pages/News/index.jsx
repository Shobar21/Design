import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const NewsPage = () => {
  const navigate = useNavigate();

  const [groupfortyfourvalue, setGroupfortyfourvalue] = React.useState("");

  return (
    <>
      <div className="bg-gradient6  flex flex-col font-poppins items-center justify-end mx-auto pt-[37px] w-full">
        <div className="flex flex-col justify-start w-full">
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
                      className="common-pointer text-base text-white-A700 w-[65px]"
                      size="txtPoppinsRegular16"
                      onClick={() => navigate("/services")}
                    >
                      Portfolio
                    </Text>
                    <Text
                      className="text-base text-white-A700 w-[42px]"
                      size="txtPoppinsRegular16"
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
                className="absolute bottom-[0] h-1 right-[28%]"
                src="images/img_group94.svg"
                alt="groupNinetyFour"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[127px] items-start justify-end md:ml-[0] ml-[263px] mt-[113px] md:px-5 w-[73%] md:w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-base text-white-A700"
                size="txtPoppinsRegular16"
              >
                <span className="text-white-A700 font-poppins text-left font-normal">
                  <>Home &gt; </>
                </span>
                <span className="text-orange-800 font-poppins text-left font-normal">
                  News
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
            <div className="bg-purple-50 h-[9px] mb-24 md:mt-0 mt-10 rounded w-[9px]"></div>
          </div>
          <Input
            name="groupFortyFour"
            placeholder="Search"
            value={groupfortyfourvalue}
            onChange={(e) => setGroupfortyfourvalue(e)}
            className="!placeholder:text-white-A700 !text-white-A700 p-0 text-base text-center w-full"
            wrapClassName="flex md:ml-[0] mt-[76px] mx-[520px] rounded-[10px] w-[28%]"
            prefix={
              <div className="h-3.5 mt-[5px] mb-[3px] mr-[19px] w-3.5 bg-white-A700">
                <Img
                  className="cursor-pointer h-[15px] my-auto"
                  src="images/img_search.svg"
                  alt="search"
                />
              </div>
            }
            suffix={
              <CloseSVG
                fillColor="#ffffff"
                className="cursor-pointer h-[15px] my-auto"
                onClick={() => setGroupfortyfourvalue("")}
                style={{
                  visibility:
                    groupfortyfourvalue?.length <= 0 ? "hidden" : "visible",
                }}
                height={15}
                width={15}
                viewBox="0 0 15 15"
              />
            }
            shape="round"
            color="gray_900"
            size="sm"
            variant="fill"
          ></Input>
          <div className="flex flex-col md:gap-10 gap-[82px] items-start justify-start max-w-[1278px] mt-[103px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <List
                className="flex flex-col gap-[89px] w-[46%]"
                orientation="vertical"
              >
                <div className="flex flex-col md:gap-10 gap-[90px] items-center justify-start w-full">
                  <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                    <Img
                      className="h-[295px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                      src="images/img_rectangle274.png"
                      alt="rectangle274"
                    />
                    <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
                      <div className="flex flex-col gap-8 items-start justify-start w-full">
                        <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                          <div className="flex flex-row gap-[19px] items-center justify-start w-2/5 md:w-full">
                            <Button
                              className="cursor-pointer min-w-[164px] text-base text-center"
                              shape="square"
                              color="indigo_A700"
                              size="sm"
                              variant="fill"
                            >
                              John smash
                            </Button>
                            <Text
                              className="text-base text-white-A700"
                              size="txtPoppinsRegular16"
                            >
                              .5min
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text
                              className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-full"
                              size="txtPoppinsSemiBold30"
                            >
                              Lorem Ipsum is simply dummy text dummy text{" "}
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-11 items-start justify-start">
                          <Text
                            className="leading-[207.80%] text-[17px] text-white-A700 w-full"
                            size="txtPoppinsRegular17"
                          >
                            <>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry&#39;s standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries,
                            </>
                          </Text>
                          <Text
                            className="leading-[207.80%] text-[17px] text-white-A700 w-[95%] sm:w-full"
                            size="txtPoppinsRegular17"
                          >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray-500 h-px w-full" />
                </div>
                <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                  <Img
                    className="h-[295px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                    src="images/img_rectangle274_295x587.png"
                    alt="rectangle274"
                  />
                  <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
                    <div className="flex flex-col gap-8 items-start justify-start w-full">
                      <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                        <div className="flex flex-row gap-[19px] items-center justify-start w-2/5 md:w-full">
                          <Button
                            className="cursor-pointer min-w-[164px] text-base text-center"
                            shape="square"
                            color="indigo_A700"
                            size="sm"
                            variant="fill"
                          >
                            John smash
                          </Button>
                          <Text
                            className="text-base text-white-A700"
                            size="txtPoppinsRegular16"
                          >
                            .5min
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-full"
                            size="txtPoppinsSemiBold30"
                          >
                            Lorem Ipsum is simply dummy text dummy text{" "}
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="leading-[207.80%] text-[17px] text-white-A700 w-full"
                          size="txtPoppinsRegular17"
                        >
                          <>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&#39;s standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It
                            has survived not only five centuries,
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <List
                className="flex flex-col gap-[60px] w-[49%]"
                orientation="vertical"
              >
                <div className="flex flex-col items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-[31px] items-center justify-between w-full">
                    <Img
                      className="h-[183px] md:h-auto object-cover rounded-[20px]"
                      src="images/img_rectangle276.png"
                      alt="rectangle276"
                    />
                    <div className="flex flex-col gap-6 items-start justify-start">
                      <div className="flex flex-row gap-[17px] items-center justify-start w-[49%] md:w-full">
                        <Button
                          className="cursor-pointer min-w-[137px] text-center text-sm"
                          shape="square"
                          color="red_A100"
                          size="xs"
                          variant="fill"
                        >
                          John smash
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtPoppinsRegular14"
                        >
                          .5min
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="sm:text-[19px] md:text-[21px] text-[23px] text-white-A700 w-full"
                          size="txtPoppinsSemiBold23"
                        >
                          Lorem Ipsum is simply dummy text dummy text ?{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-[31px] items-center justify-between w-full">
                    <Img
                      className="h-[183px] md:h-auto object-cover rounded-[20px]"
                      src="images/img_rectangle276_183x195.png"
                      alt="rectangle276"
                    />
                    <div className="flex flex-col gap-6 items-start justify-start">
                      <div className="flex flex-row gap-[17px] items-center justify-start w-[49%] md:w-full">
                        <Button
                          className="cursor-pointer min-w-[137px] text-center text-sm"
                          shape="square"
                          color="indigo_A700"
                          size="xs"
                          variant="fill"
                        >
                          John smash
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtPoppinsRegular14"
                        >
                          .5min
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="sm:text-[19px] md:text-[21px] text-[23px] text-white-A700 w-full"
                          size="txtPoppinsSemiBold23"
                        >
                          Lorem Ipsum is simply dummy text dummy text ?{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-[31px] items-center justify-between w-full">
                    <Img
                      className="h-[183px] md:h-auto object-cover rounded-[20px]"
                      src="images/img_rectangle276_1.png"
                      alt="rectangle276"
                    />
                    <div className="flex flex-col gap-6 items-start justify-start">
                      <div className="flex flex-row gap-[17px] items-center justify-start w-[49%] md:w-full">
                        <Button
                          className="cursor-pointer min-w-[137px] text-center text-sm"
                          shape="square"
                          color="deep_orange_A200"
                          size="xs"
                          variant="fill"
                        >
                          John smash
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtPoppinsRegular14"
                        >
                          .5min
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="sm:text-[19px] md:text-[21px] text-[23px] text-white-A700 w-full"
                          size="txtPoppinsSemiBold23"
                        >
                          Lorem Ipsum is simply dummy text dummy text ?{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-[31px] items-center justify-between w-full">
                    <Img
                      className="h-[183px] md:h-auto object-cover rounded-[20px]"
                      src="images/img_rectangle276_2.png"
                      alt="rectangle276"
                    />
                    <div className="flex flex-col gap-6 items-start justify-start">
                      <div className="flex flex-row gap-[17px] items-center justify-start w-[49%] md:w-full">
                        <Button
                          className="cursor-pointer min-w-[137px] text-center text-sm"
                          shape="square"
                          color="indigo_A700"
                          size="xs"
                          variant="fill"
                        >
                          John smash
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtPoppinsRegular14"
                        >
                          .5min
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="sm:text-[19px] md:text-[21px] text-[23px] text-white-A700 w-full"
                          size="txtPoppinsSemiBold23"
                        >
                          Lorem Ipsum is simply dummy text dummy text ?{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-[31px] items-center justify-between w-full">
                    <Img
                      className="h-[183px] md:h-auto object-cover rounded-[20px]"
                      src="images/img_rectangle276_3.png"
                      alt="rectangle276"
                    />
                    <div className="flex flex-col gap-6 items-start justify-start">
                      <div className="flex flex-row gap-[17px] items-center justify-start w-[49%] md:w-full">
                        <Button
                          className="cursor-pointer min-w-[137px] text-center text-sm"
                          shape="square"
                          color="green_600"
                          size="xs"
                          variant="fill"
                        >
                          John smash
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtPoppinsRegular14"
                        >
                          .5min
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="sm:text-[19px] md:text-[21px] text-[23px] text-white-A700 w-full"
                          size="txtPoppinsSemiBold23"
                        >
                          Lorem Ipsum is simply dummy text dummy text ?{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-[31px] items-center justify-between w-full">
                    <Img
                      className="h-[183px] md:h-auto object-cover rounded-[20px]"
                      src="images/img_rectangle276_4.png"
                      alt="rectangle276"
                    />
                    <div className="flex flex-col gap-6 items-start justify-start">
                      <div className="flex flex-row gap-[17px] items-center justify-start w-[49%] md:w-full">
                        <Button
                          className="cursor-pointer min-w-[137px] text-center text-sm"
                          shape="square"
                          color="indigo_A700"
                          size="xs"
                          variant="fill"
                        >
                          John smash
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtPoppinsRegular14"
                        >
                          .5min
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="sm:text-[19px] md:text-[21px] text-[23px] text-white-A700 w-full"
                          size="txtPoppinsSemiBold23"
                        >
                          Lorem Ipsum is simply dummy text dummy text ?{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-[31px] items-center justify-between w-full">
                    <Img
                      className="h-[183px] md:h-auto object-cover rounded-[20px]"
                      src="images/img_rectangle276_5.png"
                      alt="rectangle276"
                    />
                    <div className="flex flex-col gap-6 items-start justify-start">
                      <div className="flex flex-row gap-[17px] items-center justify-start w-[49%] md:w-full">
                        <Button
                          className="cursor-pointer min-w-[137px] text-center text-sm"
                          shape="square"
                          color="purple_500"
                          size="xs"
                          variant="fill"
                        >
                          John smash
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtPoppinsRegular14"
                        >
                          .5min
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="sm:text-[19px] md:text-[21px] text-[23px] text-white-A700 w-full"
                          size="txtPoppinsSemiBold23"
                        >
                          Lorem Ipsum is simply dummy text dummy text ?{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col md:gap-10 gap-[71px] items-start justify-start w-[92%] md:w-full">
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
          </div>
          <footer className="bg-black-900 flex items-center justify-center mt-[148px] md:px-5 w-full">
            <div className="h-[272px] sm:h-[369px] md:h-[602px] mb-[30px] mt-[73px] relative w-full">
              <Text
                className="absolute left-[7%] text-2xl md:text-[22px] text-white-A700 sm:text-xl top-[0]"
                size="txtPoppinsExtraBold24"
              >
                LOGO
              </Text>
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
          </footer>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
