import React from 'react'
import './community.css'
import { AiFillEdit } from 'react-icons/ai'
import { RiMessage3Line } from 'react-icons/ri'
import { HiOutlineUsers } from 'react-icons/hi'

function Community() {
  return (
    <>
        <section className="community__page">
            <div className="community__page-container">
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
                <div className="community__page-list">
                    <article className="community__card-list">
                        <div className="community__card-avatar">
                            <img src="https://images.pexels.com/photos/16161517/pexels-photo-16161517.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
                        </div>
                        <div className="comunity__card-info">
                            <h5>Jane Doe</h5>
                            <strong>Software Engineer</strong>
                        </div>
                        <div className="community__card-button">
                            <button>Message</button>
                        </div>
                    </article>
                    <article className="community__card-list">
                        <div className="community__card-avatar">
                            <img src="https://images.pexels.com/photos/16161517/pexels-photo-16161517.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
                        </div>
                        <div className="comunity__card-info">
                            <h5>Jane Doe</h5>
                            <strong>Software Engineer</strong>
                        </div>
                        <div className="community__card-button">
                            <button>Message</button>
                        </div>
                    </article>
                    <article className="community__card-list">
                        <div className="community__card-avatar">
                            <img src="https://images.pexels.com/photos/16161517/pexels-photo-16161517.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
                        </div>
                        <div className="comunity__card-info">
                            <h5>Jane Doe</h5>
                            <strong>Software Engineer</strong>
                        </div>
                        <div className="community__card-button">
                            <button>Message</button>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </>
  )
}

export default Community