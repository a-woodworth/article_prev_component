const shareButton = document.querySelector('.btn');
const socialMediaModal = document.querySelector('#modal');


function toggleModal() {
  // Update button attribute and styles
  shareButton.setAttribute('aria-pressed', true);
  shareButton.classList.toggle('btn__modal-open');
  // Show modal content
  socialMediaModal.classList.toggle('hidden');
  socialMediaModal.classList.toggle('active');
}

shareButton.addEventListener('click', toggleModal);
