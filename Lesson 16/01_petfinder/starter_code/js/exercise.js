function selectPet(petType){
    console.log(petType);
    // Get the specific pet data set
    const thisPetData = petData[petType];
    console.log(thisPetData);
    // Set the title
    document.querySelector(".petDisplayName").innerText = thisPetData.displayName;


    // Empty the specification data
    let petSpecs = "";
    // Add the space required, size, weight
    petSpecs += `<dt>Size</dt> <dd>${thisPetData.size}</dd>`;
    petSpecs += `<dt>Space Required</dt> <dd>${thisPetData.spaceRequired}</dd>`;
    petSpecs += `<dt>Weight</dt> <dd>${thisPetData.weight}</dd>`;


    // Add logic to add the trainability and lap size images
    petSpecs += `<dt>Trainability</dt>`;

    if(thisPetData.trainability == true){
        petSpecs += `<dd><img src="img/200px-Gnome-emblem-default.svg.png" class="checkmark" alt="Trainable"></dd>`;
    } else {
        petSpecs += `<dd><img src="img/200px-Gnome-emblem-unreadable.svg.png" class="checkmark" alt="Not Trainable"></dd>`;
    }

    petSpecs += `<dt>Fits On Lap</dt>`
    if(thisPetData.fitsOnLap == true){
        petSpecs += `<dd><img src="img/200px-Gnome-emblem-default.svg.png" class="checkmark" alt="Yes"></dd>`;
    } else {
        petSpecs += `<dd><img src="img/200px-Gnome-emblem-unreadable.svg.png" class="checkmark" alt="No"></dd>`;
    }

    // Add the foods (may require loop)
    petSpecs += `<dt>Food</dt>
    <dd>
        <ul>`
        for(var i= 0; i < thisPetData.foods.length;i++ ){
            petSpecs += `<li>${thisPetData.foods[i]}</li>`;
        }
        petSpecs += `</ul></dd>`;

   document.querySelector(".petsDataSpecs").innerHTML = petSpecs;

    // Update the images

        //Set the big image to the first image in images
            //Set the src
            document.querySelector(".photoLarge").setAttribute("src", thisPetData.images[0]['img']);
            //Set the alt
            document.querySelector(".photoLarge").setAttribute("alt", thisPetData.images[0]['alt']);
        
            //Create the gallery
            let thumbSet = "";
            //for each image
            for(let i =0; i< thisPetData.images.length;i++){
                //Create the HTML (a + img)
                thumbSet += `<a href="${thisPetData.images[i]['img']}">
                <img class="photoThumb" alt="${thisPetData.images[i]['alt']}" 
                src="${thisPetData.images[i]['thumb']}" />`
            }

            document.querySelector('.thumbHaus').innerHTML = thumbSet;

        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)

        //Select thumbnail

        let thumbElements = document.querySelectorAll('.thumbHaus a');

        //loop through the thumbnails
        for(let i = 0; i < thumbElements.length; i++){
            //Add click event
            thumbElements[i].addEventListener('click', function(e){
            //prevent the link from executing
                e.preventDefault();
            //Get the link that was clicked on(href_)
                const targetLink =  this.getAttribute('href');
            //Get alt of the image inside the link clicked on
                const targetAlt = this.querySelector('img').getAttribute('alt');
            //Update big image src
            document.querySelector(".photoLarge").setAttribute("src", targetLink);
            //Update big image alt
            document.querySelector(".photoLarge").setAttribute("alt", targetAlt);
            });

        }
    // Empty the ideal for
        document.querySelector(".idealFor").innerHTML = "";

        for(let i = 0; i < thisPetData.idealOwner.length;i++){
            //Create the list item
            let newEle = document.createElement('li');
            //Set the text of the list item
            newEle.innerText = thisPetData.idealOwner[i];
            //Add list item to document
            document.querySelector('.idealFor').append(newEle);
        }
    // Insert the ideal for


    // Empty the Adoption Groups

    // Add the adoption groups


}// end selectPet



document.addEventListener('DOMContentLoaded', function(event) {

    // Initial run
    selectPet("dog");
    //Update whenever a new value is picked
    document.querySelector("#petType").addEventListener("change",function(){
        //Get the selected animal
        const thePetType = document.querySelector("#petType").value;

        //Call the select pet
        selectPet(thePetType);
    });
});






