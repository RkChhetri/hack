import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RetailerForm = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    businessOwner: "",
    contactNumber: "",
    emailId: "",
    panNumber: "",
    businessPhoto: null,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      alert("Business information updated successfully!");
    } else {
      alert("Business information added successfully!");
    }
    setIsEditing(false);
    console.log("Form Data: ", formData);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (isEditing) {
      alert("Business information updated successfully!");
    } else {
      alert("Business information added successfully!");
    }
    setIsEditing(false);
    console.log("Form Data: ", formData);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="text-center">{isEditing ? "Update Business" : "Profile"}</h2>
            <form onSubmit={handleSubmit} className="row g-3 p-4 shadow bg-light rounded">
              <div className="col-md-6">
                <label htmlFor="businessName" className="form-label">
                  Business Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName} placeholder="Busniness Name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="businessOwner" className="form-label">
                  Business Owner
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="businessOwner"
                  name="businessOwner"
                  value={formData.businessOwner} placeholder="Busniness Owner"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="contactNumber" className="form-label">
                  Contact Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber} placeholder="Contact Number"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="emailId" className="form-label">
                  Email ID
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailId"
                  name="emailId" placeholder="Email id"
                  value={formData.emailId}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="panNumber" className="form-label">
                  PAN Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="panNumber"
                  name="panNumber"
                  value={formData.panNumber} placeholder="Pan Number"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="businessPhoto" className="form-label">
                  Business Photo
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="businessPhoto"
                  name="businessPhoto"
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-primary me-3">
                  {isEditing ? "Update" : "Update your Profile"}
                </button>
                {isEditing && (
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="text-center">{isEditing ? "Update Business" : "Add Items"}</h2>
            <form onSubmit={handleAdd} className="row g-3 p-4 shadow bg-light rounded">
              <div className="col-md-6">
                <label htmlFor="businessName" className="form-label">
                  Business Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName} placeholder="Busniness Name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="businessOwner" className="form-label">
                  Business Owner
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="businessOwner"
                  name="businessOwner"
                  value={formData.businessOwner}
                  onChange={handleChange} placeholder="Busniness Owner"
                  required
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="contactNumber" className="form-label">
                  Contact Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange} placeholder="Contact Number"
                  required
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="description" className="form-label">
                   Location
                </label>
                <input
                  type="email"
                  className="form-control" placeholder="Location"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <input
                  type="email"
                  className="form-control" placeholder="Description"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="businessPhoto" className="form-label">
                  Business Photo
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="businessPhoto"
                  name="businessPhoto"
                  onChange={handleChange} placeholder="Busniness Photo"
                />
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-primary me-3" >
                  {isEditing ? "Update" : "+ Add"} 
                </button>
                {isEditing && (
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RetailerForm;
