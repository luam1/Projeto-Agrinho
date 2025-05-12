    function searchBooks() {
          var input = document.getElementById('searchInput').value.toLowerCase();
        var sections = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10', 'a11', 'a12'];
    sections.forEach(function(id) {
        var section = document.getElementById(id);
        var buttons = section.getElementsByTagName('button');
        var found = false;
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].textContent.toLowerCase().includes(input)) {
                found = true;
                break;
            }
        }
        if (found) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}   
document.addEventListener('DOMContentLoaded', () => {
    // Comments functionality
    const commentInput = document.getElementById('comment-input');
    const commentButton = document.getElementById('comment-button');
    const commentsList = document.getElementById('comments-list');

    const loadComments = () => {
        const comments = JSON.parse(localStorage.getItem('comments') || '[]');
        commentsList.innerHTML = '';
        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.textContent = comment;
            commentsList.appendChild(commentElement);
        });
    };

    const saveComment = (comment) => {
        const comments = JSON.parse(localStorage.getItem('comments') || '[]');
        comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));
    };

    commentButton.addEventListener('click', () => {
        const comment = commentInput.value;
        if (comment.trim()) {
            saveComment(comment);
            loadComments();
            commentInput.value = '';
        }
    });