import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

const LayoutAdmin = () => {
  return (
    <div className="flex gap-[300px]">
      <div>
        <div>
          <Link to="add-product">
            add product
          </Link>
        </div>

        <div>
          <Link to="product/:id/edit">
            edit product
          </Link>
        </div>
      </div>
      <div>

        <Outlet />
      </div>
      {/* hien thi thanh phan con ben trong router  */}
    </div>
  )
}

export default LayoutAdmin
