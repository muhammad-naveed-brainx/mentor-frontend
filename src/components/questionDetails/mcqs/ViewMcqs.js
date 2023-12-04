import styles from "./viewMcqs.module.scss";
const ViewMcqs = (props) => {
  const { slug, setOpen, question } = props;
  return (
    <div className={styles.viewMcqs}>
      <div className={styles.modal}>
        <span
          className={styles.close}
          onClick={() => {
            setOpen(false);
          }}
        >
          X
        </span>
        <h1>Question detial</h1>
        <h4> Question: {question.stem} </h4>
        {question.type !== "multiple_choice" ? (
          <></>
        ) : (
          <>
            <p className={styles.options}>A. {question.option_a} </p>
            <p className={styles.options}>B. {question.option_b} </p>
            <p className={styles.options}>C. {question.option_c} </p>
            <p className={styles.options}>D. {question.option_d} </p>
          </>
        )}

        <p>
          <span>Correct: </span>
          {question.correct_answer}
        </p>
        <p>
          <span>Explaination: </span>
          {question.explanation}
        </p>
      </div>
    </div>
  );
};

export default ViewMcqs;
