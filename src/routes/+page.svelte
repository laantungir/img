<script>
    import { onMount } from "svelte";
    import { jsonImg } from "$lib/images.mjs";

    const divClicked = (Key) => {
        console.log("Clicked", `https://teknari.github.io/img/${Key}`);
        navigator.clipboard.writeText(`https://teknari.github.io/img/${Key}`);
        for (const [index, [Img, value]] of Object.entries(Object.entries(jsonImg))) {
            if (Img == Key){
                console.log(`${index}: ${Key} = ${value}`);
                if (value.posted == "") {

                }
            }

        }

    };
</script>

<!-- {jsonImg} -->
<!-- {JSON.stringify(jsonImg)} -->
<h1>Gallery</h1>

<div id="divMain">
    {#each Object.entries(jsonImg) as [Key, Value]}
        <div class="divBoxes">
            <div class="divTopBox">
            <button class="btnImg"
                on:click={() => {
                    window.open(`https://teknari.github.io/img/${Key}`, "_blank");
                }}
            >

                <img class="clsThumb" src={`https://teknari.github.io/img/${Key}`} alt="pic" />
            </button>
        </div>
            <button  class="btnInfo" on:click={()=>{divClicked(Key)}}>{`${Value.dimensions[0]}:${Value.dimensions[1]} ${Value.size} ${Value.uploaded} ${Value.posted}`}</button>
        </div>
    {/each}
</div>

<!-- <table>
    {#each Object.entries(jsonImg) as [Key, Value]}
        <tr>
            <img class="clsThumb" src={`https://teknari.github.io/img/${Key}`} />
            <td> <a href={`https://teknari.github.io/img/${Key}`}> {`https://teknari.github.io/img/${Key}`}</a></td>
            <td>{Value.timestamp}</td>
            <td>{Value.size}</td>
            <td>{Value.dimensions}</td>
        </tr>
    {/each}
</table> -->

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
        flex-basis: calc(20% - 16px);
        margin: 7px;
        height: 200px;
        border: 1px solid black;
        border-radius: 4px;

        display: flex;
        justify-content:space-between;
        align-items: center;
        flex-direction: column;
    }
    /* .divBoxes:active {
        background-color: gray;
    } */

    .divTopBox{
        /* border: 1px solid yellow; */
        display: flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
        height: 100%;
    }

    .clsThumb {
        padding: 0;
        margin: 0;
        max-width: 150px;
        max-height: 150px;
    }

    .btnInfo {
        background-color: white;
        border: 1px solid #eee;
        font-size: 0.8vw;
        padding: 5px;
        border-radius: 4px;
        margin-bottom: 8px;
        width: 90%;
    }
    .btnInfo:hover {
        border: 1px solid black;
        background-color: transparent;
    }
    .btnImg {
        border: none;
        border: 1px solidtransparent;
        background-color: transparent;
        padding: 0;
        margin: 0;
    }
    .btnImg:hover {
        border: 1px solid black;
        background-color: transparent;
    }
</style>
