import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Projects from './Components/Projects';


// import Footer from './Components/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(){
    super();
     this.state={
      Name: 'BAYAN AL-RIYATI',
      Job: 'Full Stack Developer',
      About:'I am keen to develop education and knowledge, and rely on myself for a lot of development and learning through research and self-learning, and I have teamwork skills.',
      Age: '27' ,
      Phone_1: '0786324604' ,
      Language : 'Arabic, English',
      Email : 'Bayanalriyati95@Gmail.Com',
      data_1 : '2022',
      data_2 : '2022',
      data_3 : '2022',
      Univ_1: 'Orange Coding Academy',
      Univ_2 : 'Al-Balqa Applied University',
      Univ_3 : 'ALshamlah Secondary School',
      Class_1 : 'Full Stack Developer' ,
      Class_2 : 'Bachelor Of Accounting' ,
      Class_3 : 'Scientific Stream' ,
      Skill_1: 'Github',
      Skill_2: 'Web Design',
      Skill_3: 'HTML',
      Skill_4: 'CSS',
      Skill_5: 'Bootstrap',
      Skill_6: 'Java Script ',
      Skill_7: 'Wordpress',
      Skill_8: 'PHP',
      Skill_9: 'Laravel',
      Skill_10: 'React',
      NamePro_1:'Digital Clock',
      Link_1:'https://github.com/BayanALriyati/Digital-Clock',
      NamePro_2: 'Portfolio Website',
      Link_2:'https://github.com/BayanALriyati/CV',
      NamePro_3: 'checker',
      Link_3:'https://bayanalriyati.github.io/checker/',
      NamePro_4: 'The Best GIFT',
      Link_4:'https://github.com/BayanALriyati/MasterPiece-frontEnd',
      NamePro_5:'The Best GIFT',
      Link_5:'https://github.com/BayanALriyati/MasterPiece-BackEnd',
      NamePro_6: 'FeLux Website',
      Link_6:'https://github.com/BayanALriyati/FeLuxWebsite',
     }
//      Digital Clock 1
// Portfolio Website 2
// checker 3
// The Best GIFT(frontEnd) 4
// The Best GIFT(backEnd) 5
// FeLux Website 6
// Delicious Food 7
// https://github.com/BayanALriyati/Digital-Clock
// https://github.com/BayanALriyati/CV
// https://bayanalriyati.github.io/checker/
// https://github.com/BayanALriyati/MasterPiece-frontEnd
// https://github.com/BayanALriyati/project-4
// https://github.com/BayanALriyati/FeLuxWebsite
// https://github.com/BayanALriyati/MasterPiece-BackEnd
  };
  
  render(){
// console.log(this.state.Name);
     return(
      <div>
        <Header/>
        <Home Name={this.state.Name} Job={this.state.Job}  />
        <About 
          Name={this.state.Name} About={this.state.About} Age={this.state.Age} 
          Phone_1={this.state.Phone_1} Language={this.state.Language} Email={this.state.Email}
        />
        <Experience 
          data_1={this.state.data_1} data_2={this.state.data_2} data_3={this.state.data_3} 
          Univ_1={this.state.Univ_1} Univ_2={this.state.Univ_2} Univ_3={this.state.Univ_3}
          Class_1={this.state.Class_1} Class_2={this.state.Class_2} Class_3={this.state.Class_3}
        />
        <Skills
          Skill_1={this.state.Skill_1} Skill_2={this.state.Skill_2} Skill_3={this.state.Skill_3} 
          Skill_4={this.state.Skill_4} Skill_5={this.state.Skill_5} Skill_6={this.state.Skill_6} Skill_7={this.state.Skill_7}
          Skill_8={this.state.Skill_8} Skill_9={this.state.Skill_9} Skill_10={this.state.Skill_10}
        />
        <Projects
          NamePro_1={this.state.NamePro_1} NamePro_2={this.state.NamePro_2} NamePro_3={this.state.NamePro_3} NamePro_4={this.state.NamePro_4} 
          Link_1={this.state.Link_1} Link_2={this.state.Link_2} Link_3={this.state.Link_3} Link_4={this.state.Link_4} 
        />
      </div>
     )


  }
}

export default App;