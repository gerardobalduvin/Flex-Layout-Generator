// Functional Scrolling Buttons (Help, About, and Contact)
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    //The getBoundingClientRect() method calculates the position of the target section relative to the viewport. The .top property of the resulting object represents the distance from the top of the viewport to the top of the target section.
    const offset = targetSection.getBoundingClientRect().top;
    //window.innerHeight gives us the height of the viewport, which is the visible area of the browser window.
    const screenHeight = window.innerHeight;
    //targetSection.clientHeight retrieves the height of the target section itself.
    //The targetPosition calculation centers the target section vertically on the screen by subtracting half the viewport height and adding half the target section height to the offset.
    const targetPosition = offset - (screenHeight / 2) + (targetSection.clientHeight / 2);
  
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});
  
//Refresh Page appon clicking header h1 (FLEXBOX LAYOUT GENERATOR)
document.addEventListener('DOMContentLoaded', function() {
  const logo = document.getElementById('logo');
  
  logo.addEventListener('click', function() {
    window.location.reload(); // Reload the page
  });
});

//Flexbox Generator
window.addEventListener("DOMContentLoaded", (event) =>{
  // Get references to the generator preview div and all buttons
  const generatorPreviewContainer = document.querySelector('.generator-preview-container');
  const addDiv = document.getElementById('add-div');
  const deleteDivButton = document.getElementById('delete-div');
  const heightInput = document.getElementById('change-height');
  const widthInput = document.getElementById('change-width');
  const leftMarginInput = document.getElementById('change-left-margin');
  const rightMarginInput = document.getElementById('change-right-margin');
  const topMarginInput = document.getElementById('change-top-margin');
  const bottomMarginInput = document.getElementById('change-bottom-margin');
  const flexDirectionInput = document.getElementById('flex-direction');
  const justifyContentInput = document.getElementById('justify-content');
  const alignItemsInput = document.getElementById('align-items');
  const alignContentInput = document.getElementById('align-content');
  const flexWrapInput = document.getElementById('flex-wrap');

  // Listen for input events on the input elements
  heightInput.addEventListener("input", applyStylesToNewDiv);
  widthInput.addEventListener("input", applyStylesToNewDiv);
  leftMarginInput.addEventListener("input", applyStylesToNewDiv);
  rightMarginInput.addEventListener("input", applyStylesToNewDiv);
  topMarginInput.addEventListener("input", applyStylesToNewDiv);
  bottomMarginInput.addEventListener("input", applyStylesToNewDiv);
  flexDirectionInput.addEventListener("change", applyStylesToNewDiv);
  justifyContentInput.addEventListener("change", applyStylesToNewDiv);
  alignItemsInput.addEventListener("change", applyStylesToNewDiv);
  alignContentInput.addEventListener("change", applyStylesToNewDiv);
  flexWrapInput.addEventListener("change", applyStylesToNewDiv);

  addDiv.addEventListener("click", addNewDiv);
  deleteDivButton.addEventListener("click", deleteDiv);

  function addNewDiv() {
    const newDiv = document.createElement("div");
    newDiv.classList.add('new-div');
    newDiv.style.display = 'flex';
    generatorPreviewContainer.appendChild(newDiv);

    // Apply the current styles to the new div
    applyStylesToNewDiv();

    generateCSS();
  }

  function deleteDiv() {
    const divs = generatorPreviewContainer.querySelectorAll('div');
    if (divs.length > 0) {
      // Remove the last div
      divs[divs.length - 1].remove();

      // Regenerate CSS styles
      generateCSS();
    }
  }


  function applyStylesToNewDiv() {
    const divs = generatorPreviewContainer.querySelectorAll('.new-div');
    const heightValue = heightInput.value + 'px';
    const widthValue = widthInput.value + 'px';
    const leftMargin = leftMarginInput.value + 'px';
    const rightMargin = rightMarginInput.value + 'px';
    const topMargin = topMarginInput.value + 'px';
    const bottomMargin = bottomMarginInput.value + 'px';
    const flexDirection = flexDirectionInput.value;
    const justifyContent = justifyContentInput.value;
    const alignItems = alignItemsInput.value;
    const alignContent = alignContentInput.value;
    const flexWrap = flexWrapInput.value;

    divs.forEach((div) => {
      div.style.height = heightValue;
      div.style.width = widthValue;
      div.style.marginLeft = leftMargin;
      div.style.marginRight = rightMargin;
      div.style.marginTop = topMargin;
      div.style.marginBottom = bottomMargin;
    });

    // Apply container-level styles to the parent
    generatorPreviewContainer.style.flexDirection = flexDirection;
    generatorPreviewContainer.style.justifyContent = justifyContent;
    generatorPreviewContainer.style.alignItems = alignItems;
    generatorPreviewContainer.style.alignContent = alignContent;
    generatorPreviewContainer.style.flexWrap = flexWrap;    

    generateCSS();
  }
  

  // Generate CSS based on flex layout and settings
  function generateCSS() {
    const cssCode = `
    .new-div {
      height: ${heightInput.value}px;
      width: ${widthInput.value}px;
      margin-left: ${leftMarginInput.value}px;
      margin-right: ${rightMarginInput.value}px;
      margin-top: ${topMarginInput.value}px;
      margin-bottom: ${bottomMarginInput.value}px;
      
      /* Add other styles as needed */
    }
    `;

    let containerCSS = `
    .new-div-container{
      flex-direction: ${flexDirectionInput.value};
      justify-content: ${justifyContentInput.value};
      align-items: ${alignItemsInput.value};
      align-content: ${alignContentInput.value};
      flex-wrap: ${flexWrapInput.value};
    }
    `
    // Update the textarea with the generated CSS code
    document.getElementById("css-code").value = cssCode + containerCSS;
  } 
})
