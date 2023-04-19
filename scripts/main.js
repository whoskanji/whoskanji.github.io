const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Starting server...");
  await delay(2400);
  createText("Connected to server! Continuing...");
  await delay(700);
  createText("You can run several commands:");
  createCode("help", "See all commands.");
  await delay(500);
  new_line();
}


function new_line(){
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/kanji";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

function show_image(src, width, height, alt) {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;

  // This next line will just add it to the <body> tag
  document.body.appendChild(img);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "help" || value === "Help"){
    trueValue(value);
    createCode("repo", "Add my repository to your package manager.");
    createCode("whoami", "Who I am and what I do.");
    createCode("social -a", "All my social networks.");
    createCode("projects", "See my projects.");
    createCode("clear", "Clean the terminal.");
  }
  else if(value === "jamal" || value === "Jamal"){
    // display style/img/jamal.jpg image
    show_image('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMVknAdxevHnpRSzjhLM0APQspYIkCS-61ZQDu5KiEXO26YMNKY0ZZNSNhw2xrAnuAErk&usqp=CAU', 
                200, 
                200);
    //show_image('https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/27ab1e89321f3849a5a1cbac642f791a~c5_720x720.jpeg?x-expires=1670324400&x-signature=XXTto08wEfZGUet7T5mbnf1YkBc%3D');
  }
  else if(value === "projects" || value === "Projects"){
    trueValue(value);
    createText("Here are my projects:");
    createText("iota - A Snapchat tweak that brings several features to the user that just boost the experience.");
    createText("null - The library that <span class='blue'>iota</span> uses to remain <span class='green'>UNDETECTED</span>!")
    createText("I will add more projects soon!")
  }
  else if(value === "repo" || value === "Repo"){
    trueValue(value);
    createText("<a href='cydia://url/https://cydia.saurik.com/api/share#?source=https://objcmsgsend.dev/'>Add to Cydia</a>")
    createText("<a href='sileo://source/https://objcmsgsend.dev/'>Add to Sileo</a>")
    createText("<a href='zbra://sources/add/https://objcmsgsend.dev/'>Add to Zebra</a>")
    createText("<a href='installer://add/https://objcmsgsend.dev/'>Add to Installer</a>")
  }
  else if(value === "whoami" || value === "Whoami"){
    trueValue(value);
    createText("Hello, I am Kanji! ;)")
    createText("I am a self-taught developer currently focused on <span class='blue'>Python</span>, <span class='blue'>Objective C</span>, and <span class='blue'>C++</span>.")
  }
  else if(value === "social -a" || value === "Social -a"){
    trueValue(value);
    createText("<a href='https://github.com/whoskanji' target='_blank'><i class='fab fa-github white'></i> Github</a>")
    createText("<a href='https://twitter.com/kanjishere' target='_blank'><i class='fab fa-twitter white'></i> Twitter</a>")
    // Discord
    createText("<a href='https://discord.gg/kanjishere' target='_blank'><i class='fab fa-discord white'></i> Discord</a>")
  }
  else if(value === "social" || value === "Social"){
    trueValue(value);
    createText("Didn't you mean: social -a?")
  }
  
  else if(value === "clear" || value === "Clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML = text;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();
