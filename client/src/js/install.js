const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default prompt from showing
    event.preventDefault();
    
    // Save the event for later use
    deferredPrompt = event;
    
    // Show the install button
    butInstall.style.display = 'block';
  });
  

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // Check if the deferred prompt is available
    if (deferredPrompt) {
      // Show the prompt
      deferredPrompt.prompt();
      
      // Wait for the user to make a choice
      const choiceResult = await deferredPrompt.userChoice;
      
      // Reset the deferred prompt variable
      deferredPrompt = null;
      
      // Hide the install button
      butInstall.style.display = 'none';
      
      // Log the user's choice
      console.log(choiceResult.outcome);
    }
  });
  

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Hide the install button
    butInstall.style.display = 'none';
    
    // Log the event
    console.log('App installed');
  });
  
