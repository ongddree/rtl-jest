export const Application = () => {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="bio">bio</label>
          <textarea id="bio" name="bio"></textarea>
        </div>
        <div>
          <label htmlFor="job-locaion">Job location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label htmlFor="">
            <input type="checkbox" id="terms" />i agree to the terms and
            conditions
          </label>
        </div>
        <button>submit</button>
      </form>
    </>
  );
};
