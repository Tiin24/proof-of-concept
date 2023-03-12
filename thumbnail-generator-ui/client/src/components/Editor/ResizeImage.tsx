import React, { useState } from "react";
import { ImageRezise, UploadData } from "../../redux/action/action";
import LinkIcon from "@mui/icons-material/InsertLink";
import GetAppIcon from "@mui/icons-material/GetApp";
import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../redux/reducer/reducer";
import { Dispatch } from "redux";

interface ImageResizProps {
  data: UploadData;
}

export default function ResizeImage(props: ImageResizProps) {
  const { data } = props;

  const dispatch: Dispatch<any> = useDispatch();

  const newUrl = useSelector((state: State) => state.newUrl);

  const [width, setWidth] = useState("0");
  const [height, setHeight] = useState("0");
  const [loading, setLoading] = useState(false);

  const handleWidthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newWidth = e.target.value;
    setWidth(newWidth);
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newHeight = e.target.value;
    setHeight(newHeight);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    dispatch(ImageRezise(width, height, data));
    setTimeout(() => setLoading(false), 500);
  };

  const handleDownload = () => {
    if (newUrl) {
      fetch(newUrl)
        .then((res) => res.blob())
        .then((blob) => {
          const objectUrl = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = objectUrl;
          link.download = "image." + data.format;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
    }
  };

  const handleCopy = () => {
    if (newUrl) {
      navigator.clipboard.writeText(newUrl);
    }
  };

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Typography>Image Resizer</Typography>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            gap: "40px",
          }}
        >
          <label>
            Width:
            <select
              value={width}
              onChange={handleWidthChange}
              style={{
                borderRadius: "7px",
                border: "3px solid black",
                height: "26px",
                width: "65px",
              }}
            >
              <option value="">Select</option>
              <option value="120">120</option>
              <option value="300">300</option>
              <option value="600">600</option>
            </select>
          </label>
          <label>
            Height:
            <select
              value={height}
              onChange={handleHeightChange}
              style={{
                borderRadius: "7px",
                border: "3px solid black",
                height: "26px",
                width: "65px",
              }}
            >
              <option value="">Select</option>
              <option value="120">120</option>
              <option value="300">300</option>
              <option value="600">600</option>
            </select>
          </label>
        </Grid>
        <Grid>
          <Button type="submit">Resize</Button>
        </Grid>
      </form>
      {loading ? (
        <div>
          <CircularProgress />
        </div>
      ) : newUrl ? (
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <img
            src={newUrl}
            alt="Preview"
            style={{
              border: "6px solid #cecdcd",
              borderRadius: "20px",
            }}
          />
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Button onClick={handleCopy} variant="text" color="success">
              <LinkIcon />
            </Button>
            <Button onClick={handleDownload}>
              <GetAppIcon />
            </Button>
          </Grid>
        </Grid>
      ) : null}
    </Grid>
  );
}
