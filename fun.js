jQuery(document).ready(()=>{
    jQuery('#searchForm').on('onkeyup' , (e)=> {
        var searchW=jQuery('#search').val();
        console.log(searchW);
        e.preventDefault();
        GetMovies(searchW)  //calling part
    });
});

//called part
function GetMovies(searchW) {
    //console.log(searchMovies);
    window.fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${searchW}&APPID=f4eff8b72dea3063621b42e1ab47e6fd&units=metric`)
    

    .then(data=>{
        data.json().then(res=> {
            console.log(res);
            // let name=res.city.name;
            // let output = res.list[0].wind.speed;

            // let data =res.city;
           let output='';
            
               output += `
               <div class="container">
        <table class="table table-bordered text-center">
                <thead class="thead-dark">
                  <tr>
                    
                    <th scope="col">City</th>
                    <th scope="col">County</th>
                    <th scope="col">Temparature</th>
                    <th scope="col">Wind Speed</th>
                    <th scope="col">Sea Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    
                    <td>${res.city.name}</td>
                    <td>${res.city.country}</td>
                    <td>${res.list[0].main.temp} C</td>
                    <td>${res.list[0].wind.speed} M/hr </td>
                    <td>${res.list[0].main.sea_level} meter </td>
                  </tr>
                 
                </tbody>
              </table>`
               
        
          document.querySelector('#template').innerHTML=output;

        }).catch(err => console.log(err))
    }).catch(err => console.log(err));
    
}