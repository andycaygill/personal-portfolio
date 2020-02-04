import React from "react"
import IndentedTextBlock from "../indentedTextBlock"
import Grid from "../grid"
import ProfileImage from "../../assets/images/profile-picture.jpg"
import componentStyles from "./profile.module.css"

const Profile = props => {
  return (
    <Grid>
      <img
        className={componentStyles.profileImg}
        src={ProfileImage}
        alt="Profile Picture"
      />

      <IndentedTextBlock heading="About me">
        <p>
          I'm a front-end engineer with 8 years professional experience in
          building efficient, scalable web applications and creative user
          experiences. While I enjoy experimenting with new frameworks and
          libraries, I understand the importance of placing focus on the end
          goal: delivering a beautiful, functional product to the user and
          client. For work enquiries or if you just want to say hello, email me
          today at{" "}
          <a href="mailto:hello@andrewcaygill.com">hello@andrewcaygill.com</a>.
        </p>
      </IndentedTextBlock>
    </Grid>
  )
}

export default Profile
