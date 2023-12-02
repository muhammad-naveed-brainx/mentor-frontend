import styles from "./login.module.css";
const Login = () => {
  //Fetch data and send to Single Component

  return (
    <>
      <main>
        <div className={styles.box}>
          <div className={styles.innerBox}>
            <div className={styles.formsWrap}>
              <form
                action="index.html"
                autocomplete="off"
                className={styles.signInForm}
              >
                <div className={styles.logo}>
                  <img src="../logo.png" alt="easyclass" />
                  <h4>mentor</h4>
                </div>

                <div className={styles.heading}>
                  <h2>Welcome Back</h2>
                  <h6>Not registred yet?</h6>
                  <a href="#" className={styles.toggle}>
                    Sign up
                  </a>
                </div>

                <div className={styles.actualForm}>
                  <div className={styles.inputWrap}>
                    <input
                      type="text"
                      minlength="4"
                      className={styles.inputField}
                      autocomplete="off"
                      required
                    />
                    <label>Name</label>
                  </div>

                  <div className={styles.inputWrap}>
                    <input
                      type="password"
                      minlength="4"
                      className={styles.inputField}
                      autocomplete="off"
                      required
                    />
                    <label>Password</label>
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
                className={styles.signUpForm}
              >
                <div className={styles.logo}>
                  <img src="./img/logo.png" alt="easyclass" />
                  <h4>easyclass</h4>
                </div>

                <div className={styles.heading}>
                  <h2>Get Started</h2>
                  <h6>Already have an account?</h6>
                  <a href="#" className={styles.toggle}>
                    Sign in
                  </a>
                </div>

                <div className={styles.actualForm}>
                  <div className={styles.inputWrap}>
                    <input
                      type="text"
                      minlength="4"
                      className={styles.inputField}
                      autocomplete="off"
                      required
                    />
                    <label>Name</label>
                  </div>

                  <div className={styles.inputWrap}>
                    <input
                      type="email"
                      className={styles.inputField}
                      autocomplete="off"
                      required
                    />
                    <label>Email</label>
                  </div>

                  <div className={styles.inputWrap}>
                    <input
                      type="password"
                      minlength="4"
                      className={styles.inputField}
                      autocomplete="off"
                      required
                    />
                    <label>Password</label>
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
                  src="../image1.png"
                  className={
                    styles.image + " " + styles.img1 + " " + styles.show
                  }
                  alt=""
                />
                <img
                  src="..image2.png"
                  className={styles.image + " " + styles.img2}
                  alt=""
                />
                <img
                  src="../image3.png"
                  className={styles.image + " " + styles.img3}
                  alt=""
                />
              </div>

              <div className={styles.textSlider}>
                <div className={styles.textWrap}>
                  <div className={styles.textGroup}>
                    <h2>Create your own courses</h2>
                    <h2>Customize as you like</h2>
                    <h2>Invite students to your class</h2>
                  </div>
                </div>

                <div className={styles.bullets}>
                  <span className={styles.active} data-value="1"></span>
                  <span data-value="2"></span>
                  <span data-value="3"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
