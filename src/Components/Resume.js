import React, { Component } from 'react';

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
        return <div key={work.company}><h3><a href={work.link} className="work-link">{work.company}</a></h3>
            <p className="info">{work.title} <span>|</span> <em className="date">{work.years}</em></p>
            <b className="tech">Tech Stack: <b>{work.tech}</b></b>
            <p>{work.description}</p>
        </div>
      })

      var skills = this.props.data.skills.map((skills)=>{
        var className = 'bar-expand '+skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{width:skills.level, backgroundColor:this.getRandomColor()}}className={className}></span><em>{skills.name}</em>
          </li>
        )
      })

      var cloud = this.props.data.cloud.map((cloud)=>{
        var className = 'bar-expand '+cloud.name.toLowerCase();
        return (
          <li key={cloud.name}>
            <span style={{width:cloud.level, backgroundColor:this.getRandomColor()}}className={className}></span><em>{cloud.name}</em>
          </li>
        )
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

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>

      {/* <div className="row skill">
         <div className="three columns header-col">
            <h1><span>Programming</span></h1>
            <span>Skills</span>
         </div>
         <div className="nine columns main-col">
         <p></p>
				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div> */}

      {/* <div className="row cloud">
         <div className="three columns header-col">
            <h1><span>Software Tools</span></h1>
            <span>Familiarity</span> 
         </div>
         <div className="nine columns main-col">
         <p></p>
				<div className="bars">
				   <ul className="skills">
					  {cloud}
					</ul>
				</div>
			</div>
      </div> */}
   </section>
    );
  }
}

export default Resume;
