import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css"; // 에디터 스타일 시트
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css"; // 다크 테마 스타일 시트 (옵션)
import "./editor.css";

export default function EditorComponent() {
  return (
    <div>
      <h1>Toast UI Editor Example</h1>
      <Editor
        initialValue="Hello, Toast UI Editor!"
        previewStyle="vertical" // 미리보기 스타일: 탭 형태의 'tab' 또는 세로로 나란히 'vertical'
        height="600px"
        initialEditType="markdown" // 초기 편집 형태: 'markdown' 또는 'wysiwyg'
        useCommandShortcut={true}
      />
    </div>
  );
}
