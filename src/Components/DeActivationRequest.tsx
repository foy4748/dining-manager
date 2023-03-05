const SERVER_URL = "http://localhost:3001";
import DatePicker from "rsuite/DatePicker";
import Button from "rsuite/Button";
import { useState } from "react";
import axios from "axios";
import styles from "./DeActivationRequest.module.css";
import moment from "moment";
import Class_deactivationRequest from "../Classes/DeactivationRequest";
import getTommorowDate from "../Utilities/getTommorowDate";
import { useQuery } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { Divider } from "rsuite";

export default function DeActivationRequest() {
  // Generating Tomorrow Date for initial value
  const tomorrowDate = getTommorowDate();
  const [selectedDate, setDate] = useState<Date>(tomorrowDate);
  const [disableSubmit, setDisableSubmit] = useState<Boolean>(true);

  // Grabbing De-activation Data

  const {
    data: deactivationData,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["deactivation-data"],
    queryFn: async () => {
      try {
        const options = {
          headers: {
            card_no: "242",
            User_id: "123456789123456789123456",
          },
        };
        const res = await fetch(`${SERVER_URL}/deactivate-meal/`, options);
        const data = await res.json();
        setDisableSubmit(false);
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  });

  const handleChange = (value: Date) => {
    console.log(value);
    setDate(value);
  };

  const handleSubmit = async () => {
    setDisableSubmit(true);
    const submitObj = new Class_deactivationRequest(
      "123456789123456789123456",
      "242",
      "104",
      moment(selectedDate).format("YYYY-MM-DD"),
      moment(selectedDate).format("YYYY-MM-DD")
    );

    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitObj),
      };
      const res = await fetch(`${SERVER_URL}/deactivate-meal/`, options);
      const result = await res.json();
      if (result.alreadyExists) {
        toast("Already Exists", { icon: "💧" });
      } else {
        toast("Successfully Posted", { icon: "🟢" });
      }
      refetch();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
    setDisableSubmit(false);
  };

  if (isLoading) {
    return (
      <div className={styles.deactivateContainer}>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <section className={styles.deactivateContainer}>
      <div>
        <div>
          <h1>Deactivate Meal</h1>
          <h2 className="subtitle">Please, select date of deactivation</h2>
        </div>
        <Divider />
        <div className={styles.deactivateContainer}>
          <DatePicker oneTap value={selectedDate} onChange={handleChange} />
          <Button onClick={handleSubmit} disabled={disableSubmit}>
            Submit
          </Button>
        </div>
        <Divider />
        <div>
          <ul>
            {deactivationData &&
              deactivationData.length > 0 &&
              deactivationData.map((itm: any, idx: number) => (
                <li key={idx}>
                  Issued at:{" "}
                  {moment(itm.deactivation_start_date).format("YYYY-MM-DD")}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
