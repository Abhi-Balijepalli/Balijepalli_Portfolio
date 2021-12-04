import React, {Button, Component } from 'react';

class Resume extends Component {

  getRandomColor() {
    var items = ["#CF995B"];
    var color = items[Math.floor(Math.random() * items.length)];
    return color;
  }
  
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>|</span> <em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      
      var work = this.props.data.work.map(function(work){
        var techStack = work.tech.join(' • ');
        return <div key={work.company}><h3><a href={work.link} className="work-link">{work.company}</a></h3>
            <p className="info">{work.title} <span>|</span> <em className="date">{work.years}</em></p>
            <b class="tech">{techStack}</b>
            <p>{work.description}</p>
        </div>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">
         <div className="tow columns header-col">
            <h1><span>Work</span></h1>
         </div>
         <div className="nine columns main-col">
          {work}
        </div>
    </div>
   </section>
    );
  }
}

export default Resume;
