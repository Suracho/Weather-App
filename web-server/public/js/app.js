console.log('Client side javascript file is loaded!')

const form = document.querySelector('form')
const input = document.querySelector('input')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = input.value
    fetch('http://localhost:3000/weather?address='+encodeURIComponent(location)).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
         console.log(data.error)
        }
        else{
            console.log(data)
        }
        
    })
})
})