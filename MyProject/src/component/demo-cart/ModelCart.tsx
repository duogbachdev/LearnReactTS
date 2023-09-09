import React, { useEffect, useState } from "react";

const ModelCart = (props) => {
  const { showCart, gioHang, updateGioHang, remoteProduct } = props;
  console.log(gioHang);
  const [popUpCart, setpopUpCart] = useState<boolean>(false);

  useEffect(() => {
    if (showCart) {
      setpopUpCart(!popUpCart);
    }
  }, [showCart]);

  const renderCartItem = () =>
    gioHang.map((item: any) => (
      <tr key={item.maSP}>
        <td className="text-red-600">{item.maSP}</td>
        <td className="">
          <img className="w-[50px]" src={item.images} alt="" />
        </td>

        <td>{item.tenSP}</td>
        <td>{item.price.toLocaleString()}</td>
        <td>
          <button onClick={() => updateGioHang(item.maSP, 1)}> + </button>
          <span className="px-5"> {item.soLuong}</span>
          <button onClick={() => updateGioHang(item.maSP, -1)}> - </button>
        </td>

        <td>{(item.price * item.soLuong).toLocaleString()}</td>

        <td>
          <button onClick={() => remoteProduct(item.maSP)}>delete</button>
        </td>
      </tr>
    ));

  const allTotalSp = () => {
    return gioHang.reduce((tongTien, SpGiohang) => {
      return (tongTien += SpGiohang.soLuong * SpGiohang.price).toLocaleString();
    }, 0);
  };
  return (
    <div>
      {popUpCart && (
        <div>
          <table>
            <thead>
              <tr>
                <th> ma San Pham </th>
                <th> anh San Pham </th>
                <th> ten San Pham </th>
                <th> gia San Pham </th>
                <th> so luong San Pham </th>
                <th> thanh tien </th>
                <th> </th>
              </tr>
            </thead>

            <tbody>{renderCartItem()}</tbody>

            <tfoot>
              <p>tổng tiền {allTotalSp()}</p>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
};

export default ModelCart;
