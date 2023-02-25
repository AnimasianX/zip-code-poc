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
</div>
