import { Box, Paper, Typography } from '@mui/material' 

export default function Intro (){
    return (
        <Box alignContent={'end'}
              sx={{
                textAlign: { xs: 'center', sm: 'end' },
                marginTop: { xs: 2, sm: 0 },
              }}
            >
              
              <Paper elevation={3} style={{ maxHeight: '100vh', overflow: 'auto', padding: 3 }}>
                <Typography variant="body1">
                  Our revolutionary new budgeting web app is a seamless financial companion designed for simplicity and
                  efficiency. Unleash control over your finances with an intuitive interface that effortlessly guides you
                  through budgeting, expense tracking, and goal setting. Our user-friendly platform transforms the daunting
                  task of financial management into an enjoyable experience. Gain clear insights into your spending habits
                  and effortlessly achieve your financial goals. Whether you're a seasoned budgeter or just starting your
                  financial journey, our app adapts to your needs. Say goodbye to financial stress and hello to a brighter
                  financial future. Try our simple-to-use budgeting web app today and redefine your relationship with money.
                </Typography>
              </Paper>
            </Box>
    )
}