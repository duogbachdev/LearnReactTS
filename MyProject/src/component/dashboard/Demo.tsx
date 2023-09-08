import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useStore } from '../../hooks/useStore'
import { useFetchApi } from '../../hooks/useAutoDispatch'


const Demo = () => {
  //https://picsum.photos/v2/list?page=2&limit=100
  const {data : users , isloading, error} = useFetchApi("https://picsum.photos/v2/list?page=2&limit=100")
  if (error) return <p> .... error </p>

  return isloading ? (
    <p> ... loading </p>
  ) : (
    <div>
      {users.map((data: any) => (
        <div key={data?.id}>
          <p>{data.author}</p>
        </div>
      ))}
    </div>
  )
}

export default Demo
