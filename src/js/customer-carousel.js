document.querySelectorAll(".customers-carousel").forEach(element => {
 
    const items =element.querySelectorAll(".carousel-item");
    
    // we generate the html for the navigation. By passing item through buttons it will generate as many buttons as items in the array
    
    const buttonsHtml = Array.from(items, () => {
      
      return `<span class="carousel-button"></span>`;
      // we are using backquotes `` so we can use double quotes"" inside the string for the class name
    });
    
    // now we insert the buttons
    element.insertAdjacentHTML( 'beforeend', `
    <div class="carousel-nav"> 
    ${ buttonsHtml.join("") }
    </div>
    `);
  
    
  //   we are going to select the buttons
    
    const buttons = element.querySelectorAll(".carousel-button");
    //here we are getting the list of all the buttons we've created in the previous step
    
    
  //   we are iterating through each button and through each index (i) of the array
    buttons.forEach((button, i) => {
        // set every 2 seconds the next item to be selected
        setInterval(() => {
            // un-select all the items. we select the item list we created at the beggining
            // I don't call the class with "".class" because i'm telling it already the object is going to be a class.
            items.forEach(item => item.classList.remove("item-selected"));
            buttons.forEach(button => button.classList.remove("button-selected"));

            //now we select the correct one depending on its index
            items[i].classList.add("item-selected");
            button.classList.add("button-selected");

            // we increase the index by 1
            i++;
            // if we reach the end of the array we go back to the first item
            if (i === items.length) {
                i = 0;
            }

            // change nav button color
            buttons.forEach(button => button.classList.remove("button-selected"));
            buttons[i].classList.add("button-selected");
        }, 8000);

      button.addEventListener("click", () => {
  // un-select all the items. we select the item list we created at the beggining
  // I don't call the class with "".class" because i'm telling it already the object is going to be a class.
        items.forEach(item => item.classList.remove("item-selected"));
        buttons.forEach(button => button.classList.remove("button-selected"));
  
  //now we select the correct one depending on its index
        items[i].classList.add("item-selected");
        button.classList.add("button-selected");
      });
    });
    
  //   this stablishes the first state of the carousel. Selects the first item on page load.
        items[0].classList.add("item-selected");
        buttons[0].classList.add("button-selected");
  }); 