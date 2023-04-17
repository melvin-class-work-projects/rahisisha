import React from 'react'
import './profile.css'
import { TbEdit } from 'react-icons/tb'

function Profile() {
  return (
    <>
    <section className="profile__page">
      <div className="profile__page-container">
        <article className="profile__page-content">
          <div className="profile__page-profile">
            <div className="profile__page-background">

            </div>
            <div className="profile__page-avatar">
              <img src="https://images.pexels.com/photos/5386149/pexels-photo-5386149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
          </div>
          <div className="profile__card-body">
            <div className="profile__card-about">
              <h4>John Doe</h4>
              <span>Software Engineer</span>
              <div className="profile__about">
                <span>Nairobi, Kenya</span>
                <button>Contact info</button>
              </div>
            </div>
          </div>
        </article>
        <div className="profle__page-edit">
          <article className="edit__work">
            <div className="edit__header">
              <h4>Work</h4>
              <TbEdit/>
            </div>
            <div className="edit__content">
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quidem porro reprehenderit iure, corporis qui.
              </span>
            </div>
          </article>
          <article className="edit__work">
            <div className="edit__header">
              <h4>Work</h4>
              <TbEdit/>
            </div>
            <div className="edit__content">
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quidem porro reprehenderit iure, corporis qui.
              </span>
            </div>
          </article>
          <article className="edit__work">
            <div className="edit__header">
              <h4>Work</h4>
              <TbEdit/>
            </div>
            <div className="edit__content">
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quidem porro reprehenderit iure, corporis qui.
              </span>
            </div>
          </article>
        </div>
        <div className="profile__page-activity">
          <div className="profile__page-active">
            <article className="activity__card">
              <div className="activity__card-comment">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, cupiditate?
                </span>
              </div>
              <div className="activity__card-image">
                <img src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              </div>
              <div className="activity__card-buttons">
                <button className='edit'>Edit</button>
                <button className='delete'>Delete</button>
              </div>
            </article>
            <article className="activity__card">
              <div className="activity__card-comment">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, cupiditate?
                </span>
              </div>
              <div className="activity__card-image">
                <img src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              </div>
              <div className="activity__card-buttons">
                <button className='edit'>Edit</button>
                <button className='delete'>Delete</button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Profile;