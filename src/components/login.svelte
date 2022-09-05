<script>
  let input = "";
  let wrongPass = false;
  export let currentScreen;
  let success = new Audio("/unlock_sound.mp3");
  let fail = new Audio("/fail_sound.mp3");
  function onLogin() {
    if (input == "1234") {
      success.play();
      currentScreen = "desktop";
    } else {
      fail.play();
      wrongPass = true;
      input = "";
    }
  }
</script>

<div class="base">
  <div class="header">
    <div class="headerText">ESMA</div>
    <div class="profilePic">
      <img src="/profilpic.png" />
    </div>
    <div class="passwordContainer">
      {#if wrongPass == false}
        Enter password
      {/if}
      {#if wrongPass == true}
        <div class="errorText">Wrong passord!</div>
      {/if}
      <!-- svelte-ignore a11y-autofocus -->
      <input
        class="inputField"
        autofocus={true}
        type="password"
        bind:value={input}
      />
      <input type="button" value="LOGIN" class="loginBtn" on:click={onLogin} />
    </div>
  </div>
</div>

<style>
  .base {
  }

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 25rem;
    color: white;
    gap: 1.5rem;
  }
  .headerText {
    font-size: 3rem;
  }
  .profilePic {
    width: 10rem;
    height: 10rem;
    background-color: white;
    border: 4px solid;
  }

  .passwordContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .inputField {
    height: 1rem;
  }
  .loginBtn {
    margin-top: 0.2rem;
    width: 8rem;
  }

  .errorText {
    font-weight: 900;
    font-size: 1.2rem;
    color: red;
  }
</style>
