import React from "react";
import { AiFillRightCircle } from "react-icons/ai";

const ShoppeMail = () => {
  return (
    <div>

      <div></div>


      <div className="flex justify-between items-center mb-5">
        <ul className="flex items-center gap-5 text-[17px] uppercase">
          <li className="text-[#d0011b]">Shopee Mall</li>
          <li className="flex items-center gap-2">
            <img
              className="w-[17px]"
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/6c502a2641457578b0d5f5153b53dd5d.png"
              alt=""
            />
            <p>7 ngày miễn phí trả hàng</p>
          </li>
          <li className="flex items-center gap-2">
            <img
              className="w-[17px]"
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/511aca04cc3ba9234ab0e4fcf20768a2.png"
              alt=""
            />
            <p>Hàng chính hãng 100%</p>
          </li>
          <li className="flex items-center gap-2">
            <img
              className="w-[17px]"
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/16ead7e0a68c3cff9f32910e4be08122.png"
              alt=""
            />
            <p>Miễn phí vận chuyển</p>
          </li>
        </ul>

        <div className="flex items-center gap-2 text-[#d0011b]">
          <p>Xem tất cả</p>
          <AiFillRightCircle />
        </div>
      </div>

      <div className="flex gap-5">
        <img src="https://cf.shopee.vn/file/vn-50009109-5aa028ea181c169860f283056a7c5446" alt="" />

        <div  className="grid grid-cols-5 gap-5">
          <div>
            <img src="https://down-vn.img.susercontent.com/file/vn-50009109-cebfae17cd5979d823fb74ac79a922fa_xhdpi" alt="" />
            <p className="text-center text-[#d0011b] text-[18px]">Mua là có quà</p>
          </div>
          <div>
            <img src="https://down-vn.img.susercontent.com/file/be40023a9d9cff397a470460bc7a924d_xhdpi" alt="" />
            <p className="text-center text-[#d0011b] text-[18px]">Deli siêu sale</p>
          </div>
          <div>
            <img src="https://down-vn.img.susercontent.com/file/vn-50009109-08a87dd1e828b4bef31dafa67d5300ec_xhdpi" alt="" />
            <p className="text-center text-[#d0011b] text-[18px]">Quà mọi đơn</p>
          </div>
          <div>
            <img src="https://down-vn.img.susercontent.com/file/vn-50009109-06fb832ef52b45481158c26831cc459b_xhdpi" alt="" />
            <p className="text-center text-[#d0011b] text-[18px]">Thời trang -50%</p>
          </div>
          <div>
            <img src="https://down-vn.img.susercontent.com/file/vn-50009109-e8e0b80b57828bee61eb7e31c3d83765_xhdpi" alt="" />
            <p className="text-center text-[#d0011b] text-[18px]">Giảm đến 50%</p>
          </div>
          <div>
            <img src="https://down-vn.img.susercontent.com/file/vn-50009109-079ef6ec5c89b6a436c4455226841cd6_xhdpi" alt="" />
            <p className="text-center text-[#d0011b] text-[18px]">Mua là có quà</p>
          </div>
          <div>
            <img src="https://down-vn.img.susercontent.com/file/vn-50009109-7e80ab64bdc989f5c0862ed828f343a2_xhdpi" alt="" />
            <p className="text-center text-[#d0011b] text-[18px]">Ưu đãi đến 50%</p>
          </div>
          <div>
            <img src="https://down-vn.img.susercontent.com/file/vn-50009109-0be3ac214d6174200ed4f3096a0faa9a_xhdpi" alt="" />
            <p className="text-center text-[#d0011b] text-[18px]">Voucher 100k</p>
          </div>
          <div>
            <img src="https://down-vn.img.susercontent.com/file/5fb3f7b359a582f322ea39313e10260b_xhdpi" alt="" />
            <p className="text-center text-[#d0011b] text-[18px]">Mua 1 tặng 1</p>
          </div>
          <div>
            <img src="https://down-vn.img.susercontent.com/file/3b18e2ec25c1f5c2a0ee9c9499a3ca0b_xhdpi" alt="" />
            <p className="text-center text-[#d0011b] text-[18px]">Giảm đến 40%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppeMail;
