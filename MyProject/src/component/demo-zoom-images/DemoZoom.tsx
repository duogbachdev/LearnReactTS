import React, { useRef } from "react";
import Button from "../button/Button";
import AddPortal from "../react-portal/portal/edit-potal/add-portal/AddPortal";

const DemoZoom = () => {
  const imageRef = useRef<any>(null);
  const handleZoom = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    console.log(rect);
    const image = imageRef.current;
    const { naturalHeight, naturalWidth } = image;
    const offSetX = event.pageX - (rect.x + window.scrollX);
    const offSetY = event.pageY - (rect.y + window.scrollY);
    const top = offSetY * (1 - naturalHeight / rect.height);
    const left = offSetX * (1 - naturalWidth / rect.width);
    image.style.width = naturalWidth + "px";
    image.style.height = naturalHeight + "px";
    image.style.maxWidth = "unset";
    image.style.top = top + "px";
    image.style.left = left + "px";
  };
  const handelRemoveZoom = () => {
    imageRef.current.removeAttribute("style");
  };
  const handelClick = () => {
    console.log("1");
  };
  return (
    <div>
      <div className="w-[400px] h-[400px]">
        <div
          className="cursor-zoom-in relative w-[140%] pt-[100%] overflow-hidden"
          onMouseMove={handleZoom}
          onMouseLeave={handelRemoveZoom}
        >
          <img
            className="absolute object-cover top-0 left-0 h-full w-full"
            src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-1-1.jpg"
            alt="demo-zoom"
            ref={imageRef}
          />
        </div>
      </div>
      <Button type="submit" className="w-[40px] bg-red-500 text-white rounded-md p-5 m-5">
        add
      </Button>
      <Button className="w-[40px] bg-pink-600 text-white rounded-md p-5 m-5">update</Button>
      <Button className="w-[40px] bg-green-700 text-white rounded-md p-5 m-5">delete</Button>

      <AddPortal />
    </div>
  );
};

export default DemoZoom;
