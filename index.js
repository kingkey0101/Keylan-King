// template_zd2netu => template id
// service_leze6mo => service id
// _qQYPXY0XDM6bdQKc => user id
let isModalOpen = false;
let contrastToggle = false;

function toggleContrast(){
    contrastToggle = !contrastToggle;
    if(contrastToggle) {
    document.body.classList += ' dark-theme'
    }

    else{
        document.body.classList.remove('dark-theme')
    }
}


// promise:(async)
function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs

    .sendForm(
      "service_leze6mo",
      "template_zd2netu",
      event.target,
      "_qQYPXY0XDM6bdQKc"
    )
    .then(() => {
      // throw new Error('error') for testing error alert and load phase
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temorarily unavailable. Please contact me directly at kingkey0101@outlook.com"
      );
    });
}

//toggle modal
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}
