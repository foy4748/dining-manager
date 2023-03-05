import Class_activationRequest from "../Classes/ActivationRequest";
import { Form, ButtonToolbar, Button } from "rsuite";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function ActivationRequest() {
  const { register, handleSubmit } = useForm();

  const onSubmition = async (data) => {
    const { card_no } = data;
    const formValues = new Class_activationRequest(
      "123456789123456789123456",
      card_no,
      "206",
      "2023-03-07"
    );
    const { data } = await axis.post(url, formValues, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <Form layout="horizontal" onSubmit={handleSubmit(onSubmition)}>
      <Form.Group controlId="activation-request-sending-form">
        <Form.ControlLabel>Card No</Form.ControlLabel>
        <Form.Control {...register("card_no")} />
      </Form.Group>
      <Form.Group>
        <ButtonToolbar>
          <Button type="submit" appearance="primary">
            Submit
          </Button>
          <Button appearance="default">Cancel</Button>
        </ButtonToolbar>
      </Form.Group>
    </Form>
  );
}
