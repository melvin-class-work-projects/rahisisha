import React from 'react'
import { useState } from 'react'
import './community.css'
import { AiFillEdit } from 'react-icons/ai'
import { RiMessage3Line } from 'react-icons/ri'
import { HiOutlineUsers } from 'react-icons/hi'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BiUser } from 'react-icons/bi'
import { BsTelephone } from 'react-icons/bs'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '50rem',
      border: '3px solid black'
    },
  };

function Notifications() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
      setIsOpen(true);
  }

  function closeModal() {
      setIsOpen(false);
  }

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
                            <strong onClick={openModal}>Edit Profile</strong>
                            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                                <div className="modal__header">
                                    <strong ref={(_subtitle) => (subtitle = _subtitle)}>Edit Your Profile</strong>
                                </div>
                                <div className="modal__body">
                                    <form action="" className="form__modal">
                                        <div className="form__group">
                                            <div className="form__group-header">
                                                <BiUser/>
                                                <label htmlFor="">Enter Full Name</label>   
                                            </div>
                                            <div className="form__group-input">
                                                <input type="text" placeholder='Enter your current email'/>
                                            </div>
                                        </div>
                                        <div className="form__group">
                                            <div className="form__group-header">
                                                <MdOutlineMarkEmailUnread/>
                                                <label htmlFor="">Email</label>                                            
                                            </div>
                                            <div className="form__group-input">
                                                <input type="text" placeholder='Enter your current email'/>
                                            </div>
                                        </div>
                                        <div className="form__group">
                                            <div className="form__group-header">
                                                <HiOutlineLocationMarker/>
                                                <label htmlFor="">Location</label>                                            
                                            </div>
                                            <div className="form__group-input">
                                                <input type="text" placeholder='Enter your current email'/>
                                            </div>
                                        </div>
                                        <div className="form__group">
                                            <div className="form__group-header">
                                                <BsTelephone/>
                                                <label htmlFor="">Phone number</label>                                           
                                            </div>
                                            <div className="form__group-input">
                                                <input type="text" placeholder='Enter your current email'/>
                                            </div>
                                        </div>
                                        <div className="form__group-button">
                                            <button className="form__group-save">Save</button>
                                        </div>

                                    </form>
                                </div>
                            </Modal>
                            </div>
                        </div>
                        <div className="profile__body-icon">
                            <div className="icon__profile">
                            <HiOutlineUsers/>
                            </div>
                            <div className="content__profile">
                            <Link to='/community'>Community</Link>
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
                            <button>View</button>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </>
  )
}

export default Notifications;