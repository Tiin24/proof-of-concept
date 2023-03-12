import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { submitImage } from "../../redux/action/action";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import { State } from "../../redux/reducer/reducer";
import ResizeImage from "./ResizeImage";
import Dropzone, { DropzoneState } from "react-dropzone";
import { Box, Grid, Typography } from "@mui/material";

import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";

function DragAndDrop() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const dispatch: Dispatch<any> = useDispatch();

  const uploadData = useSelector((state: State) => state.uploadData);

  const handleFileInput = (files: File[]) => {
    const file = files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedFile) {
      dispatch(submitImage(selectedFile));
    }
  };

  const handleDeleteImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSelectedFile(null);
    setPreviewUrl("");
    dispatch({ type: 'DELETE_IMG' });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        sx={{
          textTransform: "none",
          border: "3px solid",
          borderRadius: "7px",
          color: "black",
          backgroundColor: "#fffff",
          boxShadow: "rgb(0 0 0) 6px 3px 1px",
          paddingBottom: "8px 16px",
          gap: "10px",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "342px",
          height: "332px",
        }}
      >

        <Typography fontSize={20}>Upload your Image</Typography>
        <Grid>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Dropzone onDrop={handleFileInput}>
              {({
                getRootProps,
                getInputProps,
                isDragActive,
              }: DropzoneState) => (
                <section
                  style={{
                    border: "2px dashed black",
                    width: "336px",
                    height: "216px",
                  }}
                >
                  <Grid
                    {...getRootProps()}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <input {...getInputProps()} />
                    {previewUrl ? (
                      <Grid
                        sx={{
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <img
                          src={previewUrl}
                          alt="Preview"
                          width={"100%"}
                          height={"84%"}
                        />
                        <button
                          type="button"
                          onClick={handleDeleteImage}
                          style={{
                            border: "none",
                            backgroundColor: "#e31e1e",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            marginTop: "-6px",
                            height: "35px",
                            cursor: "pointer",
                          }}
                        >
                          <Typography>Eliminar imagen</Typography>
                        </button>
                      </Grid>
                    ) : (
                      <Grid
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <AddToPhotosIcon fontSize="large" />
                        <p>
                          {isDragActive
                            ? "Suelta la imagen aquí"
                            : "Arrastra una imagen o haz clic para seleccionar una."}
                        </p>
                      </Grid>
                    )}
                  </Grid>
                </section>
              )}
            </Dropzone>
            <button
              type="submit"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                marginTop: "6px",
                border: "none",
                background: "none",
                cursor: "pointer",
              }}
            >
              <Typography> Submit </Typography> <KeyboardTabIcon />
            </button>
          </form>
        </Grid>
      </Grid>
      {uploadData && (
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <ResizeImage data={uploadData} />
        </Grid>
      )}
    </Box>
  );
}

export default DragAndDrop;

