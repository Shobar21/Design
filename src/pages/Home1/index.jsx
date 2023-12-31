import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const Home1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gradient2  font-poppins h-[5382px] mx-auto relative w-full">
        <div className="absolute flex flex-col md:px-5 right-[0] top-[0] w-[90%] md:w-full">
          <div className="flex flex-col font-poppins md:gap-10 gap-[719px] items-start justify-start mx-auto w-full">
            <div className="h-[761px] relative w-full">
              <div className="absolute bottom-[6%] flex left-[0] w-[47%] md:w-full">
                <div className="flex flex-col gap-[50px] items-start justify-start my-auto w-[89%]">
                  <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                    <div className="flex flex-col gap-[15px] items-start justify-start">
                      <Text
                        className="text-xl text-yellow-900_01"
                        size="txtPoppinsBold20"
                      >
                        Proved By prodesigner
                      </Text>
                      <Text
                        className="leading-[155.20%] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 w-full"
                        size="txtPoppinsBold50"
                      >
                        Work that we produce for our clients
                      </Text>
                    </div>
                    <Text
                      className="leading-[200.00%] text-base text-white-A700 w-full"
                      size="txtPoppinsMedium16"
                    >
                      <>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&#39;s standard.
                      </>
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[195px] rounded-[26px] text-base text-center"
                    size="md"
                    variant="gradient"
                    color="orange_700_orange_A200"
                  >
                    Get more details
                  </Button>
                </div>
                <Img
                  className="h-[30px] ml-[-25px] mt-[203px] object-cover w-[17%] z-[1]"
                  src="images/img_unity1.png"
                  alt="unityOne"
                />
              </div>
              <div className="absolute h-[761px] inset-y-[0] my-auto right-[0] w-[59%] md:w-full">
                <div className="absolute h-[761px] inset-[0] justify-center m-auto w-[99%] md:w-full">
                  <div className="absolute h-[761px] inset-y-[0] my-auto right-[0] w-[91%] md:w-full">
                    <Img
                      className="h-[761px] m-auto object-cover w-full"
                      src="images/img_joystick1.png"
                      alt="joystickOne"
                    />
                    <div className="absolute flex flex-row items-center justify-between left-[8%] top-[27%] w-3/5">
                      <Img
                        className="h-[99px] md:h-auto object-cover"
                        src="images/img_cry1.png"
                        alt="cryOne"
                      />
                      <Img
                        className="h-16 md:h-auto object-cover"
                        src="images/img_unreal1.png"
                        alt="unrealOne"
                      />
                    </div>
                  </div>
                  <div className="absolute flex md:flex-col flex-row gap-[37px] items-center justify-between left-[0] top-[6%] w-[92%]">
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-row gap-[88px] items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-base text-white-A700 w-12"
                          size="txtPoppinsRegular16"
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
                      className="common-pointer cursor-pointer leading-[normal] min-w-[131px] rounded-md text-[13px] text-center"
                      onClick={() => navigate("/")}
                      color="yellow_900"
                      size="xs"
                      variant="fill"
                    >
                      Contact us
                    </Button>
                  </div>
                </div>
                <Img
                  className="absolute h-1 left-[0] top-[11%]"
                  src="images/img_group94.svg"
                  alt="groupNinetyFour"
                />
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-[76px] justify-start w-[77%] md:w-full">
              <Text
                className="leading-[187.50%] ml-40 md:ml-[0] sm:text-[31px] md:text-[33px] text-[35px] text-center text-white-A700 w-[84%] sm:w-full"
                size="txtPoppinsSemiBold35"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
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
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                  </>
                </Text>
              </div>
            </div>
          </div>
          <div className="md:h-[441px] h-[529px] mt-[-21px] w-[89%] md:w-full z-[1]">
            <Img
              className="absolute h-[154px] right-[11%] top-[0]"
              src="images/img_group21.svg"
              alt="groupTwentyOne"
            />
            <Img
              className="absolute bottom-[0] h-[462px] inset-x-[0] mx-auto object-cover rounded-[5px] w-full"
              src="images/img_rectangle4.png"
              alt="rectangleFour"
            />
          </div>
          <Text
            className="mt-[-NaNpx] sm:text-[27px] md:text-[29px] text-[31px] text-white-A700 z-[1]"
            size="txtRubikBold31"
          >
            Currently Trending Games
          </Text>
          <Button
            className="cursor-pointer font-medium font-rubik min-w-[139px] ml-auto mr-[147px] mt-[-NaNpx] text-center text-xl z-[1]"
            shape="round"
            color="white_A700_1c"
            size="md"
            variant="fill"
          >
            SEE ALL
          </Button>
          <Img
            className="h-[277px] mb-auto mt-[-NaNpx] object-cover rounded-[20px] w-1/5 z-[1]"
            src="images/img_rectangle23.png"
            alt="rectangleTwentyThree"
          />
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mb-auto ml-auto mr-[147px] mt-[-NaNpx] w-[66%] z-[1]">
            <Img
              className="h-[277px] sm:h-auto object-cover rounded-[20px] w-[30%] md:w-full"
              src="images/img_rectangle24.png"
              alt="rectangleTwentyFour"
            />
            <Img
              className="h-[277px] sm:h-auto md:ml-[0] ml-[46px] object-cover rounded-[20px] w-[30%] md:w-full"
              src="images/img_rectangle25.png"
              alt="rectangleTwentyFive"
            />
            <Img
              className="h-[277px] sm:h-auto md:ml-[0] ml-[47px] object-cover rounded-[20px] w-[30%] md:w-full"
              src="images/img_rectangle26.png"
              alt="rectangleTwentySix"
            />
          </div>
          <List
            className="sm:flex-col flex-row font-rubik md:gap-10 gap-[129px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 mb-[1016px] ml-10 mt-[-NaNpx] w-[83%] z-[1]"
            orientation="horizontal"
          >
            <div className="flex flex-row gap-[9px] items-center justify-start w-full">
              <Img
                className="h-[25px] w-[25px]"
                src="images/img_fire1.svg"
                alt="fireOne"
              />
              <Text
                className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                size="txtRubikMedium22"
              >
                40 Followers
              </Text>
            </div>
            <div className="flex flex-row gap-[9px] items-center justify-center w-full">
              <Img
                className="h-[25px] w-[25px]"
                src="images/img_fire1.svg"
                alt="fireOne"
              />
              <Text
                className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                size="txtRubikMedium22"
              >
                40 Followers
              </Text>
            </div>
            <div className="flex flex-row gap-[9px] items-center justify-center w-full">
              <Img
                className="h-[25px] w-[25px]"
                src="images/img_fire1.svg"
                alt="fireOne"
              />
              <Text
                className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                size="txtRubikMedium22"
              >
                40 Followers
              </Text>
            </div>
            <div className="flex flex-row gap-[9px] items-center justify-start w-full">
              <Img
                className="h-[25px] w-[25px]"
                src="images/img_fire1.svg"
                alt="fireOne"
              />
              <Text
                className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                size="txtRubikMedium22"
              >
                40 Followers
              </Text>
            </div>
          </List>
        </div>
        <footer className="absolute bottom-[0] flex inset-x-[0] items-center justify-center mx-auto md:px-5 w-full">
          <div className="flex flex-col relative w-full">
            <div className="h-[881px] md:h-[NaNpx] mt-[-NaNpx] mx-auto w-full z-[1]">
              <Img
                className="h-[881px] m-auto object-cover w-full"
                src="images/img_db4d123c4b39096.png"
                alt="db4d123c4b39096"
              />
              <div className="absolute bg-black-900_89 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[92px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col items-center justify-start w-[83%] md:w-full">
                  <div className="flex flex-col md:gap-10 gap-[99px] items-center justify-start w-full">
                    <div className="flex flex-col gap-[25px] items-center justify-start">
                      <Text
                        className="leading-[187.50%] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 w-full"
                        size="txtPoppinsBold30"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </Text>
                      <Text
                        className="leading-[187.50%] text-base text-center text-white-A700 w-full"
                        size="txtPoppinsRegular16"
                      >
                        <>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&#39;s standard dummy text ever since the
                          1500s,
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col md:gap-10 gap-[62px] items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <div className="flex md:flex-1 flex-col gap-[34px] items-center justify-start w-[22%] md:w-full">
                          <Button
                            className="flex h-[65px] items-center justify-center rounded-[32px] w-[65px]"
                            color="white_A700"
                            size="md"
                            variant="fill"
                          >
                            <Img
                              className="h-[29px]"
                              src="images/img_smartphone21.svg"
                              alt="smartphoneTwentyOne"
                            />
                          </Button>
                          <div className="flex flex-col gap-[25px] items-center justify-start w-full">
                            <Text
                              className="text-base text-center text-white-A700"
                              size="txtPoppinsMedium16"
                            >
                              Mobile Game Development
                            </Text>
                            <Img
                              className="h-[21px] w-[21px]"
                              src="images/img_arrow1.svg"
                              alt="arrowOne"
                            />
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-[35px] items-center justify-start w-[19%] md:w-full">
                          <Img
                            className="h-[65px] w-[65px]"
                            src="images/img_upload.svg"
                            alt="upload"
                          />
                          <div className="flex flex-col gap-6 items-center justify-start w-full">
                            <Text
                              className="text-base text-white-A700"
                              size="txtPoppinsMedium16"
                            >
                              PC Game Development
                            </Text>
                            <Img
                              className="h-[21px] w-[21px]"
                              src="images/img_arrow1.svg"
                              alt="arrowTwo"
                            />
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-[35px] items-center justify-start w-[19%] md:w-full">
                          <Button
                            className="flex h-[65px] items-center justify-center rounded-[32px] w-[65px]"
                            color="white_A700"
                            size="sm"
                            variant="fill"
                          >
                            <Img
                              className="h-[39px]"
                              src="images/img_ps41.svg"
                              alt="psFortyOne"
                            />
                          </Button>
                          <div className="flex flex-col gap-6 items-center justify-start w-full">
                            <Text
                              className="text-base text-white-A700"
                              size="txtPoppinsMedium16"
                            >
                              PS4 Game Development
                            </Text>
                            <Img
                              className="h-[21px] w-[21px]"
                              src="images/img_arrow1.svg"
                              alt="arrowThree"
                            />
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-8 items-center justify-start w-[13%] md:w-full">
                          <Button
                            className="flex h-[65px] items-center justify-center rounded-[32px] w-[65px]"
                            color="white_A700"
                            size="md"
                            variant="fill"
                          >
                            <Img
                              className="h-[30px]"
                              src="images/img_vrglasses1.svg"
                              alt="vrglassesOne"
                            />
                          </Button>
                          <div className="flex flex-col gap-[26px] items-center justify-start w-full">
                            <Text
                              className="text-base text-white-A700"
                              size="txtPoppinsMedium16"
                            >
                              AR/VR Solutions
                            </Text>
                            <Img
                              className="h-[21px] w-[21px]"
                              src="images/img_arrow1.svg"
                              alt="arrowFour"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[32%] md:w-full">
                        <div className="flex flex-col gap-[33px] items-center justify-start w-[35%]">
                          <Button
                            className="flex h-[65px] items-center justify-center rounded-[32px] w-[65px]"
                            color="white_A700"
                            size="md"
                            variant="fill"
                          >
                            <Img
                              className="h-[33px]"
                              src="images/img_desktop11.svg"
                              alt="desktopEleven"
                            />
                          </Button>
                          <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                            <Text
                              className="text-base text-white-A700"
                              size="txtPoppinsMedium16"
                            >
                              AR/ VR design
                            </Text>
                            <Img
                              className="h-[21px] w-[21px]"
                              src="images/img_arrow1.svg"
                              alt="arrowFive"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-[35px] items-center justify-start w-[34%]">
                          <Button
                            className="flex h-[65px] items-center justify-center rounded-[32px] w-[65px]"
                            color="white_A700"
                            size="md"
                            variant="fill"
                          >
                            <Img
                              className="h-[30px]"
                              src="images/img_3dcube1.svg"
                              alt="3dcubeOne"
                            />
                          </Button>
                          <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                            <Text
                              className="text-base text-white-A700"
                              size="txtPoppinsMedium16"
                            >
                              3D Modelings
                            </Text>
                            <Img
                              className="h-[21px] w-[21px]"
                              src="images/img_arrow1.svg"
                              alt="arrowSix"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient3  flex flex-col items-center justify-start mt-[-7px] mx-auto p-[135px] md:px-10 sm:px-5 w-full z-[1]">
              <div className="flex flex-col font-poppins items-center justify-start mt-[21px] w-full">
                <div className="flex flex-col md:gap-10 gap-[71px] items-center justify-start w-full">
                  <div className="flex flex-col gap-[17px] items-center justify-start">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                      size="txtPoppinsBold30"
                    >
                      Our Recent Projects
                    </Text>
                    <Text
                      className="leading-[187.50%] text-center text-sm text-white-A700 w-full"
                      size="txtPoppinsRegular14"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[33px] items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-between w-full">
                      <Img
                        className="h-[223px] md:h-auto object-cover rounded-[20px]"
                        src="images/img_rectangle15.png"
                        alt="rectangleFifteen"
                      />
                      <Img
                        className="h-[223px] md:h-auto object-cover rounded-[20px]"
                        src="images/img_rectangle16.png"
                        alt="rectangleSixteen"
                      />
                      <Img
                        className="h-[223px] md:h-auto object-cover rounded-[20px]"
                        src="images/img_rectangle17.png"
                        alt="rectangleSeventeen"
                      />
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-between w-full">
                      <Img
                        className="h-[223px] md:h-auto object-cover rounded-[20px]"
                        src="images/img_rectangle19.png"
                        alt="rectangleNineteen"
                      />
                      <Img
                        className="h-[223px] md:h-auto object-cover rounded-[20px]"
                        src="images/img_rectangle18.png"
                        alt="rectangleEighteen"
                      />
                      <Img
                        className="h-[223px] md:h-auto object-cover rounded-[20px]"
                        src="images/img_rectangle20.png"
                        alt="rectangleTwenty"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="cursor-pointer font-medium font-rubik min-w-[139px] mt-[72px] text-center text-xl"
                shape="round"
                color="white_A700_1c"
                size="md"
                variant="fill"
              >
                SEE ALL
              </Button>
              <div className="flex flex-col font-poppins md:gap-10 gap-[71px] items-start justify-start mb-[404px] mt-[114px] w-full">
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
            </div>
            <div className="bg-black-900 h-[376px] md:h-[NaNpx] mt-[-NaNpx] mx-auto py-[30px] w-full z-[1]">
              <div className="absolute bottom-[8%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                <div className="flex flex-col items-center justify-start w-[85%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                        <div className="flex flex-col gap-[27px] items-start justify-start mb-1 md:mt-0 mt-[46px]">
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
                            @Logo
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
              <Text
                className="absolute left-[7%] text-2xl md:text-[22px] text-white-A700 sm:text-xl top-[19%]"
                size="txtPoppinsExtraBold24"
              >
                LOGO
              </Text>
            </div>
          </div>
        </footer>
        <Text
          className="absolute left-[4%] sm:text-[25px] md:text-[27px] text-[29px] text-white-A700 top-[1%]"
          size="txtPoppinsExtraBold29"
        >
          LOGO
        </Text>
      </div>
    </>
  );
};

export default Home1Page;
