import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../redux/feaures/user/userSlice'

export const UserView = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.user)
    useEffect(() => {
        dispatch(fetchUsers())
        // for pass with id or any data
        // dispatch(fetchUsers(3))
    }, [])


    return (
        <div>
            {users.loading && <span>loading</span>}
            {!users.loading && users.error ? <span>{users.error}</span> : null}
            {!users.loading && users.users.length ?
                users.users.map((val) => {
                    return <p key={val.id}>{val.name}</p>
                })
                : null}
        </div>
    )
}
