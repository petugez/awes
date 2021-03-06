export class LeaveRequest {
    public id: Number ;
    public name: String;
    public surname: String;
    public place:String;
    public from: String;
    public to: String;
    public requestType: LeaveRequestType;
    public note:String;
    public halfDay:boolean;
}
export class LeaveRequestType{
    public id: Number;
    public name:String;
}