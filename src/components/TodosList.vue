<template>
  <div class="column is-paddingless" style="background-color: whitesmoke">
    <div class="scroll-container">
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item">
            <span class="is-size-3">Cooking</span>
          </a>
          <a class="level-item">
            <span class="icon is-size-5"><i class="fas fa-calendar"></i></span>
          </a>
        </div>
      </nav>
      <article class="media" v-on:mouseover="toggleButtons" v-on:mouseout="toggleButtons">
        <figure class="media-left is-size-4" style="align-self: center; padding-top: 0; padding-right: 0.5rem">
          <i class="far fa-dot-circle"></i>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <small style="color: red;">! Important</small>
              <br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
        </div>
        <div class="buttons media-right" style="align-self: center;" v-bind:class="{'is-hidden': !showButtons}">
          <button class="button is-info"><i class="fas fa-edit"></i></button>
          <button class="button is-danger"><i class="fas fa-trash-alt"></i></button>
        </div>
      </article>
      <article class="media" v-on:mouseover="toggleButtons" v-on:mouseout="toggleButtons">
        <figure class="media-left is-size-4" style="align-self: center; padding-top: 0; padding-right: 0.5rem">
          <i class="far fa-dot-circle"></i>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <small style="color: red;" v-bind:class="{'is-hidden': true}">! Important</small>
              <br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
        </div>
        <div class="buttons media-right" style="align-self: center;" v-bind:class="{'is-hidden': !showButtons}">
          <button class="button is-info"><i class="fas fa-edit"></i></button>
          <button class="button is-danger"><i class="fas fa-trash-alt"></i></button>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodosList'
}
</script>

<style scoped>
.level-left {
    padding-left: 3rem;
    padding-top: 0.5rem;
  }
  article {
    padding: 1rem;
    min-height: 40px;
  }
  nav.level {
    margin: 0;
  }
</style>
