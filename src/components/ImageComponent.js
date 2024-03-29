import React from 'react';
import { View } from 'react-native';
import { ButtonGroup, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Image from '../assets/Group 22.png';
import DialogBoxComponent from './DialogBoxComponent';

const ImageComponent = ({ screen, showImageDialog }) => {
    return (
        <View style={{ marginBottom: 10, elevation: 7, flexDirection: 'row' }}>
            <img
                src={Image}
                style={{
                    height: 100,
                    width: 330,
                }}
            />
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', marginRight: 10 }}>
                {screen === '/' ? (
                    // Render the buttons for the "/" screen
                    <ButtonGroup>
                        <Link to={`/portal/verify`}>
                            <Button variant='text' >
                                <Typography style={{ color: "#2c265a", fontWeight: 'bold' }}>
                                    Approval List
                                </Typography>
                            </Button>
                        </Link>
                        <Link to={`/menu/week1}`}>
                            <Button variant='text' >
                                <Typography style={{ color: "#2c265a", fontWeight: 'bold' }}>
                                    View Menu
                                </Typography>
                            </Button>
                        </Link>
                    </ButtonGroup>
                ) : screen === '/portal/verify' ? (
                    // Render the buttons for the "/portal/verify" screen
                    <ButtonGroup>
                        <Link to="/">
                            <Button variant='text'>
                                <Typography style={{ color: "#2c265a", fontWeight: 'bold' }}>
                                    Home
                                </Typography>
                            </Button>
                        </Link>
                        <Link to={`/menu/week1}`}>

                            <Button variant='text' >
                                <Typography style={{ color: "#2c265a", fontWeight: 'bold' }}>
                                    View Menu
                                </Typography>
                            </Button>
                        </Link>
                    </ButtonGroup>
                ) : screen === 'menu' ? (
                    // Render the buttons and handle button press for the "menu" screen
                    <ButtonGroup>
                        <Button variant='text' onClick={() => showImageDialog(true)}>
                            <Typography style={{ color: "#2c265a", fontWeight: 'bold', marginRight: 10 }}>
                                View Menu
                            </Typography>
                        </Button>
                        <Link to="/">
                            <Button variant='text'>
                                <Typography style={{ color: "#2c265a", fontWeight: 'bold', marginRight: 10 }}>
                                    Home
                                </Typography>
                            </Button>
                        </Link>
                    </ButtonGroup>
                ) : null}
            </View>
            {/* Render the DialogBoxComponent based on the state */}
            <DialogBoxComponent onClose={() => showImageDialog(false)} />
        </View>
    );
};

export default ImageComponent;
