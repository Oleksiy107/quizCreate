export interface ObjQuiz {
  name: string;
  title: string;
  sec: number;
  text: string;
  Questions: string | number;
}
const dataQuiz: ObjQuiz = {
  name: "1",
  title: "2",
  sec: 3,
  text: "4",
  Questions: "5",
};
export default dataQuiz;
// export const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const { name, value } = e.target;
//   setInfoQuiz((prevInfoQuiz) => ({ ...prevInfoQuiz, [name]: value }));
// };

// const UrgeWithPleasureComponent = () => (
//   <CountdownCircleTimer
//     isPlaying
//     duration={obj.sec}
//     colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
//     colorsTime={[7, 5, 2, 0]}
//   >
//     {({ remainingTime }) => remainingTime}
//   </CountdownCircleTimer>
// );
// export default UrgeWithPleasureComponent;
