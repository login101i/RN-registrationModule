import { useState } from 'react'

export default useApi = (apiFunc) => {
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState()



    const request = async (...args) => {
        setLoading(true)
        const response = await apiFunc(...args)
        setLoading(false)



        setError(!response.ok)
        setData(response.data)
        return response
    }

    return {
        request, data, error, loading
    }
}