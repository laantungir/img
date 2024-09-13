<script>
  import { onMount } from "svelte";
  import {arrOfObjSort} from "$lib/utilities.mjs"
  import {jsonVersion} from "$lib/version.mjs"
  import { VERSION } from "svelte/compiler";

  
  
  let jsonImg = []




    
  const divClicked = (Key) => {
    console.log("Clicked", `https://laantungir.github.io/img_repo/${Key}`);
    navigator.clipboard.writeText(
      `https://laantungir.github.io/img_repo/${Key}`
    );
    for (const [index, [Img, value]] of Object.entries(
      Object.entries(jsonImg)
    )) {
      if (Img == Key) {
        console.log(`${index}: ${Key} = ${value}`);
        if (value.posted == "") {
        }
      }
    }
  };



  const strFileSize = (Size) => {
    let numSize = Number(Size)

    if (numSize > 1000000000){
      return ((numSize / 1000000000 ).toFixed(0) + "G")
    }

    if (numSize > 1000000){
      return ((numSize / 1000000).toFixed(0) + "M")
    }

    if (numSize > 1000){
      return ((numSize / 1000 ).toFixed(0) + "K")
    }
  }
// PAD A NUMBER WITH LEADING ZEROES
const pad = (num, size) => {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
};
  const TC = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var year = a.getFullYear();
    var monthNum = a.getMonth() + 1
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = pad(a.getHours(), 2);
    var min = pad(a.getMinutes(), 2);
    var sec = pad(a.getSeconds(), 2);
    // var time = date + " " + month + " " + year + " " + hour + ":" + min + "." + sec;
    // var time = year + monthNum + date + " " + hour + ":" + min ;
    var time = `${year}${monthNum}${date} ${hour}:${min}`;

    return time;
}


onMount(async () => {
    const url = "https://laantungir.github.io/img_repo/images.json"; 
    
    try {
      const response = await fetch(url);
      jsonImg= await response.json();

      console.log(jsonImg, jsonImg.length)
      jsonImg = await arrOfObjSort(jsonImg,"created", false)
      console.log(jsonImg, jsonImg.length)

      jsonImg = jsonImg.slice(0,100)
      
    } catch (error) {
      console.error("Error fetching the page:", error);
    }
  });


</script>

<!-- {jsonImg} -->
<!-- {JSON.stringify(jsonImg)} -->
<h1>Gallery {jsonImg.length}</h1>

<div id="divMain">
  {#each jsonImg  as Each}
    <div class="divBoxes">
      <div class="divTopBox">
        <button
          class="btnImg"
          on:click={() => {
            window.open(`https://laantungir.github.io/img_repo/${Each.file}`, "_blank");
          }}
        >
          <img class="clsThumb" src={`https://laantungir.github.io/img_repo/${Each.file}`} alt="pic" />
        </button>
      </div>
      <button
        class="btnInfo"
        on:click={() => {
          divClicked(Key);
        }}>{`${Each.dimensions[0]}:${Each.dimensions[1]} ${strFileSize(Each.size)} ${TC(Each.created)} `}</button
      >
    </div>
  {/each}
</div>

<div id="divFooter">
  {Object.entries(jsonImg).length} i, v {jsonVersion.version}
</div>

<style>
  @font-face {
    font-family: "GlobalFont";
    src: url("/fonts/SFUIText-Bold.otf");
  }

  h1 {
    font-family: "GlobalFont";
    font-size: 10vw;
    margin: 1vw;
    width: 100%;
    text-align: center;
  }

  #divBody {
    /* padding: 1em; */
    font-family: "GlobalFont";

    box-sizing: border-box;
    margin: 0;
    padding-top: 9vw;
  }

  #divMain {
    font-family: "GlobalFont";
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .divBoxes {
    flex-basis: calc(10% - 16px);
    margin: 7px;
    /* height:calc(10% - 16px); */
    height: 250px;
    border: 1px solid black;
    border-radius: 4px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    overflow: hidden;
  }

  .btnImg {
    border: none;
    /* border: 1px solid transparent; */
    background-color: transparent;
    padding: 0;
    margin: 0;
  }
  .btnImg:hover {
    border: 2px solid red;
    background-color: transparent;
    cursor: pointer;
  }

  .clsThumb {
    padding: 0;
    margin: 0;
    width: 210px;
    height: 250px;
    /* max-width: 200px;
    max-height: 200px; */
    object-fit: cover;
  }

  .btnInfo {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    border: none;
    /* border: 1px solid #eee; */
    font-size: 0.5vw;
    /* padding: 5px; */
    /* border-radius: 4px;
    margin-bottom: 8px;
    width: 90%; */
  }
  .btnInfo:hover {
    border: 1px solid black;
    background-color: red;
    cursor: pointer;
  }

  #divFooter {
    flex-basis: calc(20% - 16px);
    margin: 7px;
    /* height: 200px; */
    border: 1px solid grey;
    border-radius: 4px;
    text-align: center;
    padding: 4px;
    /* display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column; */
  }

  .divTopBox {
    /* border: 1px solid yellow; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
  }
</style>
