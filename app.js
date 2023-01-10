const shareButton = document.querySelector('.btn');
const socialMediaModal = document.querySelector('#modal');
const socialMediaLinks = document.querySelectorAll('.socialmedia-wrapper a');
const focusableItems = [...socialMediaLinks, shareButton];
const firstFocusableItem = focusableItems[0];
const lastFocusableItem = focusableItems[focusableItems.length - 1];

function toggleModal() {
  // Update button attribute and styles
  shareButton.setAttribute('aria-pressed', true);
  shareButton.classList.toggle('btn__modal-open');

  // Show modal content
  socialMediaModal.classList.toggle('hidden');
  socialMediaModal.classList.toggle('active');

  // Focus on first social media link
  firstFocusableItem.focus();
}

// Exit modal via Escape key
socialMediaModal.addEventListener('keydown', (e) => {
  if ( e.key === 'Escape' ) {
    toggleModal();
    shareButton.focus();
  }
});

// If modal active and first link has focus, listen for shift 
// key to move focus to button and not card links
socialMediaModal.addEventListener('keydown', (e) => {
  if ( e.key === 'Shift' && document.activeElement === firstFocusableItem) {
    lastFocusableItem.focus();
  }
});

shareButton.addEventListener('click', toggleModal);
