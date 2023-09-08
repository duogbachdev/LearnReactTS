import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Skeleton } from 'antd'
interface Iproduct {
  id: string,
  author: string,
  download_url: string,
  height: number,
  width: number,
  url : string
}
function getData(page : number) {
  return axios
    .get(`https://picsum.photos/v2/list?page=${page}&limit=5`)
    .then((response) => response.data)
    .catch((error) =>console.log(error))
}
const DemoLoadMore = () => {
  const [data, setData] = useState<Iproduct[]>([])
  const [page,setPage] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const handelLoadMore = async () => {
    setIsLoading(true)
    setTimeout(async() => {
     const newData = await getData(page)
     const newPageLoad = [
      ...data , ...newData
    ]
      setData(newPageLoad)
      setIsLoading(false)
    setPage(prevPage => prevPage + 1)
    },2000)
  }
  useEffect(() => {
    handelLoadMore()
  },[])
  return (
    <div className='grid grid-cols-6 space-y-5'>
      {data.map((item : Iproduct) => (
        <div className='' key={item.id}>
          {
            isLoading ? <Skeleton avatar paragraph={{ rows: 4 }}/> : <div>
          <img className='w-[150px]' src={`${item.download_url}`} alt="" />
          </div>
          }
        </div>
      ))}
      <br/>
      <button onClick={handelLoadMore}>
        load more
      </button>
    </div>
  )
}

export default DemoLoadMore
