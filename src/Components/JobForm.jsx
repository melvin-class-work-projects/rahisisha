import React, { useState } from "react";
import jwt_decode from "jsonwebtoken";

function JobForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [location, setLocation] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    const decodedToken = jwt_decode(accessToken);
    const currentTime = Date.now() / 1000;

    if (decodedToken.exp < currentTime) {
      alert("Your access token has expired. Please log in again.");
      localStorage.removeItem("accessToken");
      setAuthenticated(Afalse);
    } else {
      setAuthenticated(true);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!authenticated) {
      alert("You need to log in to post a job");
      return;
    }

    // send job data to backend API
    fetch("https://rahisisha-backend-3t0w.onrender.com/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        title,
        description,
        companyName,
        email,
        avatar,
        location,
        companyDescription,
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Job posted successfully!");
          setTitle("");
          setDescription("");
          setCompanyName("");
          setEmail("");
          setAvatar("");
          setLocation("");
          setCompanyDescription("");
        } else {
          alert("Failed to post job");
        }
      })
      .catch((error) => {
        alert("Error posting job: " + error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Job Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Job Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <label>
        Company Name:
        <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Avatar:
        <input type="text" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
      </label>
      <br />
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={companyDescription} onChange={(e) => setCompanyDescription(e.target.value)} />
      </label>
      <br />
      <button type="submit">Post Job</button>
    </form>
  );
}

export default JobForm;