// import React from 'react';

// function FormPage() {
//   // Implement your form component here
//   return (
//     <div>
      
//       {/* Your form fields and logic go here */}
//       <form>
//   <div className="form-group">
//     <label for="exampleInputEmail1">Email address</label>
//     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
//     <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <div className="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
//   </div>
//   <div className="form-group form-check">
//     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//     <label className="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>
//     </div>
//   );
// }

// export default FormPage;


import React, { useState } from 'react';
import "./App.css";

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    address: '',
    contactNumber: '',
    email: '',
    whatsappNumber: '',
    highestEducation: '',
    dateOfBirth: '',
    bloodGroup: '',
    healthDeclaration: '',
    impactOnSociety: '',
    whychooseus:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can replace this with your own logic to submit the form data
  };

  return (
    
    <div className="formcontainer">
      <h2 className="formmheading">JOIN US</h2>
        <p className="form para">Utkarsh Yatra is an ambitious 15 days program of discovery and transformation that takes hundreds of India's highly motivated youth, especially those from smaller towns and villages of India, to meet role models- social and business entrepreneurs - of the country.The vision of Jagriti is 'build India through enterprise'. It aims to inspire the young Indians to lead development by taking to enterprise, thus unleashing a movement of Enterprise-led-development. If you are between 20-27 years of age apply as Participants. Experienced professionals above 28 years can apply as Facilitators.

</p>
      
      <div className="formMainContent">
      {/* <form onSubmit={handleSubmit}>

        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Father's Name:
          <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </label>
        <br />
        <label>
          Contact Number:
          <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          WhatsApp Number:
          <input type="text" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} />
        </label>
        <br />
        <label>
          Highest Education:
          <input type="text" name="highestEducation" value={formData.highestEducation} onChange={handleChange} />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="text" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
        </label> */}
        <form>
        <div className="form-group">
    <label for="formGroupExampleInput">Name</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Name"/>
  </div>
  <br/>
  <div className="form-group">
    <label for="formGroupExampleInput">Father's Name</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Father's Name"/>
  </div>
  <br/>
  <div className="form-group">
    <label for="formGroupExampleInput">Address</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Address"/>
  </div>
  <div className="form-group">
    <label for="formGroupExampleInput">Contact Number</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Contact Number"/>
  </div>
  <br/>




  <div className="form-group">
    <label for="formGroupExampleInput">Whatsapp Number</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Whatsapp Number"/>
  </div>
  <br/>
  <div className="form-group">
    <label for="formGroupExampleInput">Highest Education</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Highest Education"/>
  </div>
  <br/>
  <div className="form-group">
    <label for="formGroupExampleInput">Job</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Job"/>
  </div>
  <br/>

  <div className="form-group">
    <label for="exampleFormControlSelect1">Blood group</label>
    <select className="form-control" id="exampleFormControlSelect1">
    <option>select</option>
      <option>A+</option>
      <option>A-</option>
      <option>B+</option>
      <option>B-</option>
      <option>O+</option>
      <option>O-</option>
      <option>AB+</option>
      <option>AB-</option>
    </select>
  </div>
        <br />

        <div className="form-group">
    <label for="formGroupExampleInput">Health Declaratiom</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Health Declaration"/>
  </div>
  <br/>
  <div className="form-group">
    <label for="formGroupExampleInput">Why Choose Us</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder=""/>
  </div>
  <br/>
  <div className="form-group">
    <label for="formGroupExampleInput">What you want to learn</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder=""/>
  </div>
  <br/>
  <div className="form-group">
    <label for="formGroupExampleInput">Impact On Society</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder=""/>
  </div>
  <br/>
  <div className="form-group">
    <label for="formGroupExampleInput2">Where did you learn about yatra</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=""/>
  </div>

        {/* <label>
          Health Declaration:
          <textarea name="healthDeclaration" value={formData.healthDeclaration} onChange={handleChange} />
        </label>
        <br />
        <label>
          Why Choose Us:
          <textarea name="whychooseus" value={formData.whychooseus} onChange={handleChange} />
        </label>
        <br />
        <label>
          Impact on Society:
          <textarea name="impactOnSociety" value={formData. impactOnSociety} onChange={handleChange} />
        </label> */}
        {/* <button type="submit">Submit</button> */}
        <input type="submit" value="Submit"></input>
      </form>
      {/* <div className="form">
      <form>
  <div className="form-group row">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
    </div>
  </div>
  <div className="form-group row">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
    </div>
  </div>
  <fieldset className="form-group">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
      <div className="col-sm-10">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
          <label className="form-check-label" for="gridRadios1">
            First radio
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
          <label className="form-check-label" for="gridRadios2">
            Second radio
          </label>
        </div>
        <div className="form-check disabled">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled/>
          <label className="form-check-label" for="gridRadios3">
            Third disabled radio
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  <div className="form-group row">
    <div className="col-sm-2">Checkbox</div>
    <div className="col-sm-10">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" for="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <div className="form-group row">
    <div className="col-sm-10">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </div> */}
{/* </form> */}
{/* </div> */}
      <img className="formsidebar" src="./images/Screenshot 2023-06-20 164748.png" alt="Image"/>
      </div>
      </div>
      
    
  );
};

export default FormPage;
