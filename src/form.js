const Form = () => {
  const si = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    fontSize: "20px",
  };

  return (
    <div className="form">
      <p className="head" style={si}>
        <u> Student Grivance Form</u>
      </p>
      <div className="main size">
        <div className="a">
          <label>
            Student Name<span class="required">*</span>
          </label>
          <input type="text" className="inp" />
          <br />
        </div>
        <div className="a">
          <label>
            USN<span class="required">*</span>
          </label>
          <input type="Number" className="inp" />
          <br />
        </div>
        <div className="a">
          <label>
            Gender<span class="required">*</span>
          </label>
          <select name="Gender" className="inp1" required>
            <option value="Male" >-Select-</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <br />
        </div>
        <div className="a">
          <label>
            Course<span class="required">*</span>
          </label>
          <input type="text" className="inp" placeholder="BE/M.tech/M.sc/B.tech" />
          <br />
        </div>
        <div className="a">
          <label>
            Branch<span class="required" >*</span>
          </label>
          <input type="text" placeholder="CSE/Mech/IS/ECE/EE..." className="inp" />
          <br />
        </div>
        <div className="a">
          <label>
            Name of Faculty Advisor / <br />
            Class Incharge:
          </label>
          <input type="text" className="inp" />
          <br />
        </div>
        <div className="a">
          <label>
            Year / Semester <span class="required">*</span>
          </label>
          <input type="text" className="inp" />
          <br />
        </div>
        <div className="a">
          <label>Mobile :</label>
          <input type="tel" placeholder="+91-" className="inp" />
          <br />
        </div>
        <div className="a">
          <label>Email <span class="required">*</span></label>
          <input type="text" className="inp" />
          <br />
        </div>
        <div className="a">
          <label>
            Grievance Details<span class="required">*</span>
          </label>

          <textarea name="text" id="" className="inp" rows="4" cols="50"></textarea>
          <br />
        </div>
        <div className="button">
          <button type="submit" className="btn">
            Submit Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
