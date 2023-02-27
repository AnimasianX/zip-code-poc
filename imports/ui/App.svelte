<script>
  import { Meteor } from "meteor/meteor";
  import Range from "./Range.svelte";

  let zip1;
  let zip2; 
  let distance = undefined;
  let userZip;
  let distanceFromUser;
  let zipFromUserRadius;

//range
  let value = 50;
  let theme = "default";


  const getDistance =  ()=>{
    Meteor.call("getDistanceBetweenTwoZip",zip1,zip2,(error,result)=>{
      if(error){

      }else{
        distance = result.data['distance'];
        console.log(result.data['distance'])
      }
    });

  }

  const getDistanceFromUser =  ()=>{
    Meteor.call("getDistanceFromUser",userZip,[11355,29414,29910],(error,result)=>{
      if(error){

      }else{
        distanceFromUser = result.data.distances;
        console.log(distanceFromUser);
        zipFromUserRadius = Object.keys(distanceFromUser).filter((key)=> distanceFromUser[key] < value);
      }
    });

  }

   

//  $: zipFromUserRadius = Object.keys(distanceFromUser).filter((key)=> distanceFromUser[key] < value);
$m:{
  if(zipFromUserRadius){
  zipFromUserRadius = zipFromUserRadius;
  zipFromUserRadius = Object.keys(distanceFromUser).filter((key)=> distanceFromUser[key] < value);
  }
}
  

</script>


<div class="container">
  <label>Zip codes</label>
            <input
              type="number"
              name="start-zip"
              bind:value={zip1}
              placeholder="Your zip code"
            />
            <input
              type="number"
              name="newzip"
              bind:value={zip2}
              placeholder="Zip code 2"
            />
  <button on:click={getDistance}>Get Distance</button>
  <br>
  {#if distance !== undefined}
    <h1>Distance between {zip1} and {zip2} is {distance} Miles</h1>
  {/if}
  
  <br>
  <label>Distance from user: </label>
  <input
              type="number"
              name="user-zip"
              bind:value={userZip}
              placeholder="Your zip code"
            />
  <input type = "button" on:click = {getDistanceFromUser} value = "Get Distance"/>
  {#if distanceFromUser}
  <ul>
    {#each Object.keys(distanceFromUser) as zipcode}
      <li>
        {zipcode} : {distanceFromUser[zipcode]} Miles away
      </li>
    {/each}
  </ul>
  {/if}


<!-- Range -->
  <div class:purple-theme={theme === "purple"}>
    <label for="basic-range">Range Label</label>
    <Range on:change={(e) => value = e.detail.value} id="basic-slider" />
  </div>
  <h3>
    {value}
  </h3>
    </div>

    {#if zipFromUserRadius}
  <ul>
    {#each zipFromUserRadius as zipcode}
      <li>
        {zipcode} : {distanceFromUser[zipcode]} Miles away
      </li>
    {/each}
  </ul>
  {/if}

