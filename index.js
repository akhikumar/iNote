console.log("This is first project in java script");
showNotes();
let btn = document.getElementById('myBtn');
btn.addEventListener('click', function (e){
    console.log("button is working");

    let myText = document.getElementById('myText');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(myText.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    myText.value = "";
    console.log(notesObj);

       showNotes();
})

function showNotes(){
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        // console.log(element,index);
        html += `<div  class="noteCard card my-3 mx-3" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
    });
    let notesElem = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    }
    else {
        notesElem.innerHTML =`Nothing to show !! Use "Add a Note" section above to add notes.`;
    }

}

// deleting the notes:

function deleteNotes(index){

console.log("deleted node",index);
let notes = localStorage.getItem('notes');
if (notes == null) {
    notesObj = [];
}
else {
    notesObj = JSON.parse(notes);
}
let l=notesObj.splice(index, 1);// index show the from where we have to delete and 1 represent how much content we have to delete:
console.log(l);
 localStorage.setItem('notes',JSON.stringify(notesObj));
 showNotes();
}


// searching the notes and filter the notes:
 
let search=document.getElementById('searchTxt');
search.addEventListener('input',function () {
    let inputVal=search.value.toLowerCase();
    console.log("search section fired",inputVal);
    let noteCard=document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function(element){
        let cardText=element.getElementsByTagName('p')[0];
          // here cardText is element we have to add innerHTML to get exact paragraph and it converted to lower case  string so that the comparision matched:
       console.log(cardText);
       if(cardText.innerHTML.toLowerCase().includes(inputVal)){
           element.style.display="block";
       }
       else{
           element.style.display="none";
       }
    })

})