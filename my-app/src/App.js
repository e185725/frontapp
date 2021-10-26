import logo from './logo.svg';
import './App.css';

function App() {

  function clear(){
    var textForm = document.getElementById("form1");
    textForm.value = '';
  	var textareaForm = document.getElementById("form2");
    textareaForm.value = '';
  }

  return (
    <div>
    <form 
      enctype="multipart/form-data" 
      method="post" 
      action="http://127.0.0.1:8000/imagePost/Imageapi/" 
      target="nosend"
      >
      <input type="text" name="title" id="form1"/>
      <input type="file" name="picture" id="form2"/>
      <input type="submit" value="Upload" />
    </form> 

    <iframe name="nosend" scrolling="no" frameborder="no"></iframe>
    </div>

  );
}

export default App;
