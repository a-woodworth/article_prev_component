const shareButton = document.querySelector('.btn');
const socialMediaModal = document.querySelector('#modal');
const socialMediaLinks = document.querySelectorAll('.socialmedia-wrapper a');
const focusableItems = [...socialMediaLinks, shareButton];
const firstFocusableItem = focusableItems[0]; 
const lastFocusableItem = focusableItems[focusableItems.length - 1];

function toggleModal() {
  // Update button attribute and styles
  shareButton.classList.toggle('btn__modal-open');

  if ( shareButton.classList.contains('btn__modal-open') ) {
    shareButton.setAttribute('aria-pressed', true);
  } else {
    shareButton.setAttribute('aria-pressed', false);
  }

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

// Trap focus in modal
shareButton.addEventListener('keydown', (e) => {
  if ( e.key === 'Tab'  && 
      socialMediaModal.classList.contains('active') &&
      document.activeElement === lastFocusableItem ) {
    // If using shift + tab, go to last link
    if ( e.shiftKey ) {
      socialMediaLinks[socialMediaLinks.length - 1].focus();
      e.preventDefault();
    } else {
      // Tab to first link in modal
      firstFocusableItem.focus();
      e.preventDefault();
    }
  }
});

// Send focus to share button on tab + shift when inside modal
socialMediaModal.addEventListener('keydown', (e) => {
  if ( e.key === 'Tab' ) {
    // if shift + tab on first link, focus goes to button
    if ( e.shiftKey ) {
      if ( document.activeElement === firstFocusableItem ) {
        lastFocusableItem.focus();
        e.preventDefault();
      }
    }
  }
});

shareButton.addEventListener('click', toggleModal);
