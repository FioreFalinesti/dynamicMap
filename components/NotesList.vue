<template>
  <div>
    <ul style="list-style-type: none">
      <li
        v-for="note in notes"
        :key="note.id"
        style="
          margin: 15px;
          border: 1px solid black;
          width: 300px;
          background: #333;
          padding: 10px;
        "
      >
        <p style="margin: 0">
          {{ note.date }}
          <button @click="deleteNote(note.id)" style="margin-left: 150px">
            Delete
          </button>
        </p>
        <h3 style="margin-bottom: 5px">{{ note.text }}</h3>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from "~/stores/store";

const props = defineProps({
  notes: Array,
});
const noteStore = useStore();

const deleteNote = async (id) => {
  await noteStore.deleteNote(id);
};
</script>
