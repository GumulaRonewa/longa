import React from "react";
import "./Post.css";
import PhotoIcon from '@material-ui/icons/Photo';
import MovieIcon from '@material-ui/icons/Movie';
import IconButton from '@material-ui/core/IconButton';
import axios from "axios";

function  Post(props){
            const [text, setText] = React.useState('');
  const [file, setfile] = React.useState(null);
  const [fileV, setfileV] = React.useState(null);
  const [butn, setBtn] = React.useState("Post");

  const handleText =(e)=>{
            setText(e.target.value)
          }
            const handlePost = () => {
    const form = new FormData();
       setBtn("Posting")

    form.append("name", localStorage.getItem("name"));
    form.append("surname", localStorage.getItem("surname"));
    form.append("text", text);
     var send= file===null ?fileV:file;
        form.append("file", send);

    axios({
      method: "POST",
      url: `https://longa-money.herokuapp.com/api/feed`, // First page at 0
      data: form,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      console.log(res);
      setText("");
          setBtn("Post")

      setfile(null);
      setfileV(null);
    });
  };
   const handleFile = (e) => {
    setfile(e.target.files[0]);
   
  };const handleFileV = (e) => {
    setfileV(e.target.files[0]);
   
  };
  return (
    <div class="panel">

      <form>
        <textarea
          placeholder="Whats in your mind today?"
          cols="10"
          value={text}
          onChange={handleText}
          class="form-control input-lg p-text-area"
        ></textarea>
      </form>
      <footer class="panel-footer">
        <button dis onClick={handlePost} class="buttonpost btn-warning pull-right">{butn}</button>
        <ul class="nav nav-pills">

          <IconButton>
          <input type="file"
          onChange={handleFile}
          accept="image/x-png,image/gif,image/jpeg"
          style={{ width:40,color:'transparent',backgroundColor:"transparent",opacity:0 }}
          id="customFile" />
            <PhotoIcon style={{marginLeft:-25}} />
            
          </IconButton>

          <IconButton>
            <MovieIcon style={{marginLeft:25}} />
            <input type="file"
          onChange={handleFileV}
          accept="video/mp4,video/x-m4v,video/*"
          style={{ width:40,marginLeft:-25,color:'transparent',backgroundColor:"transparent",opacity:0 }}
          id="customFile" />
          </IconButton>
           {file &&
          <img src={URL.createObjectURL(file)} style={{width:40,height:40}} alt={'r'} />
        }
        {fileV &&
          <video style={{width:80,height:40}} controls>
            <source src={URL.createObjectURL(fileV)} id="video_here" type="video/mp4,video/x-m4v,video/*"
              />
        
          </video>
        }
        </ul>
       
      </footer>
    </div>
  );
};

export default Post;
