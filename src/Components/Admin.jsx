import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { useNavigate, Link } from 'react-router-dom';

function Admin() {
  const sidebarStyle = {
   
    width: "30%",
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  };

  const linkStyle = {
    display: "block",
    padding: "10px",
    textDecoration: "none",
    color: "black"
  };

  const activeLinkStyle = {
    backgroundColor: "lightgray"
  };

  const Sidebar = () => {
    const navigate = useNavigate();

    const handleLinkClick = (link) => {
      navigate(link);
    };

    return (
      <aside className="home__page-profile" style={sidebarStyle}>
        <article className="home__profile-info">
          <div className="home__profile-top">
            <div className="home__profile-bg"></div>
            <div className="home__profile-image">
              <img src="https://images.pexels.com/photos/16161517/pexels-photo-16161517.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
            </div>
          </div>
          <div className="home__profile-content">
            <div className="home__profile-title">
              <h4>Jane Doe</h4>
              <span>Super Admin</span>
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
            </div>
          </div>
          <div className="profile__log-out">
            <button style={{width:"50%",marginLeft:"24%" }} className="button-lg">Log Out</button>
          </div>
        </article>
      
      </aside>
    );
  }

  return (
    <div style={{display:"flex", justifyContent:"center", gap:"10px", marginTop:"5px"}}>
      <Sidebar />
      <div style={{ width:"60%", display:"flex", border:"2px solid black"}}>
      <div >
  <nav className="navbar navbar-dark bg-black" style={{ width: "100%", padding: "20px", height:"40%" }}>
    {/* <h3 className="text-white">Manage</h3> */}
    <ul className="list-unstyled" style={{ padding: 0 }}>
      <li>
        <Link
          to="/manage/posts"
          className="nav-link text-white"
          style={{ borderBottom: "1px solid white",width:"100%"  }}
          activeStyle={activeLinkStyle}
          // onClick={() => handleLinkClick("/manage/posts")}
        >
          Manage Posts
        </Link>
      </li>
      <li>
        <Link
          to="/manage/employers"
          className="nav-link text-white"
          style={{ borderBottom: "1px solid white" }}
          activeStyle={activeLinkStyle}
          // onClick={() => handleLinkClick("/manage/employers")}
        >
          Manage Employers
        </Link>
      </li>
      <li>
        <Link
          to="/manage/users"
          className="nav-link text-white"
          style={{ borderBottom: "1px solid white" }}
          activeStyle={activeLinkStyle}
          // onClick={() => handleLinkClick("/manage/users")}
        >
          Manage Users
        </Link>
      </li>
    </ul>
  </nav>
</div>

        <div style={{border:"2px solid black", width:"50vw"}}> <h2>payload</h2></div>
      </div>
    </div>
  );
}

export default Admin;

