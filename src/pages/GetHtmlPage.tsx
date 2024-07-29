import { Viewer } from "@toast-ui/react-editor";
import styled from "@emotion/styled";
import { HTML_INIT } from "@src/utils/constant";

export default function GetHtmlPage() {
  console.log("Get HTML : ", HTML_INIT);
  return (
    <Container>
      <Viewer initialValue={HTML_INIT} viewer={true} />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
`;
