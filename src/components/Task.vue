<template>
  <article class="media" v-on:mouseover="toggleButtons" v-on:mouseout="toggleButtons">
    <figure class="media-left is-size-4" style="align-self: center; padding-top: 0; padding-right: 0.5rem">
      <i class="far fa-dot-circle"></i>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <small style="color: red;" v-bind:class="task.important">! Important</small>
          <br>
          {{task.title}}
        </p>
      </div>
    </div>
    <div class="buttons media-right" style="align-self: center;" v-bind:class="{'is-hidden': !showButtons}">
      <button class="button is-info"><i class="fas fa-edit"></i></button>
      <button class="button is-danger"><i class="fas fa-trash-alt"></i></button>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Task',
  props: ['task']
}
</script>

<style scoped>
  article {
    padding: 1rem;
    min-height: 40px;
  }
</style>