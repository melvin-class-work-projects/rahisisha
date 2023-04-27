import React from "react";
import { useState, useEffect } from "react";
import "./home.css";
import { AiFillEdit } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import { GrUserWorker } from "react-icons/gr";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BsCashStack } from "react-icons/bs";
import { BsPlayCircle, BsWindowSidebar } from "react-icons/bs";
import { TbPhotoCheck } from "react-icons/tb";
import { BiCalendar } from "react-icons/bi";
import { SlLike } from "react-icons/sl";
import { FaRegCommentAlt } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import Modal from "react-modal";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Post from "./Post";
import axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50rem",
    border: "3px solid black",
  },
};

function HomePage() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [posts, setPost] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const [user, setUser] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      try {
        // Get the access token from localStorage
        const accessToken = localStorage.getItem("eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoic2Vla2VyIiwidXNlcl9yZWYiOiJmYjd2LWoybXQtdm54eSIsImV4cCI6MTY4MjQyNjExOX0.djHIpRUNvqGBQ9FTSKrl99Gt39QP0GaEsrkbpeLTh5");

        // Make sure the access token is present
        if (!accessToken) {
          // Handle the case when access token is not available
          console.error("Access token not found in localStorage");
          return;
        }

        // Set the authorization header with the access token
        const headers = {
          Authorization: `Bearer ${accessToken}`,
        };

        // Make GET request to '/posts' with authorization header
        const response = await fetch("http://127.0.0.1:3000/posts", { headers });

        // Check if the response is successful
        if (!response.ok) {
          // Handle the case when response is not successful
          throw new Error(
            `Error fetching posts: ${response.status} ${response.statusText}`
          );
        }

        // Parse the response data as JSON
        const data = await response.json();

        // Set the response data to state
        setPost(data);
      } catch (error) {
        // Handle any error that occurred during the API request
        console.error(error);
      }
    };

    // Call the getPosts function
    getPosts();
  }, []);

  console.log(Post);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userRole");
    window.location.href = "/login";
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handlePost = async () => {
    try {
      // Create a FormData object to send the form data
      const formData = new FormData();
      formData.append("description", description);
      formData.append("file", file);

      // Send the post request
      const response = await fetch("http://127.0.0.1:3000/seekers", {
        method: "POST",
        body: formData,
      });

      // Check for success status
      if (response.ok) {
        // Handle success
        setUser(response.data);
        console.log("Post request success!");
      } else {
        // Handle error
        console.log("Post request failed:", response.statusText);
      }
    } catch (error) {
      console.error("Post request failed:", error);
    }
    console.log(user);
  };

  useEffect(() => {
    // Get the access token from localStorage
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      try {
        // Decode the access token
        const decodedToken = JSON.parse(atob(accessToken.split(".")[1]));

        // Fetch user details using the decoded token
        fetch("http://127.0.0.1:3000/seekers", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to fetch user details");
            }
            return response.json();
          })
          .then((data) => {
            // Handle the fetched user details
            // console.log("User details:", data);
            // Set the user data in state
            setUser(data);
          })
          .catch((error) => {
            console.error(error);
            // ... Handle error fetching user details
          });
      } catch (error) {
        console.error("Failed to decode access token", error);
        // ... Handle error decoding access token
      }
    } else {
      console.error("Access token not found in localStorage");
      // ... Handle access token not found
    }
  }, []); // Empty dependency array to ensure useEffect runs only once

  console.log(Post);
  return (
    <>
      <Navigation />
      <section className="home__page">
        <div className="home__page-container">
          <aside className="home__page-profile">
            <article className="home__profile-info">
              <div className="home__profile-top">
                <div className="home__profile-bg"></div>
                <div className="home__profile-image">
                  <Link to="/profile">
                    <img
                      src="https://images.pexels.com/photos/16161517/pexels-photo-16161517.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="home__profile-content">
                <div className="home__profile-title">
                  {user && user[0] ? (
                    <>
                      <h4>{user[0].full_name} </h4>
                      <span>{user[0].email} </span>
                    </>
                  ) : (
                    <>
                      <h4>Loading...</h4>
                    </>
                  )}
                </div>

                <div className="home__profile-body">
                  <div className="profile__body-icon">
                    <div className="icon__profile">
                      <AiFillEdit />
                    </div>
                    <div className="content__profile">
                      <strong onClick={openModal}>Edit Profile</strong>
                      <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                      >
                        <div className="modal__header">
                          <strong ref={(_subtitle) => (subtitle = _subtitle)}>
                            Edit Your Profile
                          </strong>
                        </div>
                        <div
                          className="modal__body"
                          style={{ overflowY: "auto", textAlign: "center" }}
                        >
                          <form action="" className="form__modal">
                            <div className="form__group">
                              <div className="form__group-header">
                                <BiUser />
                                <label htmlFor="">Enter Full Name</label>
                              </div>
                              <div className="form__group-input">
                                <input
                                  type="text"
                                  placeholder="Enter your full name"
                                  name="full-name"
                                />
                              </div>
                            </div>
                            <div className="form__group">
                              <div className="form__group-header">
                                <MdOutlineMarkEmailUnread />
                                <label htmlFor="">Email</label>
                              </div>
                              <div className="form__group-input">
                                <input
                                  type="text"
                                  placeholder="Enter your current email"
                                  name="email"
                                />
                              </div>
                            </div>
                            <div className="form__group">
                              <div className="form__group-header">
                                <BiUserCircle />
                                <label htmlFor="">Avatar</label>
                              </div>
                              <div className="form__group-input">
                                <input type="file" name="avatar" />
                              </div>
                            </div>
                            <div className="form__group">
                              <div className="form__group-header">
                                <HiOutlineLocationMarker />
                                <label htmlFor="">Location</label>
                              </div>
                              <div className="form__group-input">
                                <input
                                  type="text"
                                  placeholder="Enter your current Location"
                                  name="location"
                                />
                              </div>
                            </div>
                            <div className="form__group">
                              <div className="form__group-header">
                                <GrUserWorker />
                                <label htmlFor="">Preferred Job</label>
                              </div>
                              <div className="form__group-input">
                                <input
                                  type="text"
                                  placeholder="Enter your preferred job"
                                  name="preferred-job"
                                />
                              </div>
                            </div>
                            <div className="form__group">
                              <div className="form__group-header">
                                <AiOutlineFieldTime />
                                <label htmlFor="">Availability</label>
                              </div>
                              <div className="form__group-input">
                                <input
                                  type="text"
                                  placeholder="How soon can you receive job opportunities"
                                  name="available"
                                />
                              </div>
                            </div>
                            <div className="form__group">
                              <div className="form__group-header">
                                <BsCashStack />
                                <label htmlFor="">Anticipated salary</label>
                              </div>
                              <div className="form__group-input">
                                <input
                                  type="number"
                                  placeholder="Anticipated salary"
                                  name="salary"
                                />
                              </div>
                            </div>
                            <div className="form__group">
                              <div className="form__group-header">
                                <BsTelephone />
                                <label htmlFor="">Phone number</label>
                              </div>
                              <div className="form__group-input">
                                <input
                                  type="text"
                                  placeholder="Enter your current phone number"
                                  name="phone-number"
                                />
                              </div>
                            </div>
                            <div className="form__group-button">
                              <button
                                type="submit"
                                className="form__group-save"
                              >
                                Save
                              </button>
                            </div>
                          </form>
                        </div>
                      </Modal>
                    </div>
                  </div>
                  <div className="profile__body-icon">
                    <div className="icon__profile">
                      <HiOutlineUsers />
                    </div>
                    <div className="content__profile">
                      <Link to="/community">Community</Link>
                    </div>
                  </div>
                  <div className="profile__body-icon">
                    <div className="icon__profile">
                      <HiOutlineUsers />
                    </div>
                    <div className="content__profile">
                      <Link to="/notification">Notifications</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile__log-out">
                <button className="button-lg" onClick={handleLogout}>
                  Log Out
                </button>
              </div>
            </article>
          </aside>
          <div className="homepage__posts">
            <div className="home__page-posts">
              <div className="home__create-post">
                <div className="create__posts">
                  <div className="create__posts-avatar">
                    <img
                      src="https://images.pexels.com/photos/16161517/pexels-photo-16161517.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                      alt=""
                    />
                  </div>
                  <div className="create__posts-input">
                    <form action="" className="form">
                      <input type="Create a post" />
                      <button type="submit">Post</button>
                    </form>
                  </div>
                </div>
                <div className="create__post-types">
                  <div className="posts__icon-video">
                    <BsPlayCircle />
                    <Popup
                      trigger={<small>Videos</small>}
                      position="center"
                      className="my-popup"
                    >
                      <div className="popup_body">
                        <div className="popup_body-header">
                          <h5>Video Posts</h5>
                        </div>
                        <div className="popup_form">
                          <form action="" className="popup_form">
                            <div className="popup_form-input">
                              <input type="text" placeholder="Title" />
                              <input
                                type="text"
                                placeholder="Write a description"
                              />
                              <input type="file" name="" id="" />
                            </div>
                            <div className="form__group-button">
                              <button className="form__group-save">Save</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </Popup>
                  </div>
                  <div className="posts__icon-photo">
                    <TbPhotoCheck />
                    <small>Photos</small>
                  </div>
                  <div className="posts__icon-date">
                    <BiCalendar />
                    <small>Events</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="posts__lists">
              {Array.isArray(posts) &&
                posts.map((post) => (
                  <article className="posts__lists-card" key={post.id}>
                    <div className="posts__card-profile">
                      <div className="card__profile-avatar">
                        <img
                          src="https://images.pexels.com/photos/14041401/pexels-photo-14041401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt=""
                        />
                        <Post />
                      </div>
                      <div className="card__profile-about">
                        <h5>Mid-Senior Software Engineer</h5>
                        <small>Nairobi, Kenya</small>
                      </div>
                    </div>
                    <div className="profile__card-posts">
                      <div className="posts__card-content">
                        <small>{post.description}</small>
                      </div>
                      <div className="posts__card-image">
                        <img className="img-fluid" src={post.media} alt="" style={{display:"block", height:'250px', width:"250px"}} />
                      </div>
                      <div className="posts__card-buttons">
                        <div className="buttons__like-card">
                          <button className="like">
                            <SlLike />
                          </button>
                          <h5>{post.likes}</h5>
                        </div>
                        <div className="buttons__comment-card">
                          <button className="comment">
                            <FaRegCommentAlt />
                          </button>
                          <h5>Comment</h5>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
