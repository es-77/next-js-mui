// ** React Imports
import { useState, Fragment } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import useMediaQuery from '@mui/material/useMediaQuery'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'

import { useFormik, Form, FormikProvider } from 'formik'

// ** Styled Components
const RegisterIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  maxHeight: 600,
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(12),
  [theme.breakpoints.down(1540)]: {
    maxHeight: 550
  },
  [theme.breakpoints.down('lg')]: {
    maxHeight: 500
  }
}))

const RightWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 450
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 600
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: 750
  }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(1.75),
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const Register = () => {
  // ** States
  const [showPassword, setShowPassword] = useState(false)

  // ** Hooks
  const theme = useTheme()
  const { register } = useAuth()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  // ** Vars
  const { skin } = settings

  const schema = yup.object().shape({
    password: yup.string().min(5).required(),
    username: yup.string().min(3).required(),
    email: yup.string().email().required(),
    terms: yup.bool().oneOf([true], 'You must accept the privacy policy & terms')
  })

  const RegisterSchema = yup.object().shape({
    email: yup.string().email('Email must be a valid email address').required('Email is required'),
    password: yup.string().required('Password is required'),
    name: yup.string().min(3).required()
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true
    },
    validationSchema: RegisterSchema,
    onSubmit: data => {
      console.log('🚀 ~ file: index.js:127 ~ LoginPage ~ data:', data)
      const { email, name, password } = data
      const rememberMe = true
      const username = name
      register({ email, username, password }, err => {
        console.log('🚀 ~ file: index.js:158 ~ Register ~ err:', err)
      })

      // loginQuery.mutate(data)
    }
  })

  const handleShowPassword = () => {
    setShowPassword(show => !show)
  }

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps, setSubmitting } = formik
  const imageSource = skin === 'bordered' ? 'auth-v2-register-illustration-bordered' : 'auth-v2-register-illustration'

  return (
    <Box className='content-right' sx={{ backgroundColor: 'background.paper' }}>
      {!hidden ? (
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            borderRadius: '20px',
            justifyContent: 'center',
            backgroundColor: 'customColors.bodyBg',
            margin: theme => theme.spacing(8, 0, 8, 8)
          }}
        >
          <RegisterIllustration
            alt='register-illustration'
            src={`/images/pages/${imageSource}-${theme.palette.mode}.png`}
          />
          <FooterIllustrationsV2 />
        </Box>
      ) : null}
      <RightWrapper>
        <Box
          sx={{
            p: [6, 12],
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <svg width={34} height={23.375} viewBox='0 0 32 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                fill={theme.palette.primary.main}
                d='M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z'
              />
              <path
                fill='#161616'
                opacity={0.06}
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z'
              />
              <path
                fill='#161616'
                opacity={0.06}
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                fill={theme.palette.primary.main}
                d='M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z'
              />
            </svg>
            <Box sx={{ my: 6 }}>
              <Typography sx={{ mb: 1.5, fontWeight: 500, fontSize: '1.625rem', lineHeight: 1.385 }}>
                Adventure starts here 🚀
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>Make your app management easy and fun!</Typography>
            </Box>
            {/* <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}> */}
            <FormikProvider value={formik}>
              <Form autoComplete='off' noValidate onSubmit={handleSubmit}>
                <FormControl fullWidth sx={{ mb: 4 }}>
                  <TextField
                    autoFocus
                    label='Name'
                    {...getFieldProps('name')}
                    error={Boolean(touched.name && errors.name)}
                    helperText={touched.name && errors.name}
                  />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 4 }}>
                  <TextField
                    autoFocus
                    label='Email'
                    {...getFieldProps('email')}
                    placeholder='admin@vuexy.com'
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 4 }}>
                  <TextField
                    fullWidth
                    autoComplete='current-password'
                    type={showPassword ? 'text' : 'password'}
                    label='Password'
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
                </FormControl>

                {/* <FormControl error={Boolean(errors.terms)}>
                  <Controller
                    name='terms'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => {
                      return (
                        <FormControlLabel
                          sx={{
                            ...(errors.terms ? { color: 'error.main' } : null),
                            '& .MuiFormControlLabel-label': { fontSize: '0.875rem' }
                          }}
                          control={
                            <Checkbox
                              checked={value}
                              onChange={onChange}
                              sx={errors.terms ? { color: 'error.main' } : null}
                            />
                          }
                          label={
                            <Fragment>
                              <Typography
                                variant='body2'
                                component='span'
                                sx={{ color: errors.terms ? 'error.main' : '' }}
                              >
                                I agree to{' '}
                              </Typography>
                              <LinkStyled href='/' onClick={e => e.preventDefault()}>
                                privacy policy & terms
                              </LinkStyled>
                            </Fragment>
                          }
                        />
                      )
                    }}
                  />
                  {errors.terms && (
                    <FormHelperText sx={{ mt: 0, color: 'error.main' }}>{errors.terms.message}</FormHelperText>
                  )}
                </FormControl> */}
                <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 4 }}>
                  Sign up
                </Button>
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Typography sx={{ color: 'text.secondary', mr: 2 }}>Already have an account?</Typography>
                  <Typography variant='body2'>
                    <LinkStyled href='/login' sx={{ fontSize: '1rem' }}>
                      Sign in instead
                    </LinkStyled>
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    fontSize: '0.875rem',
                    color: 'text.disabled',
                    '& .MuiDivider-wrapper': { px: 6 },
                    my: theme => `${theme.spacing(6)} !important`
                  }}
                >
                  or
                </Divider>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <IconButton href='/' component={Link} sx={{ color: '#497ce2' }} onClick={e => e.preventDefault()}>
                    <Icon icon='mdi:facebook' />
                  </IconButton>
                  <IconButton href='/' component={Link} sx={{ color: '#1da1f2' }} onClick={e => e.preventDefault()}>
                    <Icon icon='mdi:twitter' />
                  </IconButton>
                  <IconButton
                    href='/'
                    component={Link}
                    onClick={e => e.preventDefault()}
                    sx={{ color: theme => (theme.palette.mode === 'light' ? '#272727' : 'grey.300') }}
                  >
                    <Icon icon='mdi:github' />
                  </IconButton>
                  <IconButton href='/' component={Link} sx={{ color: '#db4437' }} onClick={e => e.preventDefault()}>
                    <Icon icon='mdi:google' />
                  </IconButton>
                </Box>
                {/* </form> */}
              </Form>
            </FormikProvider>
          </Box>
        </Box>
      </RightWrapper>
    </Box>
  )
}
Register.getLayout = page => <BlankLayout>{page}</BlankLayout>
Register.guestGuard = true

export default Register
