const gradients = [
  `bg-gradient-to-b from-black via-[#050816] via-[#1d1836] to-black`,
  `bg-gradient-to-r from-[#1d1836] to-purple-700`,
  `bg-gradient-radial from-[#1d1836] to-purple-700`,
];
const styles = {
  root: {
    container: "relative z-0 bg-black overflow-hidden",
    backgroundContainer: "bg-cover bg-no-repeat bg-center pb-24",
    contactContainer: "relative z-0 overflow-hidden",
  },

  paddingX: "px-6 md:px-16",
  paddingY: "py-6 md:py-16",
  padding: "md:px-16 px-6 md:py-16 py-10",

  sectionWrapper:
    "relative z-0 max-w-7xl w-full h-auto md:px-16 px-6 md:py-16 py-10",

  navBar: {
    container: `grid md:grid-rows-1 grid-cols-2 w-full fixed z-10 ${gradients[0]} px-6 md:px-8 py-2`,
    navGridOne: "col-start-1 flex flex-start",
    navGridTwo: "hidden md:flex md:justify-end md:items-center md:col-start-2",
    navGridThree: "col-start-2 flex justify-end items-center md:hidden",
    navGridFour: `flex flex-col z-11 justify-center gap-y-lg w-full h-inherit absolute md:hidden ${gradients[0]} px-6 md:px-16 py-6`,
    gridOneSpan:
      "hidden md:flex md:justify-center md:items-center md:text-[#f3f3f3] md:text-md md:cursor-pointer md:font-bold",
  },
  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",

  contact: {
    container: "flex flex-col lg:flex-row items-center justify-center gap-4",
    formContainer: `flex flex-col items-start md:justify-center w-full lg:w-2/3 p-16 lg:p-32 rounded-2xl ${gradients[0]}`,
    earthContainer: "flex justify-center items-center w-full lg:w-1/3",
    form: "flex flex-col w-full mt-3 gap-2",
    formLabel: "flex flex-col",
    formLabelText: "text-white mb-1 font-medium",
    formInput: `p-1 placeholder-[#aaa6c3] text-[#f3f3f3] font-medium outline-none border-none rounded-lg ${gradients[1]}`,
    formSubmitButton: `p-2 lg:p-1 mt-8 text-lg text-[#f3f3f3] font-bold outline-none border-none rounded-xl shadow-md w-1/2`,
  },
};

export { styles };
