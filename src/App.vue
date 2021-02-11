<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-brand href="#">Que</b-navbar-brand>
    </b-navbar>

    <TaskList />
    <TaskBoard />
  </div>
</template>

<script>
import TaskBoard from "./pages/TaskBoard";
import TaskList from "./pages/TaskList";

export default {
  name: "App",
  components: {
    TaskBoard,
    TaskList,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
