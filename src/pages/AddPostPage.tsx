import styled from "@emotion/styled";
import AddPostView from "@src/components/AddPost";

export default function AddPostPage() {
  return (
    <Container>
      <AddPostView />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
`;
