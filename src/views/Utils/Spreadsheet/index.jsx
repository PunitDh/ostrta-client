import PageContainer from "src/components/container/PageContainer";
import Sheet from "./Sheet";
import TestSheet from "./TestSheet";

export default function Spreadsheet() {
  return (
    <PageContainer title="Spreadsheet">
      <Sheet
        maxColumns={12}
        maxRows={12}
        formulaField={true}
        statusField={true}
        content={{
          A1: 34,
          B1: 45,
          A2: "=A1+B1",
        }}
      />
      <TestSheet />
    </PageContainer>
  );
}
