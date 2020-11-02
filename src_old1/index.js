import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
let im1 = <h1>HELLO</h1>;
function blog_clicked(something)
{
  window.alert("Blog clicked!");
  window.alert(something);
}
function but_clicked(something)
{
  window.alert(something.innerHTML);
  
}

class BlogPost extends React.Component{
  render()
  {
    let blog_cont = (
      <div id="blog_div" onClick= {e => blog_clicked(e.target)}>
        <h4 id="h4_id">{this.props.caption}</h4>
        <p id ="h4_id"><br/>author : {this.props.author}<br/><br/>
           {this.props.subj}
          </p>
      </div>
    );
    return blog_cont;
  }
}

class Blogs extends React.Component{
  render()
  {
    let retu = (
      <div id="cent_div">
      <BlogPost caption="This is the first blog in this website." author="DMT" subj="This is the first post in this website. Lol this is actually working. Let's see how this goes.Lol let's add some matter so that we can see how the area is adjusted in order to display."/>
      <BlogPost caption="This is the second blog in this website." author="Nene" subj="This is the first post in this website. Lol this is actually working. Let's see how this goes.Lol let's add some matter so that we can see how the area is adjusted in order to display."/>
      <BlogPost caption="This is the third blog in this website." author="Malli Nene" subj="This is the first post in this website. Lol this is actually working. Let's see how this goes.Lol let's add some matter so that we can see how the area is adjusted in order to display."/>
      <BlogPost caption="This is the fourth blog in this website." author="Malli Malli Nene" subj="This is the first post in this website. Lol this is actually working. Let's see how this goes.Lol let's add some matter so that we can see how the area is adjusted in order to display."/>
      <BlogPost caption="This is the first blog in this website." author="DMT" subj="This is the first post in this website. Lol this is actually working. Let's see how this goes.Lol let's add some matter so that we can see how the area is adjusted in order to display."/>
      <BlogPost caption="This is the first blog in this website." author="DMT" subj="This is the first post in this website. Lol this is actually working. Let's see how this goes.Lol let's add some matter so that we can see how the area is adjusted in order to display."/>
      <BlogPost caption="This is the first blog in this website." author="DMT" subj="This is the first post in this website. Lol this is actually working. Let's see how this goes.Lol let's add some matter so that we can see how the area is adjusted in order to display."/>
      <BlogPost caption="This is the first blog in this website." author="DMT" subj="This is the first post in this website. Lol this is actually working. Let's see how this goes.Lol let's add some matter so that we can see how the area is adjusted in order to display."/>
      <BlogPost caption="This is the first blog in this website." author="DMT" subj="This is the first post in this website. Lol this is actually working. Let's see how this goes.Lol let's add some matter so that we can see how the area is adjusted in order to display."/>
      <BlogPost caption="This is the first blog in this website." author="DMT" subj="This is the first post in this website. Lol this is actually working. Let's see how this goes.Lol let's add some matter so that we can see how the area is adjusted in order to display."/>
      <BlogPost caption="This is the first blog in this website." author="DMT" subj="This is the first post in this website. Lol this is actually working. Let's see how this goes.Lol let's add some matter so that we can see how the area is adjusted in order to display."/>
      
    </div>
    );
    return retu
  }
}

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

class Blog_Button extends React.Component{
  render()
  {
    let but_cont = (
      <div>
        <button onClick= {e => but_clicked(e.target)} id="but">{this.props.name}</button>
      </div>
    );
    return but_cont;
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
let signed_in = true;

im1 = (
  <div id="main_div">
    <center><h1>BLOG THINGIE</h1></center>
    <Left_Nav />
    <Right_Nav_Log />
    <Blogs />
  </div>
);

let im2 = (
  <div id="main_div">
    <center><h1>BLOG THINGIE</h1></center>
    <Left_Nav />
    <Right_Nav />
    <Blogs />
  </div>
);


if(signed_in==true){
ReactDOM.render(
  im1,
  document.getElementById('cont')
);
}
else{
  ReactDOM.render(
  im2,
  document.getElementById('cont')
);
}
