<template>
  <div id="app">
    <h1>Заметки</h1>

    <button @click="toggleNoteForm">Добавить заметку</button>

    <note-form v-if="showNoteForm" @addNote="addNote"></note-form>

    <note-list :notes="notes" @deleteNote="deleteNote" @editNote="editNote"></note-list>
  </div>
</template>

<script>

import NoteList from './components/NoteList.vue';
import NoteForm from './components/NoteForm.vue';

export default {
  data() {
    return {
      showNoteForm: false,
      notes: [],
    };
  },
  methods: {
    toggleNoteForm() {
      this.showNoteForm = !this.showNoteForm;
    },
    addNote(newNote) {
      this.notes.push(newNote);
      this.showNoteForm = false;
    },
    deleteNote(index) {
      this.notes.splice(index, 1);
    },
    editNote(index, updatedNote) {
      this.notes[index] = updatedNote;
    },
  },
  components: {
    NoteList,
    NoteForm,
  },
};
</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  margin-top: 2rem;
}

button {
  margin-bottom: 1rem;
}

h1 {
  color: #42b983;
}
</style>


<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  padding: 20px;
}

.app-title {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>