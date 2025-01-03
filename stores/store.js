import { defineStore } from "pinia";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

export const useStore = defineStore("store ", {
  state: () => ({
    notes: [],
  }),
  actions: {
    // fetching all notes
    async fetchNotes() {
      const { $db } = useNuxtApp();

      const snapshot = await getDocs(collection($db, "notes"));
      this.notes = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    },

    // add new note
    async addNote(text) {
      const { $db } = useNuxtApp();
      const newNote = {
        text,
        date: "2025-01-02",
      };

      const docRef = await addDoc(collection($db, "notes"), newNote);

      this.notes.push({ id: docRef.id, ...newNote });
    },

    // update note
    async updateNote(id, updates) {
      const { $db } = useNuxtApp();
      const docRef = doc($db, "notes", id);

      await updateDoc(dofRef, updates);

      const index = this.notes.findIndex((note) => note.id === id);
      if (index !== -1) {
        this.notes[index] = { ...this.notes[index], ...updates };
      }
    },

    // delete note
    async deleteNote(id) {
      const { $db } = useNuxtApp();
      const docRef = doc($db, "notes", id);

      await deleteDoc(docRef);

      this.notes = this.notes.filter((note) => note.id !== id);
    },
  },
});
