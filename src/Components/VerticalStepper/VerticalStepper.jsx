// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import StepContent from '@material-ui/core/StepContent';
// import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import odin from '../img/profile/1.jpg'
// import dva from '../img/profile/2.jpg'
// import tri from '../img/profile/3.jpg'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   button: {
//     marginTop: theme.spacing(1),
//     marginRight: theme.spacing(1),
//   },
//   actionsContainer: {
//     marginBottom: theme.spacing(2),
//   },
//   resetContainer: {
//     padding: theme.spacing(3),
//   },
// }));

// function getSteps() {
//   return ['Главная', 'О приложении', 'Возможности'];
// }

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <img className="slide" src ={odin} alt="slide1" />;
//     case 1:
//       return <img className="slide" src ={dva} alt="slide2" />;
//     case 2:
//       return <img className="slide" src ={tri} alt="slide3" />;;
//     default:
//       return 'Unknown step';
//   }
// }

// export default function VerticalLinearStepper() {
//   const classes = useStyles();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const steps = getSteps();

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   return (
//     <div className={classes.root}>
//       <Stepper activeStep={activeStep} orientation="vertical">
//         {steps.map((label, index) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//             <StepContent>
//               <Typography>{getStepContent(index)}</Typography>
//               <div className={classes.actionsContainer}>
//                 <div>
//                   <Button
//                     disabled={activeStep === 0}
//                     onClick={handleBack}
//                     className={classes.button}
//                   >
//                     Вернуться
//                   </Button>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={handleNext}
//                     className={classes.button}
//                   >
//                     {activeStep === steps.length - 1 ? 'Конец' : 'Вперед'}
//                   </Button>
//                 </div>
//               </div>
//             </StepContent>
//           </Step>
//         ))}
//       </Stepper>
//       {activeStep === steps.length && (
//         <Paper square elevation={0} className={classes.resetContainer}>
//           <Typography>Спасибо за внимание!</Typography>
//           <Button onClick={handleReset} className={classes.button}>
//             Сбросиить
//           </Button>
//         </Paper>
//       )}
//     </div>
//   );
// }
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import odin from '../img/profile/1.jpg'
import dva from '../img/profile/2.jpg'
import tri from '../img/profile/3.jpg'
import chetiri from '../img/profile/4.jpg'
import pyat from '../img/profile/5.jpg'
import shest from '../img/profile/6.jpg'
import sem from '../img/profile/7.jpg'
import finish from '../img/profile/finish.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Главная', 'О проекте', 'Возможности', 'Трудности', 'Технологии', 'Планы'];

}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <img className="slide" src ={odin} alt="slide1" />;
    case 1:
      return <img className="slide" src ={dva} alt="slide2" />;
    case 2:
      return <img className="slide" src ={tri} alt="slide3" />;
      case 3:
      return <img className="slide" src ={chetiri} alt="slide4" />;
    case 4:

      return <img className="slide" src ={shest} alt="slide6" />;
    case 5:

      return <img className="slide" src ={sem} alt="slide7" />;
    default:
      return 'Unknown stepIndex';
  }
}

function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div className="projectButtons">
            <Typography className={classes.instructions}><img className="slide" src ={finish} alt="finish" /></Typography>
            <Button className="yellowButton" onClick={handleReset}>Сбросить</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div className="projectButtons">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Назад
              </Button>
              <Button className="purpleButton" variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Конец' : 'Далее'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(HorizontalLabelPositionBelowStepper)

