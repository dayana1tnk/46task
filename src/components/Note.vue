<template>
  <div>
    <div>{{ note }}</div>
    <button @click="deleteNote">Удалить</button>
    <button @click="editNote">Изменить</button>
  </div>
</template>


<script>
export default {
  props: ['note'],
  methods: {
    deleteNote() {
      this.$emit('deleteNote');
    },
    editNote() {
      const updatedNote = prompt('Изменить заметку', this.note);
      if (updatedNote !== null) {
        this.$emit('editNote', updatedNote);
      }
    },
  },
};
</script>


<style scoped>
.note {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
}

.note-content {
  flex: 1;
  margin-right: 10px;
  font-size: 16px;
  word-wrap: break-word;
}

.note-buttons {
  display: flex;
  flex-direction: column;
}

.delete-button,
.edit-button {
  padding: 5px 10px;
  margin: 5px 0;
  border: none;
  background-color: #ff6b6b;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.delete-button:hover,
.edit-button:hover {
  background-color: #d9534f;
}
</style>




