/*
  tiny script, tiny chaos, still useful enough.
  if this breaks, it's probably just the universe testing my patience.
*/
/*
  I am finaly geting the old vibes like we used to manualy debug the code,
  go on stackoverflow or w3schools ai has changed lot of things
*/

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('mini-form');
  const status = document.getElementById('form-status');

  if (form && status) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const button = form.querySelector('button');
      const oldText = button.textContent;

      button.disabled = true;
      button.textContent = 'sending...';

      setTimeout(() => {
        status.textContent = 'message sent. i will reply when the caffeine catches up.';
        form.reset();
        button.disabled = false;
        button.textContent = oldText;
      }, 700);
    });
  }

  console.warn('warning: the website is being dramatic again, but it still works.');
});
