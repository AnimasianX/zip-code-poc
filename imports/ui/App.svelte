<script>
  import { Meteor } from "meteor/meteor";

  let zip1;
  let zip2; 
  let distance = undefined;
  const getDistance =  ()=>{
    Meteor.call("getDistanceBetweenTwoZip",zip1,zip2,(error,result)=>{
      if(error){

      }else{
        distance = result.data['distance'];
        console.log(result.data['distance'])
      }
    });

  }

  const showLocation = (position) =>{
    var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            alert("Latitude : " + latitude + " Longitude: " + longitude);
  }

  const errorHandler = () =>{
    if(err.code == 1) {
               alert("Error: Access is denied!");
            } else if( err.code == 2) {
               alert("Error: Position is unavailable!");
            }
  }

  const getLocation = ()=>{
    if(navigator.geolocation) {
               
               // timeout at 60000 milliseconds (60 seconds)
               var options = {timeout:60000};
               console.log(navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options));
               
            } else {
               alert("Sorry, browser does not support geolocation!");
            }
  }

  
</script>


<div class="container">
  <label>Zip codes</label>
            <input
              type="number"
              name="overtimeHours"
              bind:value={zip1}
              placeholder="Zip code 1"
            />
            <input
              type="number"
              name="overtimeMinutes"
              bind:value={zip2}
              placeholder="Zip code 2"
            />
  <button on:click={getDistance}>Get Distance</button>
  {#if distance !== undefined}
    <h1>Distance between {zip1} and {zip2} is {distance} Miles</h1>
  {/if}

  <input type = "button" on:click = {getLocation} value = "Get Location"/>
</div>
