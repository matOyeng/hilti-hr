import React from 'react'
import styles from "@/app/ui/dashboard/jobBoard/add/add.module.css"

const AddJobPage = () => {

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Job Requisition Request</h2>
      <table>
        <tbody>
          <tr>
            <td><div>Job title </div>
              A job title must describe one position only.
            </td>
            <td><form action="" className={styles.form}>
              <input type="text" placeholder='e.g."Full-Stack Developer"' name='jobtitle' required /></form></td>
          </tr>
          <tr>
            <td><div>Job description</div>
              Provide a short description about the job. Keep it short and to the point.</td>
            <td><form action="" className={styles.form}>
            <textarea name="desc" id="desc" cols={30} rows={10} placeholder='Description'></textarea></form></td>
          </tr>
          <tr>
            <td><div>Job Vacancy</div>
              Choose your job vacancy available here.</td>
            <td><form action="" className={styles.form}>
              <select name="cat" id="cat">
                <option value="general">Job Vacancy</option>
                <option value="kualalumpur">Kuala Lumpur, Malaysia</option>
                <option value="penang">Penang, Malaysia</option>
                <option value="shahalam">Shah Alam, Malaysia</option></select></form></td>
          </tr>
          <tr>
            <td><div>Job requirements</div>
              Provide a short requirement that related of the job.</td>
            <td><form action="" className={styles.form}>
              <input type="text" placeholder='Job Requirements' name='jobreq' required /></form></td>
          </tr>
          <tr>
            <td><div>Employement type</div>
              Pick one option only.</td>
            <td><form action="" className={styles.form}>
              <div className={styles.top}><label className={styles.label}>Full-time
                <input type="checkbox"></input>
                <span className={styles.checkmark}></span>
              </label>
                <label className={styles.label}>Part-time
                  <input type="checkbox"></input>
                  <span className={styles.checkmark}></span>
                </label></div>
              <div className={styles.bottom}>
                <label className={styles.label}>Contract
                  <input type="checkbox"></input>
                  <span className={styles.checkmark}></span>
                </label>
                <label className={styles.label}>Negotiable
                  <input type="checkbox"></input>
                  <span className={styles.checkmark}></span>
                </label>
              </div>
            </form></td>
          </tr>
          <tr>
            <td><div>Working schedule</div>
              Pick one option only.</td>
            <td><form action="" className={styles.form}>
              <select name="cat2" id="cat2">
                <option value="general">Pick working schedule</option>
                <option value="">Weekday</option>
                <option value="">Weekend</option>
                <option value="">Shift</option>
              </select></form></td>
          </tr>
          <tr>
            <td><div>Salary</div>
              Choose how you prefer to pay for this job.</td>
            <td><form action="" className={styles.form}>
              <div className={styles.top}>
                <label className={styles.label}>Custom
                  <input type="checkbox"></input>
                  <span className={styles.checkmark}></span>
                </label>
                <label className={styles.label}>Hourly
                  <input type="checkbox"></input>
                  <span className={styles.checkmark}></span>
                </label>
                <label className={styles.label}>Salary is negotiable
                  <input type="checkbox"></input>
                  <span className={styles.checkmark}></span>
                </label>
              </div>

            </form></td>
          </tr>
        </tbody>
      </table>
      <div className={styles.button}>
      <form action="" className={styles.form}>
      <button type='submit'>Submit</button>
      </form>
      <form action="" className={styles.form}>
      <button type='button'>Cancel</button>
      </form>
      </div>
    </div>
  )
}

export default AddJobPage
