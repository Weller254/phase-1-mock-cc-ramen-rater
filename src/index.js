// write your code here
// A function to render all ramens from the serve onto the html document
function renderRamen(ramenItem){
    const img  = document.createElement("img")
    img.className = "ramenimg"
    img.src = `${ramenItem.image}`
    img.id = `${ramenItem.id}`
    document.getElementById("ramen-menu").appendChild(img)


    const myImage = document.getElementsByClassName("ramenimg")
    

    //we iterate over the obejcts in the .json file and get the idfor each object
    for (i=0; i<myImage.length; i++ ){
    
    myImage[i].addEventListener("click", function() {
        //GET method goes here
        console.log(this.id, this.className);

        const myRamen = document.getElementById("ramen-detail")
        const imageTag = `
        <img class="detail-image" src="${this.src}" alt="Insert Name Here" />
    <h2 class="name">${ramenItem.name}</h2>
    <h3 class="restaurant">${ramenItem.restaurant}</h3>
        `;
        myRamen.innerHTML = imageTag

       //This is where we update the comment for each ramen 
        const myComment = document.getElementById("commentid")
        const commentTag = `
        <p id="commentid" class="ramenimg">${ramenItem.comment}</p>`;
        myComment.innerHTML = commentTag

       // code for updating the ramen rating
        const myRating = document.getElementById("ratingid")
        const idTag = `
        <p id="commentid" class="ramenimg">${ramenItem.rating}</p>`;
        myRating.innerHTML = idTag



      });
    }
}

//This function fetches the data from the server.
function getAllRamen(){
    fetch("http://localhost:3000/ramens")
    .then(res => res.json())
    .then(ramens => ramens.forEach(ramenItem => renderRamen(ramenItem)))
}
getAllRamen()
