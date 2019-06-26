jQuery(document).ready(()=>{
    jQuery('#searchForm').on('keyup' , (e)=> {
        var searchMovies=jQuery('#search').val();
        console.log(searchMovies);
        e.preventDefault();
        GetMovies(searchMovies)  //calling part
    });
});

//called part
function GetMovies(searchMovies) {
    //console.log(searchMovies);
    window.fetch(`http://www.omdbapi.com/?s=${searchMovies}&apikey=650e0814`)
    .then(data=>{
        data.json().then(res=> {
           // console.log(res);
           let movies =res.Search;
           let output='';
            for(let movie of movies) {
               output += `
               <div class="container">
               
               <div class="col-md-3">
               <div class="card " style="">
               <img src="${movie.Poster}" class="card-img=top mr-2" alt="...">
               <div class="card-body">
               <p class="card-text">${movie.Year}</p>
               </div>
               </div>
               </div>
               </div> `
               
           };
           document.querySelector('#template').innerHTML=output;

        }).catch(err => console.log(err))
    }).catch(err => console.log(err));
    
}