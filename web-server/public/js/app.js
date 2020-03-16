console.log('Client side javascript file is loaded!')

const form = document.querySelector('form')
const input = document.querySelector('input')
const message1 = document.querySelector('#message1')
const message2 = document.querySelector('#message2')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = input.value
    message1.textContent = 'loading'
    message2.textContent =''
    fetch('http://localhost:3000/weather?address='+encodeURIComponent(location)).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
         message1.textContent = data.error
        }
        else{
            message1.textContent = data.forecasts
            message2.textContent = data.place_name
        }
        
    })
})
})