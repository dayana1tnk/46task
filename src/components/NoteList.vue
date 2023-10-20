<template>
  <div>
    <div v-for="(note, index) in notes" :key="index">
      <note
        :note="note"
        @deleteNote="deleteNote(index)"
        @editNote="editNote(index, $event)"
      ></note>
    </div>
  </div>
</template>

<script>
import Note from './Note.vue';

export default {
  props: ['notes'],
  methods: {
    deleteNote(index) {
      this.$emit('deleteNote', index);
    },
    editNote(index, updatedNote) {
      this.$emit('editNote', index, updatedNote);
    },
  },
  components: {
    Note,
  },
};
</script>

<style scoped>
.note-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.note-item {
  width: 100%;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.note-item:hover {
  background-color: #e0e0e0;
}
</style>