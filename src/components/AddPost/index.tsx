// EditorComponent.tsx
import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@toast-ui/react-editor";
import { TextField, Button } from "@mui/material";

import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "./editor.css";
import { HTML_INIT } from "@src/utils/constant";

const AddPostView: React.FC = () => {
  const editorRef = useRef<Editor>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const savedTitle = localStorage.getItem("postTitle");
    // const savedContent = localStorage.getItem("postContent");
    if (savedTitle) setTitle(savedTitle);
    // if (savedContent && editorRef.current) {
    if (HTML_INIT && editorRef.current) {
      console.log("CONTENT", HTML_INIT);

      editorRef.current.getInstance().setMarkdown(HTML_INIT);
    }
  }, []);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    localStorage.setItem("postTitle", e.target.value);
  };

  const handleEditorChange = () => {
    if (editorRef.current) {
      const editorContent = editorRef.current.getInstance().getHTML();
      setContent(editorContent);
      localStorage.setItem("postContent", editorContent);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log("content", content);
    // console.log("html", editorRef.current?.getInstance().getHtml());

    e.preventDefault();
    if (!title || !content) {
      alert("제목과 내용은 필수입니다.");
      return;
    }
    // 제출 후 내용 초기화
    setTitle("");
    setContent("");
    if (editorRef.current) {
      editorRef.current.getInstance().setMarkdown("");
    }
    localStorage.removeItem("postTitle");
    localStorage.removeItem("postContent");
  };

  return (
    <div style={{ width: "90vw" }}>
      <h1>Toast UI Editor Example</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          id="title"
          label="Title"
          defaultValue="Hello World"
          value={title}
          onChange={handleTitleChange}
          sx={{ width: "100%", my: 2 }}
        />
        <Editor
          initialValue="Hello, Toast UI Editor!"
          previewStyle="vertical"
          height="600px"
          initialEditType="markdown"
          useCommandShortcut={true}
          ref={editorRef}
          onChange={handleEditorChange}
          toolbarItems={[
            ["heading", "bold", "italic", "strike"],
            ["hr", "quote"],
            ["ul", "ol", "task"],
            ["link"],
          ]}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddPostView;
