import React, { useContext } from "react";
import "./Skills.css";
import { themeContext } from "../../Context";
import SkillCard from "./SkillCard";


const Skills = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  // const transition = {
  //   duration: 1,
  //   type: "spring",
  // };

  return (
    <div className="skills" id="skills">
      {/* top  */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>skills</span>

        <a href="https://drive.google.com/file/d/1Xuj-DiXOcgdp-1R_gQo0bSremKxLsSz8/view?usp=sharing" target="blank">
          <button className="button s-button"> View Resume </button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* bottom */}

      <div className="skills-list">
        <div className="list">
        <span>Languages</span>
          <div className="sec">
            <SkillCard url='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png' text='HTML' />
            <SkillCard url='https://cdn.svgporn.com/logos/css-3.svg' text='CSS' />
            <SkillCard url="https://cdn.svgporn.com/logos/javascript.svg" text='JavaScript' />
            <SkillCard url='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' text='React' />
            <SkillCard url='https://cdn.svgporn.com/logos/redux.svg' text="Redux" />
            <SkillCard url='https://cdn.svgporn.com/logos/c.svg' text="C" />
            <SkillCard url='https://cdn.svgporn.com/logos/c-plusplus.svg' text="C++" />
            <SkillCard url='https://cdn.svgporn.com/logos/mongodb.svg' text="MongoDb" />
            <SkillCard url='https://cdn.svgporn.com/logos/mysql.svg' text="SQL" />
            <SkillCard url='https://cdn.svgporn.com/logos/nodejs.svg' text="Node" />
            <SkillCard url='https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png' text='Bootstrap' /> 
          </div>
        </div>
        <div className="list">
        <span>Tools I Use</span>
          <div className="sec">
            <SkillCard url='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png' text='VS Code' />
            <SkillCard url='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' text='Git' />
            <SkillCard url="https://miro.medium.com/max/512/1*fVBL9mtLJmHIH6YpU7WvHQ.png" text="Postman" />
            <SkillCard url="https://images.ctfassets.net/6qz05ishztgm/6Y4GkgE5SePkfk0zs8qblu/ccaf51cc7c2e7f0e2a525ba1be9082b7/npm-logo.webp" text='NPM'/>
            <SkillCard url='https://idroot.us/wp-content/uploads/2018/09/yarn-logo.png' text='Yarn' />
            <SkillCard url='https://cdn-icons-png.flaticon.com/512/25/25231.png' text="GitHub" />
            <SkillCard url="https://www.apkmirror.com/wp-content/uploads/2019/01/5c5b88516489f.png" text='Canva' />
            <SkillCard url="https://www.netlify.com/v3/img/components/logomark.png" text="Netlify" />
            <SkillCard url='https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg' text='Chakra-UI' />
            <SkillCard url='https://mui.com/static/logo.png' text='Material-UI' />
            <SkillCard url="https://static.vecteezy.com/system/resources/previews/001/200/668/original/triangle-rounded-png.png" text="Vercel" />
            <SkillCard url="https://uploads.sitepoint.com/wp-content/uploads/2016/04/1461122387heroku-logo.jpg" text="Heroku" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
