const input_id = document.querySelector('.inp')
const btn = document.querySelector('.btn')
const showPost = document.querySelector('.post')
const commentsPost = document.querySelector('.comments_post')
const startLink = 'https://jsonplaceholder.typicode.com/posts/'

btn.addEventListener('click', () => {
    const idOfPost = input_id.value;
    const fullLink = startLink.concat(idOfPost)
    switch (true) {
        case idOfPost > 0 && idOfPost <= 100: {
            fetch(`${fullLink}`)
                .then((Response) => Response.json())
                .then((json) => {
                    showPost.innerHTML = showCard(json)

                })
                .catch((Error) => {
                    console.log(Error)
                })
            break
        }
        default: {
            console.log('Enter correct ID')
            break
        }
    }
})


function showCard(json) {
    return `
    <div class="post_card">
        <div><b>Title:${json.title}</b></div>
        <div>Body:${json.body}</div>
        <div>ID:${json.id}</div>
        <button class="btn_comm">Показати коментар</button>
    </div>
    `
}


showPost.addEventListener('click', function (evt) {
    if (evt.target.nodeName === 'BUTTON' && evt.target.textContent === "Показати коментар") {
        const idOfPost = input_id.value;
        const fullLink = startLink.concat(idOfPost)
        const commentLink = fullLink + '/comments'
        fetch(commentLink)
            .then((Response) => Response.json())
            .then((json) => {
                commentsPost.innerHTML = showComment(json)
            })
    }
})
//ДОбавить кнопку комментов и сами комменты

function showComment(comments) {
    return comments.map((comment) => `
    <div class="comments_card">
    <div>Name:${comment.name}</div>
    <div>Email:${comment.email}</div>
    <div>Name:${comment.body}</div>
    </div>
    `).join('')
}