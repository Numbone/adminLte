import React, { useEffect, useState } from 'react'
import { TransactionAll } from '../api/transactions'

const Table = () => {
    /// get data //
    const [data, setData] = useState([])
    const getTransactionAll = async () => {
        const { data } = await TransactionAll("", "", "", "", "", true, "Jan 2, 2006 at 3:04pm (MST)", "", 0)
        setData(data)
    }
    useEffect(() => {
        getTransactionAll()
    }, [])
    return (
        <>
            {data?.products_info?.map((item, index) =>

                <tr key={index} className={index % 2 == 1 ? "odd" : "even"}>
                    <td className="dtr-control sorting_1" tabIndex={0}>Gecko</td>
                    <td>{item?.id}</td>
                    <td>Win 98+ / OSX.2+</td>
                    <td>1.7</td>
                    <td>A</td>
                </tr>
            )
            }
        </>
    )
}

export default Table