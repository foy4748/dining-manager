export default class ActivationRequest {
  public User_id;
  public card_no;
  public committee_no;
  public activation_date;

  constructor(
    User_id: string,
    card_no: string,
    committee_no: string,
    activation_date: string
  ) {
    this.User_id = User_id;
    this.card_no = card_no;
    this.committee_no = committee_no;
    this.activation_date = activation_date;
  }
}
