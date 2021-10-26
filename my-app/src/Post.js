import React,{useState} from "react"
import axios from "axios"
import tree from "./tree.png"
const Post = () => {
    const [formData, setFormData] = useState({
        title: "",
    })
    const fileInput = React.createRef()

     const handleSubmit = async (e) => {
        e.preventDefault()
        const submitData = new FormData()

        submitData.append("title", JSON.stringify(formData))
        submitData.append("image", fileInput.current.files[0])

        await axios.post(`http://api/posts`, submitData,
            {
                headers: {
                'content-type': 'multipart/form-data',
            },
          })
    }

    const handleChange = (e) =>  {
        setFormData({title: e.target.value});
      }

    return(
        <form onSubmit={handleSubmit()}>
        <input type="text" name="title" value={formData.title} onChange={handleChange}/>
        <input type="file" name="image" ref={fileInput} accept="image/*"/>
        </form>
    )
}

export default Post