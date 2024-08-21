import React,{useContext, useMemo} from 'react'
import { MyStore } from '../ContextApi/Store'
import CreateTable from './CreateTable';

const ShowSelected = () => {
    const { rows, data, cols } = useContext(MyStore)
    
    const selectedRows = useMemo(() => {
        return data?.map(r => {if (rows.includes(r["Car Name"])) return r;});
    }, [data, rows]);
    const selectedCols = useMemo(() => { },[data, cols])
  return (
      <div>
          {selectedRows && <CreateTable data={selectedRows} />}
          
      </div>
  )
}

export default ShowSelected