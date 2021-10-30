const jokes = document.querySelector("#joke")
const btnjokes = document.querySelector("#btn")

const generateJokes= async ()=>{
    try{
            const setHeader={
                headers:{
                    Accept: "application/json"
                }
            }
            const res= await fetch("https://icanhazdadjoke.com",setHeader)
            const data= await res.json()
            jokes.innerHTML = data.joke
        }catch(error){
            console.log(`The error is ${error}`);
        }
}
btnjokes.addEventListener('click', generateJokes);
generateJokes()