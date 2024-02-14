import React, { useEffect, useState } from 'react'
import { Drop } from './Drop';

export const Search = () => {

    const [user, setUser] = useState([]);

    const [searchParam, setSearchParam] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);


    function handleOnChange(e) {
        const query = e.target.value.toLowerCase();
        setSearchParam(query);
        if (query.length > 1) {
            const filteredData =
                user && user.length
                    ? user.filter((item) => item.toLowerCase().indexOf(query) > -1)
                    : [];
            setFilteredUsers(filteredData);
            setShowDropdown(true);

        } else {
            setShowDropdown(false);
        }
    }

    function handleClick(e) {
        setSearchParam(e.target.innerText)
        setFilteredUsers([])
    }



    async function fetchData() {

        const res = await fetch('https://dummyjson.com/users')
        const data = await res.json();
        //   console.log(data)  
        console.log(data.users.map((userItem) => userItem.firstName))
        setUser(data.users.map((userItem) => userItem.firstName));

    }




    useEffect(() => {
        fetchData();
    }, [])

    console.log(user, filteredUsers)

    return (
        <div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                justifyItems: 'center',
                paddingTop: '50px'
            }}>

                <input
                    value={searchParam}
                    onChange={handleOnChange}
                    placeholder='Search Here...'
                    type='text'
                />
            </div>

            <Drop handleClick={handleClick} data={filteredUsers} />

        </div>
    )
}
