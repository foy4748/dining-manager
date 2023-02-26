export default class Class_deactivationRequest {
  public User_id;
  public card_no;
  public committee_no;
  public deactivation_start_date;
  public deactivation_end_date;

  constructor(
    User_id: string,
    card_no: string,
    committee_no: string,
    deactivation_start_date: string,
    deactivation_end_date: string
  ) {
    this.User_id = User_id;
    this.card_no = card_no;
    this.committee_no = committee_no;
    this.deactivation_start_date = deactivation_start_date;
    this.deactivation_end_date = deactivation_end_date;
  }
}
