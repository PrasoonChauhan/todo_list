let url = 'http://universities.hipolabs.com/search?name=';

let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");

button.addEventListener("click",async ()=>{
    ul.innerText="";
    let country = input.value;
   let colleges = await universities(country);
   console.log(colleges);
   for(college of colleges)
   {
    let li = document.createElement("li");
    li.innerText = college.name;
    ul.append(li);
   }
    
})


button.addEventListener("click",async()=>{
  
    
})

async function universities(country)
{
   try {
    let fetchedURL = await axios.get(url+country);
    // console.log(fetchedURL.data);
    return fetchedURL.data
    
    
    }
    catch(e)
    {
        console.log("error is ",e);
    }
}
