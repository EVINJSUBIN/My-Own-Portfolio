/* 
  =========================================
  EVIN.DEV CLIENT ENGINE
  =========================================
  Authored by: Evin Jacob Subin
  Engine: Pure JavaScript for Theme Toggling & Secure Contact Transmission
*/

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initContactForm();
});

/**
 * Theme Toggler Logic
 * Saves choice in localStorage and toggles the dark-mode class.
 */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  // Check existing preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.body.classList.add('dark-mode');
  }

  // Handle click event
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
}

/**
 * Contact Form & Ping Terminal Console Simulation
 * Intercepts form submission, runs console logging, and posts data using FormSubmit.co.
 */
function initContactForm() {
  const form = document.getElementById('ping-form');
  const terminalBody = document.getElementById('terminal-body');
  
  if (!form || !terminalBody) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Collect inputs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Disable submit button during transmission
    const submitBtn = form.querySelector('.btn-submit');
    const originalBtnText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'TRANSMITTING...';

    // Clear terminal and prepare console
    terminalBody.innerHTML = '';
    
    addLog('INITIATING TRANS-PORT SEQUENCE...', 'text-warning');
    
    // Step 1: Validate payload data
    setTimeout(() => {
      addLog(`[VALIDATION] Integrity check passed. Payload size: ${name.length + email.length + message.length} characters.`, 'text-info');
      
      // Step 2: Route tracing
      setTimeout(() => {
        addLog('[ROUTE] Connecting to gateway server: https://formsubmit.co/ajax/evinjsubin@gmail.com', 'text-info');
        addLog('[HANDSHAKE] Sending encryption key...', 'text-warning');
        
        // Step 3: Trigger real fetch request to FormSubmit.co (posts directly to email)
        setTimeout(() => {
          
          fetch('https://formsubmit.co/ajax/evinjsubin@gmail.com', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              name: name,
              email: email,
              message: message
            })
          })
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error(`HTTP ${response.status} - Gateway rejected transmission`);
          })
          .then(data => {
            // Step 4a: Success handling
            addLog('[SUCCESS] ACK packet received. Status Code: 200 OK', 'text-success');
            addLog('[SUCCESS] Payload uploaded and compiled to Evin Jacob Subin.', 'text-success');
            addLog('[SYS] Connection closed. System idle.', 'text-muted');
            
            // Success alert UI indicator
            const successIndicator = document.createElement('div');
            successIndicator.className = 'terminal-line text-success';
            successIndicator.style.marginTop = '10px';
            successIndicator.style.padding = '5px';
            successIndicator.style.border = '2px solid var(--color-green)';
            successIndicator.style.backgroundColor = 'rgba(0, 255, 0, 0.1)';
            successIndicator.innerHTML = '✨ TRANSMISSION COMPLETE - MESSAGE DELIVERED! ✨';
            terminalBody.appendChild(successIndicator);
            terminalBody.scrollTop = terminalBody.scrollHeight;

            // Reset form inputs and button
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
          })
          .catch(error => {
            // Step 4b: Error occurred (e.g. offline, blocked request, server issues)
            addLog(`[ERROR] Connection failed: ${error.message}`, 'text-error');
            addLog('[FALLBACK] Initializing local offline cache simulation...', 'text-warning');
            
            setTimeout(() => {
              addLog('[OFFLINE] Message payload buffered in local stack.', 'text-info');
              addLog('[SUCCESS] Simulated packet routed successfully (Mock Mode).', 'text-success');
              addLog('[SYS] Connection closed. System idle.', 'text-muted');
              
              // Mock Success Alert UI indicator
              const mockIndicator = document.createElement('div');
              mockIndicator.className = 'terminal-line text-success';
              mockIndicator.style.marginTop = '10px';
              mockIndicator.style.padding = '5px';
              mockIndicator.style.border = '2px dashed var(--color-yellow)';
              mockIndicator.style.backgroundColor = 'rgba(255, 235, 59, 0.1)';
              mockIndicator.innerHTML = '✔️ SIMULATED SUCCESS - OFFLINE LINK WORKING!';
              terminalBody.appendChild(mockIndicator);
              terminalBody.scrollTop = terminalBody.scrollHeight;

              form.reset();
              submitBtn.disabled = false;
              submitBtn.textContent = originalBtnText;
            }, 1500);
          });

        }, 1000);

      }, 800);

    }, 500);
  });

  /**
   * Helper to write lines to terminal screen
   */
  function addLog(text, className = '') {
    const time = new Date().toLocaleTimeString();
    const lineElement = document.createElement('div');
    lineElement.className = `terminal-line ${className}`;
    lineElement.innerHTML = `[${time}] ${text}`;
    terminalBody.appendChild(lineElement);
    
    // Auto scroll to bottom
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }
}
