import { ArrowBack, ArrowForward } from "@mui/icons-material";
import styled from "@emotion/styled";
import { capitalize } from "lodash";
import Decimal from "./decimal.svg";

const Container = styled.span({
  width: "100%",
  height: "100%",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

const DecimalImg = styled.img({
  width: "1.5rem",
  marginTop: "-0.2rem",
});

const IconContainer = styled.span({
  position: "absolute",
  top: "50%",
  left: "20%",
});

type Props = {
  type: "increase" | "decrease";
};

const DecimalIcon = ({ type }: Props) => {
  const Icon = type === "increase" ? ArrowForward : ArrowBack;
  return (
    <Container>
      {/* <Decimal /> */}
      <DecimalImg src={Decimal} alt={`${capitalize(type)} Decimal`} />
      <IconContainer>
        <Icon style={{ width: "0.75rem", height: "0.5rem" }} />
      </IconContainer>
    </Container>
  );
};

export default DecimalIcon;
