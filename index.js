function introduction(name="Josh") {
    return `Hi, my name is ${name}.`
}
function introductionWithLanguage(name="Josh", language="Ember.js") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

const name = "Gracie" 
function introductionWithLanguageOptional(name, language="JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}