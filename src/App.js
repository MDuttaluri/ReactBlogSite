import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import './temp_blog.json';

function orni(){
  alert("ACHA");
}




let im1 = <h1>HELLO</h1>;
function blog_clicked(something)
{
  window.alert("Blog clicked!");
  //window.alert(something);
}


class BlogPost extends React.Component{
  render()
  {
    let blog_cont = (
      <div id="blog_div" onClick= {e => blog_clicked(e.target)}>
        <h4 id="h4_id">{this.props.jobj.caption}</h4>
        <p id ="h4_id"><br/>author : {this.props.jobj.author}<br/><br/>
           {this.props.jobj.subj}
          </p>
      </div>
    );
    return blog_cont;
  }
}
var json_obj = {caption : "This is the json obj caption." , author : "JSON", subj:"This is the subj retrieved from the JSON file."}
var test_blog = {caption:"This is the first blog in this website." ,author:"DMT", subj:"This is the first post in this website. Lol this is actually working. Lets see how this goes.Lol lets add some matter so that we can see how the area is adjusted in order to display."}
var blog_list = (require('./data/blogs.json')).blogs;
//alert(blog_list.length);

let rets = [];

let loaded_blogs = 0;


class Left_Nav extends React.Component{
  render()
  {
    let ln = (
      <div id="left_div">
      <Blog_Button name="Home" />
      <BlogButSpace />
      <Blog_Button name="Categories" />
      <BlogButSpace />
      <Blog_Button name="Contributers" />
      <BlogButSpace />
      <Blog_Button name="About" />
    </div>
    );
    return ln;
  }
}




class Right_Nav_Log extends React.Component{
  render()
  {
    let rn = (
    <div id="right_div">
      <Blog_Button name="Profile" />
      <BlogButSpace />
      <Blog_Button name="Post a Blog" />
      <BlogButSpace />
      <Blog_Button name="Fav. Blogs" />
      <BlogButSpace />
      <Blog_Button name="Sign Out" />
    </div>
    );
    return rn;
  }
}

class Right_Nav extends React.Component{
  render()
  {
    let rn = (
    <div id="right_div">
      <Blog_Button name="Login/Sign Up" />
      <BlogButSpace />
    </div>
    );
    return rn;
  }
}


function BlogButSpace(props){
  return <div id="ButSpan"></div>
}

let uname = "DMT";

class App extends React.Component{
  constructor(props){
    super(props);
    this.App_element = [];
    this.state= {
    left : <Left_Nav />,
    right : <Right_Nav_Log />,
    mainu : <Blogs />,
    header : <center><h1>BLOG THINGIE</h1></center>};
    this.load_more_blogs = this.load_more_blogs.bind(this);
  }
  load_more_blogs(){
    let load_next=loaded_blogs+1;
    loaded_blogs = 0;
    let tot_blogs = blog_list.length;
    let i = 0;
    let mi = 0;
    rets = [];
      if(load_next <= blog_list.length){
        mi = load_next;
      }
      else{
        mi = blog_list.length;
      }
    for( i = 0;i<mi;i++){
      rets.push(<BlogPost jobj={blog_list[i]}/>);
      loaded_blogs++;
    } 
    this.App_element = (
      <div>
      {this.state.header},
      {this.state.left},
      {this.state.right},
      <div id="cent_div">
        
        {rets.map((ob)=>ob)}
        
      </div>
      <center>Loaded : {loaded_blogs} of {tot_blogs} blogs.</center>
        {loaded_blogs < blog_list.length && <center><button id="load_but" onClick={()=>this.load_more_blogs()}>Load more</button></center>}
      </div>
    );
      ReactDOM.render(this.App_element,document.getElementById('root'));
    }
  get_home(){
    this.App_element = ( 
      <div id="main_div">
       {this.state.header},
       {this.state.left},
       {this.state.right}
       {this.state.mainu},
     </div>);
    ReactDOM.render(this.App_element,document.getElementById('root'));
  }
  render(){
    //alert("RENDER CALLED! ");
   this.App_element = ( 
   <div id="main_div">
    {this.state.header},
    {this.state.left},
    {this.state.right}
    {this.state.mainu},
  </div>
  );
    //return home_jsx;
    return this.App_element;
  }
}




class Blog_Button extends App{
  render()
  {
    let but_cont = (
      <div>
        <button onClick= {e => this.but_clicked(e.target)} id="but">{this.props.name}</button>
      </div>
    );
    return but_cont;
  }
  post_a_blog(){
    let ce = document.getElementById("cent_div");
    let stream = (
      <div>
      {this.state.header},
      {this.state.left},
      {this.state.right},
      <center id="center_form">
        <h2>Post a blog.</h2>
        <p id="cent_form_p">Caption : </p> <input id='blg_cap' type="text"></input> <br/> <br/>
        <p id="cent_form_p">Author : </p><input id='author' type="text" value={uname}></input> <br/><br/>
        <p id="cent_form_p">Subject : </p><textarea rows="5" cols="22"></textarea><br/><br/>
        <button id="form_but" onClick={e=>this.save_blog(e)}>POST</button>

        </center>
      </div> 
    );
    ReactDOM.render(stream,document.getElementById('root'))
  }
  save_blog(){
    alert(document.getElementById('blg_cap').innerHTML);
    alert(document.getElementById('author').innerHTML);
  }
  but_clicked(something)
  {
    
    if(something.innerHTML == "Post a Blog"){
      this.post_a_blog();
      return;
    }
    if(something.innerHTML == "Home"){
      this.get_home();
    }    
  }
}

class Blogs extends App{
  constructor(props){
    super(props)
    this.load_more_blogs = this.load_more_blogs.bind(this);
  }
  render()
  {
  //alert('shhhhh');
   let tot_blogs = blog_list.length;
   loaded_blogs = 0;
   rets = [];
   let load_next = 1;
   let i = 0;
   let mi = 0;
    if(load_next <= blog_list.length){
      mi = load_next;
    }
    else{
      mi = blog_list.length;
    }
    for( i = 0;i<mi;i++){
      rets.push(<BlogPost jobj={blog_list[i]}/>);
      loaded_blogs++;
    } 
    //loaded_blogs+=mi;
    //alert("init rend : "+loaded_blogs);
    rets = (
      <div id="cent_div">
        {rets.map((ob)=>ob)}
        <center>Loaded : {loaded_blogs} of {tot_blogs} blogs.</center>
        {loaded_blogs < blog_list.length && <center><button id="load_but" onClick={()=>this.load_more_blogs()}>Load more</button></center>}
        
      </div>
    );
    //super.setState({mainu:rets});
    

    
    return rets;   
  
  } 
}



















export default App;
