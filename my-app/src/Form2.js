
import React,{useState} from 'react';
import axios from 'axios';
const Form2 = () => {
    
    const [picture,setPicture] = useState()
    const [title,setTitle] = useState()
    async function handleForm(e) {
        e.preventDefault()
        //console.log(e.target.picture.files[0])

        setPicture(e.target.picture.files[0])
        setTitle(e.target.title.value)

        const data = new FormData();

        data.append("title",e.target.title.value);
        
        data.append("picture",e.target.picture.files[0]);
        const config = {
            headers: {
              
            }
        }
        await axios.post(
            "http://127.0.0.1:8000/imagePost/Imageapi/",
            data,
            config,
        )
    }

    return(
    <div>
        <form 
        id="form1"
        enctype="multipart/form-data" 
        method="post" 
        onSubmit={handleForm}
        >
            
        <input type="text" name="title" />
        <input type="file" name="picture" id="input"/>
        <input type="submit" value="Upload2" />
        </form> 

    </div>
    )
}

export default Form2