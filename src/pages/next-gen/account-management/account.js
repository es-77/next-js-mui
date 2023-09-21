// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper'
import { styled } from '@mui/material/styles'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import MuiStep from '@mui/material/Step'
import CardContent from '@mui/material/CardContent'

import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'

import { useFormik, Form, FormikProvider } from 'formik'
import * as yup from 'yup'
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

// ** Styled Components
import StepperWrapper from 'src/@core/styles/mui/stepper'
import {
  Autocomplete,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  FormLabel,
  MenuItem,
  Select
} from '@mui/material'
import { top100Films } from 'src/@fake-db/autocomplete'
import TableCollapsible from './TableCollapsible'

const steps = [
  {
    icon: 'tabler:users',
    title: 'Basic Information',
    subtitle: 'Name/Email/Contact'
  },
  {
    icon: 'tabler:home',
    subtitle: 'Contact Information',
    title: 'Contact Information'
  },
  {
    icon: 'tabler:home',
    subtitle: 'Billing Profile',
    title: 'Billing Profile'
  },
  {
    icon: 'tabler:home',
    subtitle: 'Manage Rates',
    title: 'Manage Rates'
  },
  {
    icon: 'tabler:home',
    subtitle: 'Account Portal/ Facility Portal',
    title: 'Account Portal/ Facility Portal'
  },
  {
    icon: 'tabler:home',
    subtitle: 'Special Notes',
    title: 'Special Notes'
  }
]

const StepperHeaderContainer = styled(CardContent)(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('lg')]: {
    borderRight: 0,
    borderBottom: `1px solid ${theme.palette.divider}`
  }
}))

const Step = styled(MuiStep)(({ theme }) => ({
  '& .MuiStepLabel-root': {
    paddingTop: 0
  },
  '&:not(:last-of-type) .MuiStepLabel-root': {
    paddingBottom: theme.spacing(5)
  },
  '&:last-of-type .MuiStepLabel-root': {
    paddingBottom: 0
  },
  '& .MuiStepLabel-iconContainer': {
    display: 'none'
  },
  '& .step-subtitle': {
    color: `${theme.palette.text.disabled} !important`
  },
  '& + svg': {
    color: theme.palette.text.disabled
  },
  '&.Mui-completed .step-title': {
    color: theme.palette.text.disabled
  },
  '& .MuiStepLabel-label': {
    cursor: 'pointer'
  }
}))

