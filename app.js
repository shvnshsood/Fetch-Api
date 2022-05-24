let btn=document.getElementById('btn');

let dog_result=document.getElementById('dog_result');


btn.addEventListener('click', getdog)


//get request

function getdog() {
  

    fetch('https://random.dog/woof.json').then(res => res.json())
    .then((data) =>
{
        if (data.url.includes('.mp4')) { getdog() }

        else {
            dog_result.innerHTML = `<img src= "${data.url}"/>`
        }
    })
}



