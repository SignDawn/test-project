<template>
  <div ref="monacoDom" class="monaco" style="height: 500px"></div>
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  PropType,
  reactive,
  ref,
  watch,
} from "vue";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";
import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution";
import "monaco-editor/esm/vs/basic-languages/xml/xml.contribution";
import "monaco-editor/esm/vs/basic-languages/markdown/markdown.contribution";
import "monaco-editor/esm/vs/editor/editor.all.js";

import "monaco-editor/esm/vs/language/typescript/monaco.contribution";
import "monaco-editor/esm/vs/language/json/monaco.contribution";

export default defineComponent({
  name: "EditorModal",
  props: {
    code: {
      type: String,
      default: () => {
        return "";
      },
    },
    language: {
      type: String,
      default: () => {
        return "json";
      },
      validator: (value: string) => {
        // 这个值必须匹配下列字符串中的一个
        return ["javascript", "json", "markdown", "xml"].includes(value);
      },
    },
  },
  emits: ["changeCode"],
  setup(props, { emit }) {
    const curTheme = "vs-dark"; // 暗主题
    const monacoDom = ref<any>(null);

    let editor: any = null;
    nextTick(() => {
      editor = monaco.editor.create(monacoDom.value, {
        theme: curTheme,
        automaticLayout: true,
        language: props.language,
      });
    });

    onUnmounted(() => {
      editor.dispose();
    });

    return { monacoDom };
  },
});
</script>
