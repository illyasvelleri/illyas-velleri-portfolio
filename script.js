
/*music*/

var audio = document.getElementById("myAudio");

  function toggleMusic() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

/*animation*/
document.addEventListener('DOMContentLoaded', function() {
  const text1 = "Developer";
  const text2 = "Designer";
  const roleElement1 = document.getElementById('role1');
  const roleElement2 = document.getElementById('role2');

  let index1 = 0;
  let index2 = 0;
  let isDeleting = false;
  let currentText = text1;

  function type() {
      if (!isDeleting) {
          if (currentText === text1 && index1 < text1.length) {
              roleElement1.innerHTML += text1.charAt(index1);
              index1++;
          } else if (currentText === text2 && index2 < text2.length) {
              roleElement2.innerHTML += text2.charAt(index2);
              index2++;
          }

          if (index1 === text1.length && currentText === text1) {
              currentText = text2;
              setTimeout(type, 1000); // Pause before typing the second text
              return;
          } else if (index2 === text2.length && currentText === text2) {
              isDeleting = true;
              setTimeout(type, 1000); // Pause before deleting
              return;
          }
      } else {
          if (index2 > 0) {
              roleElement2.innerHTML = text2.substring(0, index2 - 1);
              index2--;
          } else if (index1 > 0) {
              roleElement1.innerHTML = text1.substring(0, index1 - 1);
              index1--;
          }

          if (index1 === 0 && index2 === 0) {
              isDeleting = false;
              currentText = text1;
          }
      }

      const delay = isDeleting ? 100 : 200;
      setTimeout(type, delay);
  }

  type();
});


  /*close nav bar*/

  $(document).ready(function() {
    $(".nav-link").click(function() {
      $(".offcanvas").removeClass("show");
    });
  });

 

// Function to shuffle the list items
function shuffleTechs() {
    const techs = document.querySelector('.techs');
    const items = Array.from(techs.children);
    
    // Remove the 'visible' class to start the fade out transition
    items.forEach(item => item.classList.remove('visible'));
    
    // Shuffle the items
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        techs.appendChild(items[j]);
    }

    // Add the 'visible' class to start the fade in transition
    setTimeout(() => {
        items.forEach(item => item.classList.add('visible'));
    }, 100); // Timeout to allow the shuffle to complete
}

// Shuffle the tech icons every 2 seconds
setInterval(shuffleTechs, 2000);

// Initial shuffle on page load
document.addEventListener('DOMContentLoaded', shuffleTechs);

