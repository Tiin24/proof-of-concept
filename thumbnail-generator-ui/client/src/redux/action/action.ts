import { Dispatch } from 'redux';

export interface UploadData {
  secure_url: string;
  width: number;
  height: number;
  url: string;
  public_id: string;
  format: string;
}

export interface ImageState {
  image: string | undefined;
  uploadData: UploadData | null;
  loading: boolean;
  url: string | null;
}

export interface SetUrlAction {
  type: 'SET_URL';
  payload: string;
}

export interface DeleteAction {
  type: 'DELETE_IMG';
}

export interface SetImageAction {
  type: 'SET_IMAGE';
  payload: string;
}

export interface SetUploadDataAction {
  type: 'SET_UPLOAD_DATA';
  payload: UploadData;
}

type ImageAction = SetImageAction | SetUploadDataAction | SetUrlAction | DeleteAction ;
export const submitImage = (image: File) => async (dispatch: Dispatch<ImageAction>) => {
  const data = new FormData();
  data.append('file', image);
  data.append('upload_preset', 'My-uploads');
  data.append('cloud_name', 'dcghzjq2e');

  const response = await fetch('https://api.cloudinary.com/v1_1/dcghzjq2e/image/upload', {
    method: 'POST',
    body: data,
  }).then<UploadData>(res => res.json());

  dispatch({ type: 'SET_IMAGE', payload: response.secure_url });
  dispatch({ type: 'SET_UPLOAD_DATA', payload: response });
};


export const DeleteImage = (): ImageAction => ({
  type: 'DELETE_IMG'
});

export const ImageRezise = (width: string, height: string, data: UploadData) => async (
  dispatch: Dispatch<ImageAction>
) => {
  if (parseInt(width) > 600 || parseInt(height) > 600) {
    alert('Error: las dimensiones máximas permitidas son 600x600.');
  } else {
    let newUrl = "";
    try {
      newUrl = `https://res.cloudinary.com/dcghzjq2e/image/upload/c_thumb,g_faces,r_16,h_${height},w_${width}/${data.public_id}.${data.format}`
      const response = await fetch(newUrl)
    } catch (error) {
      newUrl = `https://res.cloudinary.com/dcghzjq2e/image/upload/c_fill,r_16,h_${height},w_${width}/${data.public_id}.${data.format}`;
    }
    dispatch({ type: 'SET_URL', payload: newUrl });
  }
};





  