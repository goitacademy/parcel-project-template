;
(
   function slide() {
        const buttons   = document.querySelectorAll('.slide-button')
        const feedbacks = document.querySelectorAll('.feedback-text-wrapper')
        const authors   = document.querySelectorAll('.feedback-author')
        const avatars   = document.querySelectorAll('.feedback-avatar')
        
        for (let i = 0; i < buttons.length; i++) {

            buttons[i].addEventListener('click', (e) => {

                const currentButton   = document.querySelector('.is-clicked');
                const currentFeedback = document.querySelector('.current-feedback');
                const currentAuthor   = document.querySelector('.current-author');
                const currentAvatar   = document.querySelector('.current-avatar');
                
                currentFeedback.classList.remove("current-feedback")
                feedbacks[i].classList.add("current-feedback")

                currentAuthor.classList.remove("current-author")
                authors[i].classList.add("current-author")

                currentAvatar.classList.remove("current-avatar")
                avatars[i].classList.add("current-avatar")
                
                currentButton.classList.remove('is-clicked')
                buttons[i].classList.add('is-clicked')

                // for (let j = 0; j < buttons.length; j++) {
                //    if(j !== i) {
                //         buttons[j].classList.remove('is-clicked')
                //    }
                    
                // }
            })
            
        }
        
      
   }
)();