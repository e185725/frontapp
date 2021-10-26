
import React,{useState} from 'react';

const Form3 = () => {

    const fetchForm = document.querySelector('.fetchForm');
    const btn = document.querySelector('.btn');
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    if (!fetchForm){ return false;}
    const postFetch = () => {
        let formData = new FormData(fetchForm);
        for (let value of formData.entries()) {
            console.log(value);
        }

        fetch(url, {
            method: 'POST',
            body: formData
        }).then((response) => {
            if(!response.ok) {
                console.log('error!');
            } 
            console.log('ok!');
            return response.json();
        }).then((data)  => {
            console.log(data);
        }).catch((error) => {
            console.log(error);
        });
    };

    btn.addEventListener('click', postFetch, false);


    return(
    <div>

        <form method="post" action="https://jsonplaceholder.typicode.com/posts/">
            <input type="text" name="name" size="30" maxlength="30"/>
            <input type="submit" value="送信"/>
        </form>
        <p>Fetchで答える</p>
        <form class="fetchForm">
            <input type="text" name="name" size="30" maxlength="30" class="name"/>
            <input type="button" value="送信" class="btn"/>      
        </form>
    </div>
    )
}

export default Form3