const colors = {
    maif : "red",
    school: "green",
    personnel :"#F4BE4C",
    canope :"#006167"
  }

export const TECHNOLOGIES = [
    {
      name:"ReactJS",
      svgUrl:["assets/icons/react.svg"],
      where:[
        {name:"MAIF", color:colors.maif},
        {name:"PERSONNEL", color:colors.personnel}
      ],
      level:4,
      comment: ""
    }, 
    {
      name:"Spring Boot",
      svgUrl:["assets/icons/spring.svg"],
      where:[
        {name:"MAIF", color:colors.maif},
        {name:"PERSONNEL", color:colors.personnel},
        {name:"SCHOOL", color:colors.school}
      ],
      level:4,
      xp: "4 years"
    },
    {
      name:"Java",
      svgUrl:["assets/icons/java.svg"],
      where:[
        {name:"MAIF", color:colors.maif},
        {name:"PERSONNEL", color:colors.personnel},
        {name:"SCHOOL", color:colors.school}
      ],
      level:4,
      comment: ""
    },
    {
      name:"CI/CD",
      svgUrl:["assets/icons/jenkins.svg", "assets/icons/github.svg"], //github, jenkins
      where:[
        {name:"MAIF", color:colors.maif},
        {name:"PERSONNEL", color:colors.personnel},
        {name:"SCHOOL", color:colors.school}
      ],
      level:3,
      comment: ""
    },
    {
      name:"Mobile",
      svgUrl:["assets/icons/react-native.svg"],
      where:[
        {name:"PERSONNEL", color:colors.personnel}
      ],
      level:1,
      comment: "Learning in progress"
    }, 
    {
      name:"Symfony 3",
      svgUrl:["assets/icons/php.svg","assets/icons/symfony.svg"],
      where:[
        {name :"CANOPE", color:colors.canope}
      ],
      level:2,
      comment: ""
    }
  ]
