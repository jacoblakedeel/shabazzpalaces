//form submit
$(() =>{

    $('.form-inline').submit(e=>{
        e.preventDefault();

        $.post('/api', {
            name: $('#userName').val(),
            comment: $('#commentInput').val()

        }, updateFeedback)
    })
    
    
    const updateFeedback = (data) =>{
        let date = new Date(Date.now()).toLocaleString();
        let output = '';
        
        $.each(data,(item, key) =>{
            output +='<div><h2>'+ date +'<br>' + key.name +':<br>' + key.comment + '</h2></div><br><hr>';
        })

        $('#commentContainer').html(output)
        
    }
    $.getJSON('/api', updateFeedback)
    
})






// let form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     fetch('/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             name: document.querySelector('#userName').value,
//             comment: document.querySelector('#commentInput').value
//         })
//     })
//     .then(response => response.json())
//     .then((data) => {
//         let date = new Date(Date.now()).toLocaleString();
//         let commentContainer = document.getElementById('commentContainer');
//         commentContainer.innerHTML += `${date}<br>${data.name}:<br> ${data.message}<br`
//     })
// })