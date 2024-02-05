export const arrUsers: string[] = ["user1", "user2"];
enum StrNum {
  String = "string",
  Number = "number",
}
type objTitle = {
  name: StrNum.String;
  title: StrNum.String;
  sec: StrNum.Number;
};

type objTypeQuestion = {
  questionTitle: string | number;
  option: string | number;
  correctAnswer: string | number;
};
export const objQuestion: objTypeQuestion = {
  questionTitle: "",
  option: "",
  correctAnswer: "",
};
