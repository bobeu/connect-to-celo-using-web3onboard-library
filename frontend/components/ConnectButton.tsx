import React from "react";
import { Button, Typography } from "@mui/material";
import { ConnectButtonProp } from "../interfaces";
// import { orange } from "@mui/material/colors";
import { useConnectWallet } from "@web3-onboard/react";

function ConnectButton(props: ConnectButtonProp) {
  const [{ connecting }, ] = useConnectWallet();

  const { connect } = props;

  return (
    <Button 
      disabled={connecting} 
      sx={{
        width: '50%',
        height: '120px',
        border: '0.1em solid whitesmoke',
        color: 'whitesmoke',
        borderRadius: '6px',
        textAnchor: 'start',
      }} 
      variant="text" onClick={async() => await connect() }
      className='connectButton'
    >
      <Typography variant={"h6"} >Connect Wallet</Typography>
    </Button>
  );
}

export default ConnectButton;
