const logotext = "FahlmanArchitecture";
const meta = {
    title: "Alva Fahlman     ",
    description: "I’m Alva from Skeå",
};
import alva from "./assets/images/alva.jpeg";
const introdata = {
    
    title: "I'm Alva",
    animated: {
        first: "I love Architecture",
        second: "hoho",
        third: "hihi",
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum",
    your_img_url: alva,
};

const dataabout = {
    title: "about my self",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [{
        jobtitle: "Designsektionen",
        where: "...",
        date: "...",
    },
    {
        jobtitle: "Svensk markservice",
        where: "...",
        date: "...",
    },
    {
        jobtitle: "XXL",
        where: "...",
        date: "...",
    },
];

const skills = [{
        name: "Sketchup",
        value: 90,
    },
    {
        name: "Adobe",
        value: 85,
    },
  
];

const services = [{
        title: "Japan",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Sydkorea",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Guldtorget",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];
import korea from "./assets/images/korea.jpeg";
const dataportfolio = [{
        img: korea,
        description: "Guldtorget",
        link: "/guldtorget",
    },
    {
        img: korea,
        description: "Japan",
        link: "/japan",
    },
    {
        img: korea,
        description: "Sydkorea",
        link: "/sydkorea",
    },
 


];

const contactConfig = {

    description: "Say hi! I'd love to chat about architecture, design, or any exciting ideas you have.",
    YOUR_EMAIL: "fahlmanalva@gmail.com",
    YOUR_FONE: "+46777",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {

   
    linkedin: "https://www.linkedin.com/in/alva-fahlman/?originalSubdomain=se",
    instagram: "https://www.instagram.com/fahlmanarchitecture/",
   
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};