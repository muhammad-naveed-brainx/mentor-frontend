<template>
  <div>
  <div>
  </div>
  <div ref="editor" id="editor">
  </div>
  </div>
</template>
<script setup>
import Quill from 'quill';
import QuillMention from 'quill-mention';
// import "quill-mention";
import "quill/dist/quill.snow.css";
import router from "@/router";
import {computed, onMounted, ref, watch} from "vue";
const editor = ref(null)

const logout = () => {
  window.localStorage.removeItem('api_token');
  router.push({name: 'login'})
}
onMounted(()=>{
  Quill.register({ 'modules/mention': QuillMention }, true);
  const quill = new Quill(editor.value, {
    modules: {
      mention: {
        allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
        mentionDenotationChars: ["@", "#"],
        source: function(searchTerm, renderList, mentionChar) {
          let values = atValues
          if (searchTerm.length === 0) {
            renderList(values, searchTerm)
          }
          else {
            const matches = [];
            for (let i = 0; i < values.length; i++) {
              if (~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())) {
                matches.push(values[i]);
              }
            }
            renderList(matches, searchTerm);
          }
        }
      },
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['image', 'code-block'],
      ],
    },
    placeholder: 'Compose an epic...',
    theme: 'snow', // or 'bubble'
  });
})
</script>
<style>
</style>
