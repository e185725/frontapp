
import React from 'react';

const Form = () => {

    return(
    <div>
    <h1> Form1 </h1>

    <form 
    enctype="multipart/form-data" 
    method="post" 
    action="http://127.0.0.1:8000/imagePost/Imageapi/" 
    target="nosend"
        >
    <input type="text" name="title" />
    <input type="file" name="picture" />
    <input type="submit" value="Upload" />
    </form> 

    <iframe name="nosend" scrolling="no" frameborder="no"></iframe>
    </div>
    )
}

export default Form