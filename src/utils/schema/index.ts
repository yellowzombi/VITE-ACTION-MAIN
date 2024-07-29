import { z } from "zod";

export const editorSchema = z.object({
  content: z.string().min(1, "내용을 입력해주세요."),
});
