import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles["about-container"]}>
      <h1>About Me</h1>
      <p>
        Currently in my final year at the University of Leeds pursuing a Bachelor's
        degree in Computer Science. My academic experiences have provided me with proficiency
        in widely used languages like C, Java, and JavaScript and a deep understanding of modern
        software development methodologies. In addition to this, modules in discrete mathematics,
        Algorithms and Data Structures have improved my analytical thinking and problem solving skills.
      </p>
      <h2>Second Year Results - Achieved First Class Grade (77% avg)</h2>
      <table>
        <thead>
          <tr>
            <th>Module</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Algorithms I</td>
            <td>1:1 (88%)</td>
          </tr>
          <tr>
            <td>Algorithms II</td>
            <td>1:1 (72%)</td>
          </tr>
          <tr>
            <td>Networks</td>
            <td>1:1 (89%)</td>
          </tr>
          <tr>
            <td>Artificial Intelligence</td>
            <td>1:1 (77%)</td>
          </tr>
          <tr>
            <td>Formal Languages & Finite Automata</td>
            <td>1:1 (80%)</td>
          </tr>
          <tr>
            <td>Software Engineering Project</td>
            <td>1:1 (75%)</td>
          </tr>
          <tr>
            <td>Numerical Computation</td>
            <td>1:1 (72%)</td>
          </tr>
          <tr>
            <td>User Interfaces</td>
            <td>1:1 (72%)</td>
          </tr>
          <tr>
            <td>Web Application Development</td>
            <td>1:1 (76%)</td>
          </tr>
          <tr>
            <td>Data Mining</td>
            <td>1:1 (87%)</td>
          </tr>
          <tr>
            <td>Operating Systems</td>
            <td>2:1 (68%)</td>
          </tr>
          <tr>
            <td>Software Engineering Principles</td>
            <td>2:1 (65%)</td>
          </tr>
        </tbody>
      </table>
      {/* <h2>First Year Results</h2>
      <table>
        <thead>
          <tr>
            <th>Module</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Algorithms I</td>
            <td>1:1 (88%)</td>
          </tr>
          <tr>
            <td>Algorithms II</td>
            <td>1:1 (72%)</td>
          </tr>
          <tr>
            <td>Networks</td>
            <td>1:1 (89%)</td>
          </tr>
          <tr>
            <td>Artificial Intelligence</td>
            <td>1:1 (77%)</td>
          </tr>
          <tr>
            <td>Formal Languages & Finite Automata</td>
            <td>1:1 (80%)</td>
          </tr>
          <tr>
            <td>Software Engineering Project</td>
            <td>1:1 (75%)</td>
          </tr>
          <tr>
            <td>Numerical Computation</td>
            <td>1:1 (72%)</td>
          </tr>
          <tr>
            <td>User Interfaces</td>
            <td>1:1 (72%)</td>
          </tr>
          <tr>
            <td>Web Application Development</td>
            <td>1:1 (76%)</td>
          </tr>
          <tr>
            <td>Data Mining</td>
            <td>1:1 (87%)</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};

export default About;
