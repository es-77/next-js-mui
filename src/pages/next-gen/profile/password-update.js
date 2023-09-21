// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'

import { useFormik, Form, FormikProvider } from 'formik'
import * as yup from 'yup'
import Icon from 'src/@core/components/icon'

export default function PasswordUpdate() {
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordNew, setShowPasswordNew] = useState(false)
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)

  const ProfileUpdateSchema = yup.object().shape({
    password: yup.string().required('Password is required'),
    newPassword: yup.string().required('New password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('newPassword')], 'Passwords must match')
      .required('Confirm password is required')
  })

  const formik = useFormik({
    initialValues: {},
    validationSchema: ProfileUpdateSchema,
    onSubmit: data => {
      console.log('🚀 ~ file: index.js:127 ~ LoginPage ~ data:', data)

      // loginQuery.mutate(data)
    }
  })

  const handleShowPassword = type => {
    setShowPassword(show => !show)
  }

  const handleShowPasswordNew = type => {
    setShowPasswordNew(show => !show)
  }

  const handleShowPasswordConfirm = type => {
    setShowPasswordConfirm(show => !show)
  }

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps, setSubmitting } = formik

  return (
    <Card>
      <CardHeader title='Change Password' />
      <CardContent>
        <FormikProvider value={formik}>
          <Form autoComplete='off' noValidate onSubmit={handleSubmit}>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  autoComplete='current-password'
                  type={showPassword ? 'text' : 'password'}
                  label='Current Password'
                  {...getFieldProps('password')}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={handleShowPassword} edge='end'>
                          <Icon icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} fontSize={20} />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  autoComplete='current-password'
                  type={showPasswordNew ? 'text' : 'password'}
                  label='New Password'
                  {...getFieldProps('newPassword')}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={handleShowPasswordNew} edge='end'>
                          <Icon icon={showPasswordNew ? 'tabler:eye' : 'tabler:eye-off'} fontSize={20} />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  error={Boolean(touched.newPassword && errors.newPassword)}
                  helperText={touched.newPassword && errors.newPassword}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  autoComplete='current-password'
                  type={showPasswordConfirm ? 'text' : 'password'}
                  label='Confirm Password'
                  {...getFieldProps('confirmPassword')}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={handleShowPasswordConfirm} edge='end'>
                          <Icon icon={showPasswordConfirm ? 'tabler:eye' : 'tabler:eye-off'} fontSize={20} />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant='contained' sx={{ mr: 2 }} type='submit'>
                  Submit
                </Button>
                <Button variant='contained' sx={{ mr: 2 }} type='reset'>
                  reset
                </Button>
              </Grid>
            </Grid>
          </Form>
        </FormikProvider>
      </CardContent>
    </Card>
  )
}
