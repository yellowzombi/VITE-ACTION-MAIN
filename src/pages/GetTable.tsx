import styled from "@emotion/styled";
import TableView from "@src/components/Table";

export default function GetTable() {
  return (
    <Container>
      <TableView />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
`;
