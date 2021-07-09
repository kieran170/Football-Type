import React, {useContext, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { UserContext } from '../../context';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButtons() {
  const classes = useStyles();
  const userContext = useContext(UserContext)
  const [newImageFile, setImage] = useState<File>()
  const [preview, setPreview] = useState<string>()

  useEffect(() => {
    if (newImageFile) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(newImageFile)
    }
  },[newImageFile])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList| null = event.target.files
    if (files) {
      setImage(files[0])
    }
      
  }

  const handleDispatch = () => {
    userContext?.dispatch({
      type: 'UPDATE_FIELDS',
      key: 'newPhoto',
      payload: preview,
    })
  }

  useEffect(() => {
    handleDispatch()
  }, [preview])

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleChange}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Change Profile Photo
        </Button>
      </label>
    </div>
  );
}