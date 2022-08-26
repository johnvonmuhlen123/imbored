document.addEventListener('DOMContentLoaded', function() {

    const activities = document.querySelector('select');

    document.querySelector('#button').addEventListener('click', () => get_task(activities.value))

    document.querySelector('#specific').addEventListener('click', get_type)
})

function get_task(type)
{
    fetch(`http://www.boredapi.com/api/activity?type=${type}`)
    .then(response => response.json())
    .then(result => {
        console.log(result)
        document.querySelector('h2').innerHTML = result.activity
        document.querySelector('#title').innerHTML = "I'm Bored"
        document.querySelector('h2').style.marginTop = 'calc(15% - 24px)'
    })
    
}

function get_type()
{
    const selCon = document.querySelector('#select-container')
    if (selCon.style.display == 'none')
    {
        selCon.style.display = 'block'
        document.querySelector('#specific').innerHTML = 'Close'
        
    }
    else
    {
        document.querySelector('#specific').innerHTML = 'Wanna be a little more specific?'
        selCon.style.display = 'none'
    }
    
}
