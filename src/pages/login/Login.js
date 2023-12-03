import { useState, useRef } from "react";
import styles from "./login.module.css";
const Login = () => {
  //Fetch data and send to Single Component
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [isInputActive, setIsInputActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  // Event handler for input focus
  const handleInputFocus = () => {
    setIsInputActive(true);
  };

  // Event handler for input blur
  const handleInputBlur = (e) => {
    if (e.target.value !== "") return;
    setIsInputActive(false);
  };
  const imageRefs = useRef([]);
  const textSliderRef = useRef(null);
  const bulletRefs = useRef([]);

  const moveSlider = (index) => {
    setActiveIndex(index);

    // Handle images using React refs
    imageRefs.current.forEach((imgRef, i) => {
      if (imgRef) {
        imgRef.classList.remove(styles.show);
      }
      if (i + 1 === index) {
        imgRef.classList.add(styles.show);
      }
    });

    // Handle text slider using React ref
    const textSlider = textSliderRef.current;
    if (textSlider) {
      textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;
    }

    // Handle bullets using React refs
    bulletRefs.current.forEach((bulletRef, i) => {
      if (bulletRef) {
        bulletRef.classList.remove(styles.active);
      }
      if (i + 1 === index) {
        bulletRef.classList.add(styles.active);
      }
    });
  };

  return (
    <main className={isSignUpMode && styles.signUpMode}>
      <div className={styles.box}>
        <div className={styles.innerBox}>
          <div className={styles.formsWrap}>
            <form
              action="index.html"
              autocomplete="off"
              className={styles.form + " " + styles.signInForm}
            >
              <div className={styles.logo}>
                <img src="../logo.png" alt="easyclass" />
                <h4>mentor</h4>
              </div>

              <div className={styles.heading}>
                <h2>Welcome Back</h2>
                <h6>Not registred yet?</h6>
                <a
                  href="#"
                  className={styles.toggle}
                  onClick={() => {
                    setIsSignUpMode(!isSignUpMode);
                  }}
                >
                  Sign up
                </a>
              </div>

              <div className={styles.actualForm}>
                <div className={styles.inputWrap}>
                  <input
                    type="text"
                    minlength="4"
                    autocomplete="off"
                    required
                    className={
                      styles.inputField +
                      " " +
                      (isInputActive ? styles.active : "")
                    }
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  <label className={styles.label}>Name</label>
                </div>

                <div className={styles.inputWrap}>
                  <input
                    type="password"
                    minlength="4"
                    autocomplete="off"
                    required
                    className={
                      styles.inputField +
                      " " +
                      (isInputActive ? styles.active : "")
                    }
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  <label className={styles.label}>Password</label>
                </div>

                <input
                  type="submit"
                  value="Sign In"
                  className={styles.signBtn}
                />

                <p className={styles.text}>
                  Forgotten your password or you login datails?
                  <a href="#">Get help</a> signing in
                </p>
              </div>
            </form>

            <form
              action="index.html"
              autocomplete="off"
              className={styles.form + " " + styles.signUpForm}
            >
              <div className={styles.logo}>
                <img src="../logo.png" alt="easyclass" />
                <h4>mentor</h4>
              </div>

              <div className={styles.heading}>
                <h2>Get Started</h2>
                <h6>Already have an account?</h6>
                <a
                  href="#"
                  className={styles.toggle}
                  onClick={() => {
                    setIsSignUpMode(!isSignUpMode);
                  }}
                >
                  Sign in
                </a>
              </div>

              <div className={styles.actualForm}>
                <div className={styles.inputWrap}>
                  <input
                    type="text"
                    minlength="4"
                    autocomplete="off"
                    required
                    className={
                      styles.inputField +
                      " " +
                      (isInputActive ? styles.active : "")
                    }
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  <label className={styles.label}>Name</label>
                </div>

                <div className={styles.inputWrap}>
                  <input
                    type="email"
                    autocomplete="off"
                    required
                    className={
                      styles.inputField +
                      " " +
                      (isInputActive ? styles.active : "")
                    }
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  <label className={styles.label}>Email</label>
                </div>

                <div className={styles.inputWrap}>
                  <input
                    type="password"
                    minlength="4"
                    autocomplete="off"
                    required
                    className={
                      styles.inputField +
                      " " +
                      (isInputActive ? styles.active : "")
                    }
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  <label className={styles.label}>Password</label>
                </div>

                <input
                  type="submit"
                  value="Sign Up"
                  className={styles.signBtn}
                />

                <p className={styles.text}>
                  By signing up, I agree to the
                  <a href="#">Terms of Services</a> and
                  <a href="#">Privacy Policy</a>
                </p>
              </div>
            </form>
          </div>

          <div className={styles.carousel}>
            <div className={styles.imagesWrapper}>
              <img
                ref={(el) => (imageRefs.current[0] = el)}
                src="../image1.png"
                className={styles.image + " " + styles.img1 + " " + styles.show}
                alt=""
              />
              <img
                ref={(el) => (imageRefs.current[1] = el)}
                src="../image3.png"
                className={styles.image + " " + styles.img3}
                alt=""
              />
            </div>

            <div className={styles.textSlider}>
              <div className={styles.textWrap}>
                <div ref={textSliderRef} className={styles.textGroup}>
                  <h2>Create your own courses</h2>
                  <h2>Invite students to your class</h2>
                </div>
              </div>

              <div className={styles.bullets}>
                <span
                  ref={(el) => (bulletRefs.current[0] = el)}
                  className={styles.active}
                  onClick={() => moveSlider(1)}
                ></span>
                <span
                  ref={(el) => (bulletRefs.current[1] = el)}
                  onClick={() => moveSlider(2)}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
