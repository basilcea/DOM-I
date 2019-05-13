const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navlinks = document.querySelector('nav')
let allLink = navlinks.children;
 [...allLink].forEach((a, index) => {
   return(
     // task 3
     a.style.color= 'green',
     a.innerText= siteContent.nav[`nav-item-${index+1}`])
    }
  )
  //task 3
  navlinks.appendChild(document.createElement('a'))
  allLink[6].innerText='Follow Us';
  allLink[6].style.color='green'
  navlinks.prepend(document.createElement('a'));
  allLink[0].innerText ='Welcome';
  allLink[0].style.color='green'



let headingDiv = document.getElementsByClassName('cta-text')[0]
let h1= headingDiv.querySelector('h1')
let array = siteContent.cta.h1.split(' ')
let br =document.createElement('br')
let abr =document.createElement('br')
console.log(array)
h1.textContent +=array[0]
h1.appendChild(br)
h1.appendChild(document.createTextNode(array[1]))
h1.appendChild(abr)
h1.appendChild(document.createTextNode(array[2]))
h1.onmouseover =()=>{
  h1.style.fontSize ='80px'
  h1.style.color='green'
}
let headerButton = headingDiv.querySelector('button')
headerButton.innerText= siteContent.cta["button"]


let headerImage = document.getElementById('cta-img')
headerImage.src = siteContent.cta["img-src"]
//stretch 

headerButton.onclick =()=>{
  h1.textContent='DOM is Starting . . .'
  headerButton.innerText ='Welcome to DOM'
  headerImage.style.display='none';
}


let textDivs = document.querySelectorAll('.text-content')
let features = textDivs[0];
let about = textDivs[1];
let services = textDivs[2];
let product = textDivs[3];
let vision = textDivs[4]

document.getElementById('middle-img').src =siteContent['main-content']['middle-img-src'];

const inputValue = (div, text) =>{ 
  div.querySelector('h4').textContent = siteContent["main-content"][`${text}-h4`]
  div.querySelector('p').textContent = siteContent["main-content"][`${text}-content`]
}
inputValue(features,'features');
inputValue(about, 'about');
inputValue(services,'services');
inputValue(product,'product');
inputValue(vision,'vision');

const contact = document.getElementsByClassName('contact')[0]
contact.querySelector('h4').textContent = siteContent["contact"]["contact-h4"]
const p = contact.querySelectorAll('p')
console.log(p)
p[0].textContent = siteContent["contact"]['address'].substring(0,19);
p[0].appendChild(document.createElement('br'))
p[0].appendChild(document.createTextNode(siteContent["contact"]['address'].substring(19)))

p[1].textContent = siteContent["contact"]['phone'];
p[2].textContent = siteContent["contact"]['email'];

const footer =document.querySelector('footer')
footer.querySelector('p').textContent = siteContent["footer"]["copyright"]
