// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import UserViewLeft from 'src/views/apps/user/view/UserViewLeft'
import UserViewRight from 'src/views/apps/user/view/UserViewRight'
import ProfileUpdate from './profile-update'
import PasswordUpdate from './password-update'

const UserView = ({ tab, invoiceData }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={5} lg={4}>
        <ProfileUpdate />
      </Grid>
      <Grid item xs={12} md={7} lg={8}>
        <PasswordUpdate />
      </Grid>
    </Grid>
  )
}

export default UserView
