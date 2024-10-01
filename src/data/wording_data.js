//NAVBAR && TITLE
export const getHomeWording = (isUkLangage) => {
    if(isUkLangage){
        return "Home"
    }
    return "Accueil"
}
export const getStacksWording = (isUkLangage) => {
    if(isUkLangage){
        return "Stacks"
    }
    return "Technos"
}
export const getProjectsWording = (isUkLangage) => {
    if(isUkLangage){
        return "Projects"
    }
    return "Projets"
}

export const getExperiencesWording = (isUkLangage) => {
    if(isUkLangage){
        return "Experiences"
    }
    return "Expériences"
}

//HERO
export const getFirstPresentationSentenceHero = (isUkLangage) => {
    if(isUkLangage){
        return <p><h1>Hi, I am <b>Marvin</b></h1></p>
    }
    return <p><h1>Salut, c'est <b>Marvin</b></h1></p>
}

export const getSecondPresentationSentenceHero = (isUkLangage) => {
    if(isUkLangage){
        return <p><h1> a <b>fullstack</b> and <b>smiling</b> 😊 developer.</h1></p>
    }
    return <p><h1> je suis un developpeur <b> souriant </b> 😊 et <b>fullstack</b> </h1></p>
}

//STACKS
export const getSchoolWording = (isUkLangage) => {
    if(isUkLangage){
        return "School"
    }
    return "Ecole"
}