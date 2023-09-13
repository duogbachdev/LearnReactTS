import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { getIdproducts } from "../../../api/product.servcies";
import { Iproduct } from "../../../interface/product";
const LinkTitle = () => {
  const [data, setData] = useState<Iproduct | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchDataDetails = async (id: number) => {
      try {
        const res = await getIdproducts(id);
        setData(res.data);
      } catch (error) {
        alert(error);
      }
    };

    if (id) {
      fetchDataDetails(Number(id));
    }
  }, [id]);
  return (
    <div>
      <p className="flex items-center gap-1 text-[14px]">
        <Link className="text-[#05a]" to={"/"}>
          Shoppe
        </Link>{" "}
        <BsChevronRight /> <span>{data?.description}</span>
      </p>
    </div>
  );
};

export default LinkTitle;
