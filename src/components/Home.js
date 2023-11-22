import React from 'react'
import logo from '../assets/directright.png'
import icon from '../assets/Icon.svg'
import home from '../assets/home.svg'
import homeimg from '../assets/homeimg.png'
import Vector from '../assets/Vector.png'
import notifications from '../assets/notifications.svg'


const Home = () => {
  return (
    <div className="relative bg-white w-full h-[67.5rem] overflow-hidden text-left text-[2.36rem] text-blueviolet font-roboto">
      <img
        className="absolute top-[1.81rem] left-[1.88rem] w-[3.3rem] h-[3.3rem] overflow-hidden"
        alt=""
        src={logo}
      />
      <div className="absolute top-[1.81rem] left-[5.6rem] font-extrabold font-plus-jakarta-sans inline-block w-[8.4rem] h-[3.4rem]">
        LAMA.
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[5.93%] w-[3.33%] top-[5.56%] right-[3.33%] bottom-[88.52%] left-[93.33%] overflow-hidden">
        <img
          className="absolute h-[81.25%] w-[66.67%] top-[9.38%] right-[16.67%] bottom-[9.38%] left-[16.67%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={notifications}
        />
      </button>
      <div className="absolute top-[8.31rem] left-[11.56rem] rounded-[35.32px] bg-white shadow-[18.757944107055664px_36.765567779541016px_12.01px_rgba(0,_0,_0,_0),_12.005084037780762px_24.010168075561523px_10.5px_rgba(0,_0,_0,_0.01),_6.752860069274902px_13.505720138549805px_9px_rgba(0,_0,_0,_0.03),_3.0012710094451904px_6.002542018890381px_6.75px_rgba(0,_0,_0,_0.05),_0.7503177523612976px_1.5006355047225952px_3.75px_rgba(0,_0,_0,_0.06),_0px_0px_0px_rgba(0,_0,_0,_0.06)] box-border w-[12.42rem] h-[2.56rem] border-[0.8px] border-solid border-darkgray" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[8.67rem] left-[12.47rem] w-[1.82rem] h-[1.82rem] overflow-hidden">
        <img
          className="absolute h-[70.83%] w-[83.33%] top-[14.58%] right-[8.33%] bottom-[14.58%] left-[8.33%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={home}
        />
      </button>
      <div className="absolute top-[8.82rem] left-[14.64rem] text-[1.31rem] text-darkslategray">
        Back to Home
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[5%] w-[2.81%] top-[6.11%] right-[7.66%] bottom-[88.89%] left-[89.53%]">
        <img
          className="absolute h-[85.38%] w-[83.36%] top-[7.33%] right-[8.31%] bottom-[7.29%] left-[8.33%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={icon}
        />
      </button>
      <div className="absolute top-[10.44rem] left-[calc(50%_-_748px)] w-[93.44rem] h-[48.37rem] text-[4.59rem]">
        <b className="absolute top-[0rem] left-[calc(50%_-_347.5px)]">
          Create a New Project
        </b>
        <div className="absolute top-[41.5rem] left-[28.94rem] w-[35.61rem] h-[6.87rem] text-[2.89rem] text-whitesmoke">
          <button className="cursor-pointer [border:none] p-0 bg-gray-200 absolute top-[0rem] left-[0rem] rounded-[12.89px] w-[35.61rem] h-[6.87rem]" />
          <div className="absolute top-[1.69rem] left-[6.46rem] font-semibold">
            Create New Project
          </div>
          <img
            className="absolute h-[50.81%] w-[9.8%] top-[26.23%] right-[84.8%] bottom-[22.96%] left-[5.4%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={Vector}
          />
        </div>
        <div className="absolute top-[31.63rem] left-[calc(50%_-_747.5px)] text-[2.19rem] text-gray-100 text-center inline-block w-[93.44rem] h-[9.19rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in
        </div>
      </div>
      <img
        className="absolute h-[33.49%] w-[28.07%] top-[25.74%] right-[35.99%] bottom-[40.77%] left-[35.94%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={homeimg}
      />
    </div>
  );
};

export default Home;


