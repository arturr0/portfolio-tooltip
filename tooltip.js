document.getElementsByClassName('projectImg').addEventListener('mousemove', function(e) {
  // Get the position of the mouse cursor
  const mouseX = e.pageX;
  const mouseY = e.pageY;

  // Find the element at the cursor position
  const elementAtCursor = document.elementFromPoint(mouseX, mouseY);

  // Update the tooltip position and text
  const tooltip = document.getElementsByClassName('tooltip');
  tooltip.style.display = 'block';
  tooltip.style.left = mouseX + 'px';
  tooltip.style.top = mouseY + 'px';
  tooltip.textContent = 'Kliknij, aby powiększyć.';
});

document.getElementById('hoverElement').addEventListener('mouseleave', function() {
  // Hide the tooltip when mouse leaves the hover element
  document.getElementById('tooltip').style.display = 'none';
});