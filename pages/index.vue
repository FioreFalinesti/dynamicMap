<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="text" type="text" placeholder="Enter a new note..." />
    <button type="submit">Add Note</button>
  </form>
  <div>
    <NotesList :notes="noteStore.notes"></NotesList>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "~/stores/store";
import NotesList from "~/components/NotesList.vue";

const text = ref("");
const noteStore = useStore();
noteStore.fetchNotes();

const handleSubmit = async () => {
  if (text.value.trim()) {
    await noteStore.addNote(text.value);
    text.value = "";
  }
};
</script>
