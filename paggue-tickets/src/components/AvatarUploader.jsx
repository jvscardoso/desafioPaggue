import React, { useState } from 'react';
import { Button, Avatar, Box } from '@mui/material';

const styles = {
  input: {
    display: 'none',
  },
  avatar: {
    width: '150px',
    height: '150px',
  },
  button: {
    marginTop: '16px',
  },
  text: {
    marginTop: '8px',
  },
};

const AvatarUpload = () => {
  const [avatarImage, setAvatarImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveAvatar = () => {
    setAvatarImage(null);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Avatar alt="Avatar" src={avatarImage} sx={styles.avatar} />
      {avatarImage ? (
        <Button variant="contained" color="secondary" onClick={handleRemoveAvatar} sx={styles.button}>
          Remover Avatar
        </Button>
      ) : (
        <React.Fragment>
          <input
            accept="image/*"
            style={styles.input}
            id="avatar-upload"
            type="file"
            onChange={handleImageChange}
          />
          <label htmlFor="avatar-upload">
            <Button variant="contained" component="span" sx={styles.button}>
              Carregar Avatar
            </Button>
          </label>
        </React.Fragment>
      )}
    </Box>
  );
};

export default AvatarUpload;