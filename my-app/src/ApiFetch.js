import React, {useState, useEffect} from 'react'

const ApiFetch = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/imagePost/Imageapi/', {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
    },[])

    return (
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.id}> <img src={post.picture} /> </li>)
                }
            </ul>
            
        </div>
    )
}

export default ApiFetch