import React from 'react'
import './home.css'
import { AiFillEdit } from 'react-icons/ai'
import { RiMessage3Line } from 'react-icons/ri'
import { HiOutlineUsers } from 'react-icons/hi'
import { BsPlayCircle } from 'react-icons/bs'
import { TbPhotoCheck } from 'react-icons/tb'
import { BiCalendar } from 'react-icons/bi'
import { SlLike } from 'react-icons/sl'
import { FaRegCommentAlt } from 'react-icons/fa'

function HomePage() {
  return (
    <>
      <section className="home__page">
        <div className="home__page-container">
          <aside className="home__page-profile">
            <article className="home__profile-info">
              <div className="home__profile-top">
                  <div className="home__profile-bg">

                  </div>
                  <div className="home__profile-image">
                    <img src="https://images.pexels.com/photos/16161517/pexels-photo-16161517.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
                  </div>
              </div>
              <div className="home__profile-content">
                <div className="home__profile-title">
                  <h4>Jane Doe</h4>
                  <span>Software Engineer</span>
                </div>
                <div className="home__profile-body">
                  <div className="profile__body-icon">
                    <div className="icon__profile">
                      <AiFillEdit/>
                    </div>
                    <div className="content__profile">
                      <strong>Edit Profile</strong>
                    </div>
                  </div>
                  <div className="profile__body-icon">
                    <div className="icon__profile">
                      <RiMessage3Line/>
                    </div>
                    <div className="content__profile">
                      <strong>Messages</strong>
                    </div>
                  </div>
                  <div className="profile__body-icon">
                    <div className="icon__profile">
                      <HiOutlineUsers/>
                    </div>
                    <div className="content__profile">
                      <strong>Community</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile__log-out">
                <button className="button-lg">Log Out</button>
              </div>
            </article>
          </aside>
          <div className="homepage__posts">
            <div className="home__page-posts">
              <div className="home__create-post">
                <div className="create__posts">
                  <div className="create__posts-avatar">
                    <img src="https://images.pexels.com/photos/16161517/pexels-photo-16161517.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
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
                    <BsPlayCircle/>
                    <small>Video</small>
                  </div>
                  <div className="posts__icon-photo">
                    <TbPhotoCheck/>
                    <small>Photos</small>
                  </div>
                  <div className="posts__icon-date">
                    <BiCalendar/>
                    <small>Events</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="posts__lists">
              <article className="posts__lists-card">
                <div className="posts__card-profile">
                  <div className="card__profile-avatar">
                    <img src="https://images.pexels.com/photos/14041401/pexels-photo-14041401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  </div>
                  <div className="card__profile-about">
                    <h5>Mid-Senior Software Engineer</h5>
                    <small>Nairobi, Kenya</small>
                  </div>
                </div>
                <div className="profile__card-posts">
                  <div className="posts__card-content">
                    <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum aut blanditiis rem maiores aperiam a!</small>
                  </div>
                  <div className="posts__card-image">
                    <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  </div>
                  <div className="posts__card-buttons">
                    <div className="buttons__like-card">
                      <button className="like"><SlLike/></button>
                      <h5>Like</h5>
                    </div>
                    <div className="buttons__comment-card">
                      <button className="comment"><FaRegCommentAlt/></button>
                      <h5>Comment</h5>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage;