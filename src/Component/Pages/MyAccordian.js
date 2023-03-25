import Accordion from "react-bootstrap/Accordion";
import "./MyAccordian.css";

function MyAccordian() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is IEO?</Accordion.Header>
        <Accordion.Body>
          An Initial Exchange Offering (IEO) is the Cryptocurrency Exchange
          equivalent to a stock launch or Initial Public Offering (IPO). An IEO
          is the process of digital asset (e.g. coins or tokens) procurement
          through an established exchange for the purpose of raising capital for
          start-up companies
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How to become a partner?</Accordion.Header>
        <Accordion.Body>
          Contact support and they will help you, we have many kind of
          partnership.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Why create your own blockchain?</Accordion.Header>
        <Accordion.Body>
          We believe we have a very unique concept here, having our own
          blockchian makes it easier for us to achieve our goals.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Can all be a part of your concept?</Accordion.Header>
        <Accordion.Body>
          Yes and No, for the most part you have to be over 18, but each company
          usually follows the rules where the person comes from.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>What is the full meaning of NFT??</Accordion.Header>
        <Accordion.Body>
          Non-fungible token: a : a unique digital identifier that cannot be
          copied, substituted, or subdivided, that is recorded in a blockchain,
          and that is used to certify authenticity and ownership.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MyAccordian;
