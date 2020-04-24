const inquirer = require("inquirer")
const fs = require("fs")

const createTag = (tagName, str) => {
  return `<${tagName}>${str}</${tagName}>`
}

inquirer.prompt([
  {
    type: "input",
    message: "What is your name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is your location?",
    name: "location"
  },
  {
    type: "input",
    message: "Write a short bio.",
    name: "bio"
  },
  {
    type: "input",
    message: "What is your LinkedIn URL?",
    name: "linkedin"
  },
  {
    type: "input",
    message: "What is your GitHub URL?",
    name: "github"
  }
  //object descructuring 
]).then ( ({name, location, bio, linkedin, github}) => {
  let html = `
    <html>
    <head>
      <title>${name}</title>
    </head>
    <body>  
  `;

  const nameInfo = createTag("h1", `MiniProfilefor ${name}`)

  const locationInfo = createTag("h2", `Location: ${location}`) 

  const bioInfo = createTag("p", bio)

  const linkedinURL = createTag("li", `<a href="${linkedin}">Linkedin Profile</a>`)

  const githubURL = createTag("li", `<a href="${github}">GitHub Profile</a>`)

  const profileList = createTag("ul", "Check Me Out" + linkedinURL + githubURL)

  html += nameInfo + locationInfo + bioInfo + profileList + `
  </body>
        </html>
  `;
  // console.log(html)
  fs.writeFile("index.html", html, err => {
    if(err){
      return console.log(err)
    }

    console.log("Success!")
  })  
})