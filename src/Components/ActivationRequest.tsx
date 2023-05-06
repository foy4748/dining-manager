import { useState } from "react";
import Class_activationRequest from "../Classes/ActivationRequest";
import { Formik, Field, Form } from "formik";
import { Button } from "rsuite";
import axios from "axios";
import ApiRoutes from "../ApiRoutes";
import DatePickerField from "../Forms/DatePickerField";
import getTommorowDate from "../Utilities/getTommorowDate";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

export default function ActivationRequest() {
  // [IMPORTANT]
  // Load Committe Data during login
  // to access Committe number
  const [disableSubmit, setDisableSubmit] = useState<Boolean>(false);

  const { data: activationRequestData, isLoading } = useQuery({
    queryKey: ["activation-request-data"],
    queryFn: async () => {
      try {
        const options = {
          headers: {
            card_no: "242",
            User_id: "123456789123456789123456",
          },
        };
        const res = await fetch(ApiRoutes.get.activate_meal, options);
        const data = await res.json();
        console.log(data);
        setDisableSubmit(false);
        return data || {};
      } catch (error) {
        console.error(error);
      }
    },
  });

  const handleSubmit = async (submittingData: unknown) => {
    setDisableSubmit(true);
    toast("Posting Data", { icon: "⌛" });
    const formValues = new Class_activationRequest(
      "123456789123456789123456",
      "242",
      "206",
      "2023-03-07"
    );

    try {
      const URL = ApiRoutes.post.activate_meal;
      const { data } = await axios.post(URL, formValues, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(data);
      toast("Successfully Posted", { icon: "🟢" });
    } catch (error) {
      console.error(error);
      toast("Something Went Wrong", { icon: "🔴" });
    }
    setDisableSubmit(false);
  };

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Send Meal Activation Request</h1>
      <br />
      <div>
        <Formik
          initialValues={{ activation_date: getTommorowDate() }}
          onSubmit={handleSubmit}
        >
          <Form>
            <DatePickerField name="activation_date" oneTap={true} />
            <Button disabled={disableSubmit} type="submit">
              Submit
            </Button>
          </Form>
        </Formik>
      </div>
      <p>{JSON.stringify(activationRequestData)}</p>
    </div>
  );
}
