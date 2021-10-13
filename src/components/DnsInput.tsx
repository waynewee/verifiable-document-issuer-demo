import { CopyOutlined } from "@ant-design/icons";
import { Button, Col, Input, message, Row } from "antd";
import { FunctionComponent, useContext, useRef } from "react";
import { AppContext } from "../AppContext";

export const DnsInput: FunctionComponent = () => {
  const { documentStoreAddress, setDns, dns, setCurrentStep, currentStep } =
    useContext(AppContext);

  const dnsRef = useRef<any>();

  const onCopy = (e: any) => {
    navigator.clipboard.writeText(e.target.innerText);
    message.success("Successfully copied!");
  };

  const onConfirm = () => {
    setDns(dnsRef.current.state.value as string);
  };

  return (
    <div>
      <Row
        align="top"
        style={{
          fontFamily: "monospace",
          backgroundColor: "#011627",
          padding: 12,
          borderRadius: 6,
          color: "white",
          cursor: "copy",
          marginBottom: 16,
        }}
        onClick={onCopy}
      >
        <Col span={23}>
          <span>
            open-attestation dns txt-record create --address&nbsp;
            {documentStoreAddress} --network-id 3
          </span>
        </Col>
        <Col style={{ textAlign: "end" }} span={1}>
          <CopyOutlined />
        </Col>
      </Row>
      <div>
        <Input
          defaultValue={dns}
          style={{ marginBottom: 12 }}
          ref={dnsRef}
          placeholder="few-green-cat.sandbox.openattestation.com"
        />
        <Row gutter={12}>
          <Col>
            <Button type={dns ? "default" : "primary"} onClick={onConfirm}>
              Confirm
            </Button>
          </Col>
          {dns && (
            <Col>
              <Button
                type="primary"
                onClick={() => setCurrentStep(currentStep + 1)}
              >
                Next
              </Button>
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
};
