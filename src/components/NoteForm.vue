
<template>
  <div>
    <form @submit="addNote" class="note-form">
      <input v-focus v-model="newNote" class="note-input" placeholder="Введите вашу заметку" />
      <button type="submit" class="add-button">Добавить</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newNote: '',
    };
  },
  methods: {
    addNote() {
      if (this.newNote.trim() !== '') {
        this.$emit('addNote', this.newNote);
        this.newNote = '';
      }
    },
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
};
</script>


<style scoped>
.note-form {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
}

.note-input {
  width: 100%;
  padding: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 30px;
  outline: none;
}

.add-button {
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 20px 30px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-button:hover {
  background-color: #45a049;
}
</style>