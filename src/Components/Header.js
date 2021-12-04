import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";

class Header extends Component {
  render() {

    if(this.props.data){
       var github = this.props.data.github;
       var linkedin = this.props.data.linkedin;
       var name = this.props.data.name;
       var description= this.props.data.description;
    }

    return (
      <header id="home">
      <ParticlesBg color = "#130037" num= {50} type="thick" bg={true} />

      <div className="row banner">

         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}.</h3>
            <hr />
            <ul className="social">
               <a href={linkedin} className="button btn linkedin-btn"><i className="fa fa-linkedin"></i>Linkedin</a>
               <a href={github} className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
