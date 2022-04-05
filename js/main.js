var elList = document.querySelector(".list");
var elBookmarlist = document.querySelector(".bookmark-list")

var bookmark = [];




function renderBookmark(arr , element){
  element.innerHTML = "";

  arr.forEach(bookmark =>{
    const newItem = document.createElement("li")
    const bookmarkBtn = document.createElement("button")


    newItem.textContent = bookmark.title;
    bookmarkBtn.textContent = "delete";
    bookmarkBtn.type = "button";
    newItem.classList.add("item")
    bookmarkBtn.classList.add("delete-button")
    bookmarkBtn.dataset.filmId = bookmark.id;


    newItem.appendChild(bookmarkBtn)
    element.appendChild(newItem)


  })
}



elBookmarlist.addEventListener("click" , evt =>{
  const isDeleteBtn = evt.target.matches(".delete-button")


  if(isDeleteBtn){
    const btnId = evt.target.dataset.filmId;

    const findIndexBookmark = bookmark.findIndex(e => e.id === btnId);

    console.log(bookmark);

    bookmark.splice(findIndexBookmark , 1)


    renderBookmark(bookmark, elBookmarlist)
  }
})


// dwdewdwedwedwedwdewedewdewdewdewd wedewd

function renderGenes(arr , element){
  
  var renderGeners = [];
  
  arr.forEach((film) => {
    
    film.genres.forEach(genre => {
      if(!renderGeners.includes(genre)){
        renderGeners.push(genre)
      }
    })
  })
  
  renderGeners.forEach(genre => {
    const newOption = document.createElement("option");
    
    newOption.value = genre;
    newOption.textContent = genre;
    element.appendChild(newOption);
  })
  
}



function renderFilms(arr, element){
  element.innerHTML = "";
  
  arr.forEach(film =>{
    var newItem = document.createElement("li");
    var newImg = document.createElement("img");
    var newHeading = document.createElement("h3");
    var newText = document.createElement("p");
    var newTime = document.createElement("time");
    var newSubList = document.createElement("ul");
    var newBtn = document.createElement("button");
    
    
    
    newBtn.textContent = "bookmark"
    newHeading.textContent = film.title;
    newText.textContent = film.overview.split(" ").slice(0 ,10).join(" ") + "...";
    newTime.textContent = formatDate(film.release_date);
    

    // dfsdfdsfmdsfomdsfmoads;mfoadmfoa
    // for(var genre of film.genres){
    //   var newSubItem = document.createElement("li");
    //   newSubItem.textContent = genre;
    //   newSubList.appendChild(newSubItem);
    // }
    

    newItem.setAttribute("class", "list__item");
    newHeading.setAttribute("class", "heading")
    newImg.setAttribute("src", film.poster);
    newImg.setAttribute("class", "list__img");
    newText.setAttribute("class", "list__text");
    newTime.setAttribute("datetime", "2022-03-12");
    newBtn.setAttribute("class" , "bookmark-button");
    newBtn.dataset.filmId = film.id;
    
    
    
    newItem.appendChild(newImg);
    newItem.appendChild(newHeading);
    newItem.appendChild(newText);
    newItem.appendChild(newTime);
    newItem.appendChild(newSubList);
    newItem.appendChild(newBtn);
    
    element.appendChild(newItem);
    
  })
  
  
  
}




elList.addEventListener("click", evt => {
  if(evt.target.matches(".bookmark-button")){
      var bookmarkBtnId = evt.target.dataset.filmId;
      


      var findFilms = films.find(e => e.id === bookmarkBtnId);


      if(!bookmark.includes(findFilms)){
        bookmark.push(findFilms)
        

        renderBookmark(bookmark, elBookmarlist)
      }
      
  }
})




// kfkosdfoismdfioamfoiamfo

form.addEventListener("submit", evt =>{
  evt.preventDefault();
  
  const selectVal = select.value;
  
  let filterFilms = selectVal == "all" ? films : films.filter(element => element.genres.includes(selectVal))  ;
  
  // if(selectVal === "all"){
  //   filterFilms = films;
  // }else{
  //   filterFilms = films.filter(element => element.genres.includes(selectVal));
  // }
  
  
  
  renderFilms(filterFilms, elList);
  
  
})


renderFilms(films, elList);


renderGenes(films , select);
