
   var likeIcons = document.querySelectorAll(".like");
    
    likeIcons.forEach(function(likeIcon) {
        likeIcon.addEventListener("click", function() {
            if (likeIcon.classList.contains('fa-regular'))
            {
                likeIcon.classList.remove('fa-regular');
                likeIcon.classList.add('fa-solid');
                likeIcon.classList.add('liked');
            } 
            else 
            {
                likeIcon.classList.remove('fa-solid');
                likeIcon.classList.add('fa-regular');
                likeIcon.classList.remove('liked');
            }
        });
    });
