import { Viewer } from "@toast-ui/react-editor";
import styled from "@emotion/styled";
import { MARKDOWN_INIT } from "@src/utils/constant";

export default function GetMarkdownPage() {
  console.log("Get Markdown : ", MARKDOWN_INIT);
  return (
    <Container>
      <Viewer initialValue={MARKDOWN_INIT} viewer={true} />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
`;
