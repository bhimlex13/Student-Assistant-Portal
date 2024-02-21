// Disable right-click context menu
document.addEventListener('contextmenu', function (e) {
  alert('⚠️ Sorry. Di muna pwede mag right click here ⚠️')
  e.preventDefault();
});
  
  // Disable certain keyboard shortcuts
  document.onkeydown = function(e) {
    // Disable F12
    if (e.key == 123) {
      e.preventDefault();
    }
    // Disable Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.key == 'I') {
      e.preventDefault();
    }
    // Disable Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && e.key == 'C') {
      e.preventDefault();
    }
    // Disable Ctrl+Shift+J
    if (e.ctrlKey && e.shiftKey && e.key == 'J') {
      e.preventDefault();
    }
    // Disable Ctrl+U
    if (e.ctrlKey && e.key == 'U') {
      e.preventDefault();
    }
  };