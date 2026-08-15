/*
  tiny script, tiny chaos, still useful enough.
  if this breaks, it's probably just the universe testing my patience.
*/
/*
  I am finaly geting the old vibes like we used to manualy debug the code,
  go on stackoverflow or w3schools ai has changed lot of things.
  now we still fix things, but with a little less screaming and a little more coffee.
*/

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('mini-form');
  const status = document.getElementById('form-status');

  if (form && status) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const button = form.querySelector('button');
      const oldText = button.textContent;
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        status.textContent = 'please fill all the boxes before sending. the form is not a psychic.';
        return;
      }

      button.disabled = true;
      button.textContent = 'sending...';
      status.textContent = 'sending your message through the internet noodles...';

      try {
        const response = await fetch('https://formsubmit.co/ajax/youridertech@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            message
          })
        });

        if (!response.ok) {
          throw new Error('mail server said no today');
        }

        status.textContent = 'message sent. i will reply when the caffeine catches up.';
        form.reset();
      } catch (error) {
        status.textContent = 'the message got stuck in traffic, but the form still worked. try email directly or try again.';
        console.error('Form submit failed:', error);
      } finally {
        button.disabled = false;
        button.textContent = oldText;
      }
    });
  }

  console.warn('warning: the website is being dramatic again, but it still works.');
});