const PropertyListingWizard = () => {
  // ** States
  const [activeStep, setActiveStep] = useState(0)
  const [showPassword, setShowPassword] = useState(false)
  const [accountPortalCondition, setAccountPortalCondition] = useState(false)

  const [checkBox, setStateCheckBox] = useState({
    PatientManagement: false,
    ReservationManagement: false,
    ReportManagement: false,
    Dispatch: false,
    VehicleManagement: false,
    DriverManagement: false
  })

  const { PatientManagement, ReservationManagement, ReportManagement, Dispatch, VehicleManagement, DriverManagement } =
    checkBox
  const [value, setValue] = useState(null)
  const [valueLevel, setValueLevel] = useState(null)
  const [language, setLanguage] = useState([])

  const [valueTextArea, setValueTextArea] = useState('Write nodes')

  const ProfileUpdateSchema = yup.object().shape({})

  const formik = useFormik({
    initialValues: {
      name: 'emmanuel',
      contactname: 'Contact',
      billingname: 'billing'
    },
    validationSchema: ProfileUpdateSchema,
    onSubmit: data => {
      console.log('🚀 ~ file: index.js:127 ~ LoginPage ~ data:', data)

      // loginQuery.mutate(data)
    }
  })

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps, setSubmitting } = formik

  // Handle Stepper
  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleLevelChange = (event, newValue) => {
    setValueLevel(newValue)
  }

  const handleSelectChange = event => {
    setLanguage(event.target.value)
  }

  const handleChangeTextArea = event => {
    setValueTextArea(event.target.value)
  }

  const handleChangeCheckBox = event => {
    let condition = false
    if (event.target.checked) {
      condition = true
    }
    setStateCheckBox(prevState => ({
      ...prevState,
      PatientManagement: condition,
      ReservationManagement: condition,
      ReportManagement: condition,
      Dispatch: condition,
      VehicleManagement: condition,
      DriverManagement: condition
    }))
  }

  const handleChangeCheckBoxSingle = event => {
    setStateCheckBox({ ...checkBox, [event.target.name]: event.target.checked })
  }

  const handleShowPassword = type => {
    setShowPassword(show => !show)
  }

  const handAccountPortal = type => {
    console.log('✅ event.target.value    ', type.target.value)
    if (type.target.value === 'Yes') {
      setAccountPortalCondition(true)
    } else {
      setAccountPortalCondition(false)
    }
  }

  const levelData = [
    {
      title: 'P1',
      id: 'P1'
    },
    {
      title: 'P2',
      id: 'P2'
    },
    {
      title: 'P3',
      id: 'P3'
    }
  ]

  const handlePrev = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1)
    }
  }

  console.log('✅ top100Films    ', top100Films)

  const RenderBasicInfo = () => {
    return (
      <CardContent>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12}>
            <TextField fullWidth label='Account Name' placeholder='Account Name' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id='form-layouts-separator-select-label'>Office Location</InputLabel>
              <Select
                label='Office Location '
                defaultValue=''
                id='form-layouts-separator-select'
                labelId='form-layouts-separator-select-label'
              >
                <MenuItem value='p1'>p1</MenuItem>
                <MenuItem value='p2'>p2</MenuItem>
                <MenuItem value='p3'>p3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id='form-layouts-separator-multiple-select-label'>Language</InputLabel>
              <Select
                multiple
                value={language}
                onChange={handleSelectChange}
                id='form-layouts-separator-multiple-select'
                labelId='form-layouts-separator-multiple-select-label'
                input={<OutlinedInput label='Language' id='select-multiple-language' />}
              >
                <MenuItem value='English'>English</MenuItem>
                <MenuItem value='French'>French</MenuItem>
                <MenuItem value='Spanish'>Spanish</MenuItem>
                <MenuItem value='Portuguese'>Portuguese</MenuItem>
                <MenuItem value='Italian'>Italian</MenuItem>
                <MenuItem value='German'>German</MenuItem>
                <MenuItem value='Arabic'>Arabic</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Billing Address' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Suite#/Bldg/Apt' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='City' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='State' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Zip Code' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Phone Number' placeholder='+1-123-456-8790' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id='form-layouts-separator-select-label'>Account Status</InputLabel>
              <Select
                label='Account Status'
                defaultValue=''
                id='form-layouts-separator-select'
                labelId='form-layouts-separator-select-label'
              >
                <MenuItem value='Open'>Open</MenuItem>
                <MenuItem value='Suspended'>Suspended</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    )
  }

  const renderContactInfo = () => {
    return (
      <CardContent>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='First Name' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Last Name' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Phone Number' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Fax Number' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Email Address' />
          </Grid>
        </Grid>
      </CardContent>
    )
  }

  const renderBillingProfile = () => {
    return (
      <CardContent>
        <Grid container spacing={2} sx={{ width: '40rem' }}>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id='form-layouts-separator-select-label'>Billing Terms</InputLabel>
              <Select
                label='Billing Terms'
                defaultValue=''
                id='form-layouts-separator-select'
                labelId='form-layouts-separator-select-label'
              >
                <MenuItem value='1 Days'>1 Days</MenuItem>
                <MenuItem value='2 Days'>2 Days</MenuItem>
                <MenuItem value='3 Days'>3 Days</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id='form-layouts-separator-select-label'>Billing Method</InputLabel>
              <Select
                label='Billing Method'
                defaultValue=''
                id='form-layouts-separator-select'
                labelId='form-layouts-separator-select-label'
              >
                <MenuItem value='invoicing'>invoicing</MenuItem>
                <MenuItem value='EDI Submission'>EDI Submission</MenuItem>
                <MenuItem value='EDI Submission'>EDI Submission</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id='form-layouts-separator-select-label'>Billing Method</InputLabel>
              <Select
                label='Billing Method'
                defaultValue=''
                id='form-layouts-separator-select'
                labelId='form-layouts-separator-select-label'
              >
                <MenuItem value='cheque'>cheque</MenuItem>
                <MenuItem value='Credit card'>Credit card</MenuItem>
                <MenuItem value='Credit card'>Credit card</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    )
  }

  const renderManageRates = () => {
    // return (
    //   <Grid item xs={12}>
    //     <TableCollapsible />
    //   </Grid>
    // )
    return (
      <CardContent>
        <Grid container spacing={2} sx={{ width: '100%' }}>
          <Grid item xs={12} sm={12}>
            <TableCollapsible />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id='form-layouts-separator-select-label'>Billing Method</InputLabel>
              <Select
                label='Billing Method'
                defaultValue=''
                id='form-layouts-separator-select'
                labelId='form-layouts-separator-select-label'
              >
                <MenuItem value='invoicing'>invoicing</MenuItem>
                <MenuItem value='EDI Submission'>EDI Submission</MenuItem>
                <MenuItem value='EDI Submission'>EDI Submission</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id='form-layouts-separator-select-label'>Billing Method</InputLabel>
              <Select
                label='Billing Method'
                defaultValue=''
                id='form-layouts-separator-select'
                labelId='form-layouts-separator-select-label'
              >
                <MenuItem value='cheque'>cheque</MenuItem>
                <MenuItem value='Credit card'>Credit card</MenuItem>
                <MenuItem value='Credit card'>Credit card</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    )
  }

  const renderAccountPortalFacilityPortal = () => {
    return (
      <CardContent>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={!accountPortalCondition ? 6 : 4}>
            <FormControl fullWidth>
              <InputLabel id='form-layouts-separator-select-label'>Account Portal</InputLabel>
              <Select
                onChange={handAccountPortal}
                label='Account Portal'
                id='form-layouts-separator-select'
                labelId='form-layouts-separator-select-label'
              >
                <MenuItem value='Yes'>Yes</MenuItem>
                <MenuItem value='No'>No</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {accountPortalCondition && (
            <>
              <Grid item xs={12} sm={4}>
                <TextField fullWidth label='User Name' placeholder='User Name' />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  autoComplete='password'
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
              </Grid>
            </>
          )}
          <Grid item xs={12} sm={12}>
            <FormControl>
              <FormLabel>Check which you want</FormLabel>
              <FormGroup>
                <FormControlLabel label='All' control={<Checkbox onChange={handleChangeCheckBox} name='All' />} />
                <FormControlLabel
                  label='Patient Management'
                  control={
                    <Checkbox
                      onChange={handleChangeCheckBoxSingle}
                      checked={PatientManagement}
                      name='PatientManagement'
                    />
                  }
                />
                <FormControlLabel
                  label='Reservation Management'
                  control={
                    <Checkbox
                      onChange={handleChangeCheckBoxSingle}
                      checked={ReservationManagement}
                      name='ReservationManagement'
                    />
                  }
                />
                <FormControlLabel
                  label='Report Management'
                  control={
                    <Checkbox
                      onChange={handleChangeCheckBoxSingle}
                      checked={ReportManagement}
                      name='ReportManagement'
                    />
                  }
                />
                <FormControlLabel
                  label='Dispatch'
                  control={<Checkbox onChange={handleChangeCheckBoxSingle} checked={Dispatch} name='Dispatch' />}
                />
                <FormControlLabel
                  label='Vehicle Management'
                  control={
                    <Checkbox
                      onChange={handleChangeCheckBoxSingle}
                      checked={VehicleManagement}
                      name='VehicleManagement'
                    />
                  }
                />
                <FormControlLabel
                  label='Driver Management'
                  control={
                    <Checkbox
                      onChange={handleChangeCheckBoxSingle}
                      checked={DriverManagement}
                      name='DriverManagement'
                    />
                  }
                />
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    )
  }

  const renderSpecialNotes = () => {
    return (
      <Grid xs={12} sm={12} sx={{ width: '45rem' }}>
        <TextField fullWidth rows={12} multiline label='Special Notes' variant='filled' />
      </Grid>
    )
  }

  const getStepContent = step => {
    switch (step) {
      case 0:
        return RenderBasicInfo()
      case 1:
        return renderContactInfo()
      case 2:
        return renderBillingProfile()
      case 3:
        return renderManageRates()
      case 4:
        return renderAccountPortalFacilityPortal()
      case 5:
        return renderSpecialNotes()
      default:
        return null
    }
  }

  const renderContent = () => {
    return getStepContent(activeStep)
  }

  const renderFooter = () => {
    const stepCondition = activeStep === steps.length - 1

    return (
      <Box sx={{ mt: 6, display: 'flex', justifyContent: 'space-between' }}>
        <Button
          color='secondary'
          variant='outlined'
          onClick={handlePrev}
          disabled={activeStep === 0}
          startIcon={<Icon icon='tabler:chevron-left' />}
        >
          Previous
        </Button>
        <Button
          variant='contained'
          color={stepCondition ? 'success' : 'primary'}
          type={stepCondition ? 'submit' : 'button'}
          {...(!stepCondition ? { endIcon: <Icon icon='tabler:chevron-right' /> } : {})}
          onClick={() => (stepCondition ? alert('Submitted..!!') : handleNext())}
        >
          {stepCondition ? 'Submit' : 'Next'}
        </Button>
      </Box>
    )
  }

  return (
    <Card sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' } }}>
      <StepperHeaderContainer>
        <StepperWrapper sx={{ height: '100%' }}>
          <Stepper
            connector={<></>}
            orientation='vertical'
            activeStep={activeStep}
            sx={{ height: '100%', minWidth: '15rem' }}
          >
            {steps.map((step, index) => {
              const RenderAvatar = activeStep >= index ? CustomAvatar : Avatar

              return (
                <Step
                  key={index}
                  onClick={() => setActiveStep(index)}
                  sx={{ '&.Mui-completed + svg': { color: 'primary.main' } }}
                >
                  <StepLabel>
                    <div className='step-label'>
                      <RenderAvatar
                        variant='rounded'
                        {...(activeStep >= index && { skin: 'light' })}
                        {...(activeStep === index && { skin: 'filled' })}
                        {...(activeStep >= index && { color: 'primary' })}
                        sx={{
                          ...(activeStep === index && { boxShadow: theme => theme.shadows[3] }),
                          ...(activeStep > index && { color: theme => hexToRGBA(theme.palette.primary.main, 0.4) })
                        }}
                      >
                        <Icon icon={step.icon} />
                      </RenderAvatar>
                      <div>
                        <Typography className='step-title'>{step.title}</Typography>
                        <Typography className='step-subtitle'>{step.subtitle}</Typography>
                      </div>
                    </div>
                  </StepLabel>
                </Step>
              )
            })}
          </Stepper>
        </StepperWrapper>
      </StepperHeaderContainer>
      <CardContent sx={{ pt: theme => `${theme.spacing(6)} !important` }}>
        <FormikProvider value={formik}>
          <Form autoComplete='off' noValidate onSubmit={handleSubmit}>
            {renderContent()}
            {renderFooter()}
          </Form>
        </FormikProvider>
      </CardContent>
    </Card>
  )
}

export default PropertyListingWizard
