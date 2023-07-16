import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer/build/spline-viewer.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex items-center w-[100vw] h-[66vh] justify-between px-64 bg-indigo-800 ">
     <div className="flex flex-col gap-5">
     <h1 className="text-6xl font-bold text-white  leading-tight">Fashion Up Look UP..<br />Get the best products</h1>
     <p className="text-white text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga<br /> unde ea libero. Perferendis, vel soluta neque totam ab maiores repudiandae?</p>
     <button className="bg-white text-indigo-700 w-32 p-2 rounded-full shadow-lg font-bold">Learn More</button>
     </div>
      <div className="flex-1 h-[80vh] ">
        <spline-viewer url="https://prod.spline.design/fJ2ptJKzT-sDkpfO/scene.splinecode" ></spline-viewer>
      </div>
    </div>
  );
};

export default Hero;
