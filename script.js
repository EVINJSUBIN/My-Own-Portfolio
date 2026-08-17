document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;

  const setTheme = (darkMode) => {
    document.body.classList.toggle('dark-theme', darkMode);
    if (toggle) toggle.checked = darkMode;
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  };

  setTheme(isDark);

  if (toggle) {
    toggle.addEventListener('change', (event) => setTheme(event.target.checked));
  }

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
          body: JSON.stringify({ name, email, message })
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
});
